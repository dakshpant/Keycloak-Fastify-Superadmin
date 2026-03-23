import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "./auth.service";

const authService = new AuthService();

interface LoginBody {
    username: string;
    password: string;
}

interface RefreshBody {
    refresh_token: string;
}

export class AuthController {

    async login(
        request: FastifyRequest<{ Body: LoginBody }>,
        reply: FastifyReply
    ) {
        const { username, password } = request.body;

        const token = await authService.login(username, password);

        // 🔐 Set cookies
        reply
            .setCookie("access_token", token.access_token, {
                httpOnly: true,
                secure: false, // true in production
                sameSite: "lax",
                path: "/",
            })
            .setCookie("refresh_token", token.refresh_token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                path: "/",
            });

        return reply.send({ message: "Login successful", access_token: token.access_token });
    }

    async refreshToken(request: FastifyRequest, reply: FastifyReply) {
        const refreshToken = request.cookies.refresh_token;

        if (!refreshToken) {
            return reply.status(401).send({ message: "No refresh token" });
        }

        const token = await authService.refreshToken(refreshToken);

        reply
            .setCookie("access_token", token.access_token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                path: "/",
            })
            .setCookie("refresh_token", token.refresh_token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                path: "/",
            });

        return reply.send({ message: "Token refreshed" });
    }

    async logout(request: FastifyRequest, reply: FastifyReply) {
        reply
            .clearCookie("access_token")
            .clearCookie("refresh_token")
            .send({ message: "Logged out" });
    }

    async profile(request: FastifyRequest, reply: FastifyReply) {

        const user = request.user;

        return reply.send({
            id: user?.id,
            username: user?.username,
            email: user?.email,
            roles: user?.roles
        });

    }
}