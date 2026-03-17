import { KeycloakService } from "../../services/keycloak.services";

const keycloakService = new KeycloakService();

export class AuthService {

    //Login Service
    async login(username: string, password: string) {
        const token = await keycloakService.login(username, password);
        return token;
    }
    //refrest Token 
    async refreshToken(refreshToken: string) {
        const token = await keycloakService.refreshToken(refreshToken);
        return token;
    }
    //Get Users


}