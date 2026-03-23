import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import { keycloakConfig } from "../config/keycloak.config";

const client = jwksClient({
    jwksUri: `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/certs`,
});

function getKey(header: any, callback: any) {
    client.getSigningKey(header.kid, function (err, key: any) {
        if (err) {
            callback(err, null);
        } else {
            const signingKey = key.getPublicKey();
            callback(null, signingKey);
        }
    });
}

export async function verifyJwt(
    request: FastifyRequest,
    reply: FastifyReply
) {
    // 🔥 CHANGE: Read from cookies
    const token = request.cookies?.access_token;

    if (!token) {
        return reply.code(401).send({ message: "Missing token" });
    }

    try {
        const decoded: any = await new Promise((resolve, reject) => {
            jwt.verify(
                token,
                getKey,
                {
                    issuer: `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}`,
                    algorithms: ["RS256"],
                },
                (err, decoded) => {
                    if (err) reject(err);
                    else resolve(decoded);
                }
            );
        });
        console.log("ROLES FROM TOKEN:", decoded.realm_access?.roles);

        console.log("FULL TOKEN:", decoded);
        console.log("ROLES:", decoded.realm_access?.roles);
        // ✅ attach user
        (request as any).user = {
            id: decoded.sub,
            username: decoded.preferred_username,
            email: decoded.email,
            roles: decoded.realm_access?.roles || [],
        };

    } catch (error) {
        console.log("JWT ERROR:", error);

        return reply.code(401).send({
            message: "Invalid or expired token",
        });
    }
}