

export const keycloakConfig = {
  baseUrl: process.env.KEYCLOAK_URL as string,
  realm: process.env.KEYCLOAK_REALM as string,
  clientId: process.env.KEYCLOAK_CLIENT_ID as string,
  clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string
};