import { FastifyInstance } from "fastify";
import { AuthController } from "./auth.controller";
import { verifyJwt } from "../../plugins/jwt.plugin";

export async function authRoutes(fastify: FastifyInstance) {

    const controller = new AuthController();

    // Login
    fastify.post("/login", controller.login);

    // Refresh token
    fastify.post("/refresh", controller.refreshToken);

    // Get profile
    fastify.get(
        "/profile",
        { preHandler: verifyJwt },
        controller.profile
    );
}