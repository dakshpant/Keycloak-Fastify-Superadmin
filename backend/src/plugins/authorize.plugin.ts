import { FastifyReply, FastifyRequest } from "fastify";

export function authorizeRoles(...allowedRoles: string[]) {
    return async function (
        request: FastifyRequest,
        reply: FastifyReply
    ) {
        const user: any = request.user;

        if (!user) {
            return reply.code(401).send({
                message: "Unauthorized",
            });
        }

        // ✅ FIX: use roles from verifyJwt
        const roles = user.roles || [];

        console.log("USER ROLES:", roles);
        console.log("ALLOWED ROLES:", allowedRoles);

        const hasRole = roles.some((role: string) =>
            allowedRoles.includes(role)
        );

        if (!hasRole) {
            return reply.code(403).send({
                message: "Forbidden: insufficient permissions",
            });
        }
    };
}