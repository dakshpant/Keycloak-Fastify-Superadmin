import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import { keycloakConfig } from "../config/keycloak.config";

const client = jwksClient({
    jwksUri: `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/certs`,
});

function getKey(header: any, callback: any) {
    client.getSigningKey(header.kid, function (err, key: any) {
        const signingKey = key.getPublicKey();
        callback(null, signingKey);
    });
}

export async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return reply.code(401).send({ message: "Missing token" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, getKey, {}, (err, decoded) => {
                if (err) reject(err);
                else resolve(decoded);
            });
        });

        (request as any).user = decoded;
    } catch (error) {
        return reply.code(401).send({
            message: "Invalid token",
        });
    }
}
