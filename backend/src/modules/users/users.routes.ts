import { FastifyInstance } from "fastify";
import { UsersController } from "./users.controller";

export async function usersRoutes(fastify: FastifyInstance) {

    const usersController = new UsersController();
    fastify.get("/", usersController.getUsers);
    fastify.get("/:id", usersController.getUserById);
    fastify.post("/", usersController.createUser);
    fastify.delete("/:id", usersController.deleteUser);

}