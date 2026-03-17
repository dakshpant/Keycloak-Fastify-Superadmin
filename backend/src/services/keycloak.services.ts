import { keycloakConfig } from "../config/keycloak.config";
import { httpClient } from "../utils/httpClients.utils";
import axios from "axios";
const { baseUrl, realm, clientId, clientSecret } = keycloakConfig;

export class KeycloakService {
  //implementing Admin access token caching
  private adminToken: string | null = null;
  private tokenExpiry: number = 0;

  //USER LOGIN
  async login(username: string, password: string) {

    const params = new URLSearchParams();

    params.append("grant_type", "password");
    params.append("client_id", keycloakConfig.clientId);
    params.append("client_secret", keycloakConfig.clientSecret);
    params.append("username", username);
    params.append("password", password);

    const response = await axios.post(
      `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`,
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" //keycloak requires x-www-form encoding not json form
        }
      }
    );

    return response.data;
  }
  //refresh Token Generator
  async refreshToken(refreshToken: string) {

    const params = new URLSearchParams();

    params.append("grant_type", "refresh_token");
    params.append("client_id", keycloakConfig.clientId);
    params.append("client_secret", keycloakConfig.clientSecret);
    params.append("refresh_token", refreshToken);

    const response = await axios.post(
      `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`,
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    return response.data;
  }

  async getAdminAccessToken(): Promise<string> {
    const now = Date.now();

    if (this.adminToken && now < this.tokenExpiry) {
      return this.adminToken;
    }

    const url = `${baseUrl}/realms/${realm}/protocol/openid-connect/token`;

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", clientId);
    params.append("client_secret", clientSecret);

    const response = await axios.post(
      url,
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    this.adminToken = response.data.access_token;

    this.tokenExpiry = now + (response.data.expires_in - 10) * 1000;

    return this.adminToken as string;
  }



  // 🔑 ADMIN TOKEN
  // async getAdminToken() {

  //   const params = new URLSearchParams();

  //   params.append("grant_type", "client_credentials");
  //   params.append("client_id", clientId);
  //   params.append("client_secret", clientSecret);

  //   const response = await httpClient.post(
  //     `${baseUrl}/realms/${realm}/protocol/openid-connect/token`,
  //     params
  //   );

  //   return response.data.access_token;
  // }

  // // 👤 CREATE USER
  // async createUser(token: string, user: any) {

  //   await httpClient.post(
  //     `${baseUrl}/admin/realms/${realm}/users`,
  //     user,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     }
  //   );
  // }

  // // 👥 GET USERS
  // async getUsers(token: string) {

  //   const response = await httpClient.get(
  //     `${baseUrl}/admin/realms/${realm}/users`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     }
  //   );

  //   return response.data;
  // }
}