import axios from "axios";
import { keycloakConfig } from "../../config/keycloak.config";
import { KeycloakService } from "../../services/keycloak.services";
import { APP_ROLES } from "../../config/roles.config";

const { baseUrl, realm } = keycloakConfig;

export class UsersService {

    private keycloakService = new KeycloakService();

    //Get User
    async getUsers() {
        try {
            const adminToken = await this.keycloakService.getAdminAccessToken();

            console.log("ADMIN TOKEN:", adminToken); // 🔥 DEBUG

            const usersRes = await axios.get(
                `${baseUrl}/admin/realms/${realm}/users`,
                {
                    headers: {
                        Authorization: `Bearer ${adminToken}`,
                    },
                }
            );

            const users = usersRes.data;

            const enrichedUsers = await Promise.all(
                users.map(async (user: any) => {
                    try {
                        const rolesRes = await axios.get(
                            `${baseUrl}/admin/realms/${realm}/users/${user.id}/role-mappings/realm`,
                            {
                                headers: {
                                    Authorization: `Bearer ${adminToken}`,
                                },
                            }
                        );

                        const allowedRoles = ["superadmin", "hr"];

                        return {
                            ...user,
                            roles: rolesRes.data
                                .map((role: any) => role.name)
                                .filter((role: string) => APP_ROLES.includes(role)),
                        };

                    } catch (err) {
                        return {
                            ...user,
                            roles: [],
                        };
                    }
                })
            );

            return enrichedUsers;

        } catch (error) {
            console.log("GET USERS ERROR:", error); // 🔥 IMPORTANT
            throw error;
        }
    }

    //Update User (Edit + Status)
    async updateUser(userId: string, data: any) {
        const adminToken = await this.keycloakService.getAdminAccessToken();

        const payload: any = {};

        if (data.firstName !== undefined) payload.firstName = data.firstName;
        if (data.lastName !== undefined) payload.lastName = data.lastName;
        if (data.email !== undefined) payload.email = data.email;
        if (data.enabled !== undefined) payload.enabled = data.enabled;

        await axios.put(
            `${baseUrl}/admin/realms/${realm}/users/${userId}`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return { message: "User updated successfully" };
    }

    //Update Role
    async updateUserRole(userId: string, newRoleName: string) {

        const adminToken = await this.keycloakService.getAdminAccessToken();

        const headers = {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "application/json",
        };

        // 1️⃣ Get current roles
        const currentRolesRes = await axios.get(
            `${baseUrl}/admin/realms/${realm}/users/${userId}/role-mappings/realm`,
            { headers }
        );

        const currentRoles = currentRolesRes.data.filter((role: any) =>
            APP_ROLES.includes(role.name)
        );

        // 2️⃣ Remove all roles
        if (currentRoles.length > 0) {
            await axios.delete(
                `${baseUrl}/admin/realms/${realm}/users/${userId}/role-mappings/realm`,
                {
                    headers,
                    data: currentRoles,
                }
            );
        }

        // 3️⃣ Get new role
        const roleRes = await axios.get(
            `${baseUrl}/admin/realms/${realm}/roles/${newRoleName}`,
            { headers }
        );

        const role = roleRes.data;

        // 4️⃣ Assign new role
        await axios.post(
            `${baseUrl}/admin/realms/${realm}/users/${userId}/role-mappings/realm`,
            [
                {
                    id: role.id,
                    name: role.name,
                },
            ],
            { headers }
        );

        return { message: "Role updated successfully" };
    }
    //Get User By Id
    async getUserById(userId: string) {

        const adminToken = await this.keycloakService.getAdminAccessToken();

        const response = await axios.get(
            `${baseUrl}/admin/realms/${realm}/users/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                },
            }
        );

        return response.data;
    }

    //delete User
    async deleteUser(userId: string) {

        const adminToken = await this.keycloakService.getAdminAccessToken();

        await axios.delete(
            `${baseUrl}/admin/realms/${realm}/users/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                },
            }
        );

        return { message: "User deleted successfully" };
    }

    //User Onboarding
    async createUser(data: any) {

        const adminToken = await this.keycloakService.getAdminAccessToken();

        const headers = {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "application/json"
        };

        console.log("Starting onboarding for:", data.username);
        //Create Usr
        const createResponse = await axios.post(
            `${baseUrl}/admin/realms/${realm}/users`,
            {
                username: data.username,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                enabled: true
            },
            { headers }
        );

        const locationHeader = createResponse.headers.location;
        /*
        keycloak doesnot return user id in response body
        so we have to extract it from the location header
        Location:
        /admin/realms/demoRealm/users/8a5c1d3a-4e34-...

        The below function pops the last id form the header
        userId = 8a5c1d3a-4e34-
        */
        const userId = locationHeader.split("/").pop();

        //User Pass Set
        await axios.put(
            `${baseUrl}/admin/realms/${realm}/users/${userId}/reset-password`,
            {
                type: "password",
                value: data.password,
                temporary: false //user can immediately login 
            },
            { headers }
        );
        console.log("Password set successfully");

        //Role set/assign
        const roleResponse = await axios.get(
            `${baseUrl}/admin/realms/${realm}/roles/${data.role}`,
            { headers }
        );

        const role = roleResponse.data;

        await axios.post(
            `${baseUrl}/admin/realms/${realm}/users/${userId}/role-mappings/realm`,
            [
                {
                    id: role.id,
                    name: role.name
                }
            ],
            { headers }
        );
        console.log("Role assigned:", role.name);


        //Assign Group to usr
        const groupsResponse = await axios.get(
            `${baseUrl}/admin/realms/${realm}/groups`,
            { headers }
        );

        const group = groupsResponse.data.find(
            (g: any) => g.name === data.group
        );

        await axios.put(
            `${baseUrl}/admin/realms/${realm}/users/${userId}/groups/${group.id}`,
            {},
            { headers }
        );
        console.log("Group assigned:", group.name);

        return {
            message: "Employee onboarded successfully",

            user: {
                id: userId,
                username: data.username,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName
            },

            password: {
                status: "SET",
                temporary: false
            },

            roleAssigned: role.name,

            groupAssigned: group.name
        };
    }
}