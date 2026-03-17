import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export class AuthController {

    async login(request: FastifyRequest, reply: FastifyReply) {

        const { username, password } = request.body as any;

        const token = await authService.login(username, password);

        return reply.send(token);
    }

    async refreshToken(request: FastifyRequest, reply: FastifyReply) {

        const { refresh_token } = request.body as any;

        const token = await authService.refreshToken(refresh_token);

        return reply.send(token);
    }

    async profile(request: FastifyRequest, reply: FastifyReply) {

        const user = (request as any).user;

        return reply.send({
            username: user.preferred_username,
            email: user.email,
            roles: user.realm_access?.roles,
            groups: user.groups
        });

    }
}