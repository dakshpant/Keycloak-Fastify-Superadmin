import "fastify";

declare module "fastify" {
    interface FastifyRequest {
        user?: any;
    }
}
//to user anyt overidden types use as