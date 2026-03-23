import "fastify";

declare module "fastify" {
    interface FastifyRequest {
        user?: {
            id: string;
            username: string;
            email?: string;
            roles: string[];
        };
    }
}
//to user anyt overidden types use as