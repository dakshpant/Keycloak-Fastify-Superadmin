import { FastifyInstance } from "fastify";
import { UsersController } from "./users.controller";
import { verifyJwt } from "../../plugins/jwt.plugin";
import { authorizeRoles } from "../../plugins/authorize.plugin";

export async function usersRoutes(fastify: FastifyInstance) {
    const usersController = new UsersController();

    // ✅ GET ALL USERS
    fastify.get(
        "/",
        {
            preHandler: [verifyJwt, authorizeRoles("superadmin", "hr")],
        },
        usersController.getUsers.bind(usersController)
    );

    // ✅ GET USER BY ID
    fastify.get(
        "/:id",
        {
            preHandler: [verifyJwt, authorizeRoles("superadmin", "hr")],
        },
        usersController.getUserById.bind(usersController)
    );

    // ✅ CREATE USER
    fastify.post(
        "/",
        {
            preHandler: [verifyJwt, authorizeRoles("superadmin", "hr")],
        },
        usersController.createUser.bind(usersController)
    );

    // ✅ UPDATE USER
    fastify.put(
        "/:id",
        {
            preHandler: [verifyJwt, authorizeRoles("superadmin", "hr")],
        },
        usersController.updateUser.bind(usersController)
    );

    // ✅ UPDATE ROLE
    fastify.put(
        "/:id/role",
        {
            preHandler: [verifyJwt, authorizeRoles("superadmin")],
        },
        usersController.updateUserRole.bind(usersController)
    );

    // ✅ DELETE USER
    fastify.delete(
        "/:id",
        {
            preHandler: [verifyJwt, authorizeRoles("superadmin")],
        },
        usersController.deleteUser.bind(usersController)
    );
}