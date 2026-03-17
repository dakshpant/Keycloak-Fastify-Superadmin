import { FastifyInstance } from "fastify";
import { AuthController } from "./auth.controller";
import { verifyJwt } from "../../plugins/jwt.plugin";

export async function authRoutes(fastify: FastifyInstance) {

    //Initializer controller class
    const controller = new AuthController();

    //Register routes
    fastify.post("/login", controller.login);
    fastify.post("/refresh", controller.refreshToken);
    fastify.get("/profile", { preHandler: verifyJwt }, controller.profile);

}