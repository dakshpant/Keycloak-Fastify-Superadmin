import { FastifyReply, FastifyRequest } from "fastify";
import { UsersService } from "./users.service";

export class UsersController {
  private usersService = new UsersService(); // ✅ FIXED

  async getUsers(request: FastifyRequest, reply: FastifyReply) {
    const users = await this.usersService.getUsers();
    return reply.send(users);
  }

  async getUserById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const user = await this.usersService.getUserById(request.params.id);
    return reply.send(user);
  }

  async createUser(request: FastifyRequest, reply: FastifyReply) {
    const user = await this.usersService.createUser(request.body);
    return reply.send(user);
  }

  async deleteUser(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const result = await this.usersService.deleteUser(request.params.id);
    return reply.send(result);
  }

  // ✅ UPDATE USER (FIXED)
  async updateUser(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      const payload = request.body;

      const result = await this.usersService.updateUser(id, payload);

      return reply.send(result);
    } catch (error) {
      console.log("UPDATE ERROR:", error);
      return reply.code(500).send({ message: "Update failed" });
    }
  }

  // ✅ UPDATE ROLE (FIXED)
  async updateUserRole(
    request: FastifyRequest<{ Params: { id: string }; Body: { role: string } }>,
    reply: FastifyReply
  ) {
    try {
      const { id } = request.params;
      const { role } = request.body;

      const result = await this.usersService.updateUserRole(id, role);

      return reply.send(result);
    } catch (error) {
      console.log("ROLE UPDATE ERROR:", error);
      return reply.code(500).send({ message: "Role update failed" });
    }
  }
}