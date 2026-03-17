import { FastifyReply, FastifyRequest } from "fastify";
import { UsersService } from "./users.service";

const usersService = new UsersService();

export class UsersController {

  async getUsers(request: FastifyRequest, reply: FastifyReply) {

    const users = await usersService.getUsers();

    return reply.send(users);
  }

  async getUserById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {

    const user = await usersService.getUserById(request.params.id);

    return reply.send(user);
  }

  async deleteUser(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {

    const result = await usersService.deleteUser(request.params.id);

    return reply.send(result);
  }
  async createUser(request: FastifyRequest, reply: FastifyReply) {

    const user = await usersService.createUser(request.body);

    return reply.send(user);
  }

}