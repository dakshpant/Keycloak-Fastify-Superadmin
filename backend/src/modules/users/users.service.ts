import axios from "axios";
import { keycloakConfig } from "../../config/keycloak.config";
import { KeycloakService } from "../../services/keycloak.services";

const { baseUrl, realm } = keycloakConfig;

export class UsersService {

    private keycloakService = new KeycloakService();

    async getUsers() {

        const adminToken = await this.keycloakService.getAdminAccessToken();

        const response = await axios.get(
            `${baseUrl}/admin/realms/${realm}/users`,
            {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                },
            }
        );

        return response.data;
    }

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

    async createUser(data: any) {

        const adminToken = await this.keycloakService.getAdminAccessToken();

        const response = await axios.post(
            `${baseUrl}/admin/realms/${realm}/users`,
            {
                username: data.username,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                enabled: true
            },
            {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return {
            message: "User created successfully"
        };
    }
}