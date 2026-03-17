import fastify from "fastify";
import cors from "@fastify/cors";
import { authRoutes } from "./modules/auth/auth.routes";
import { usersRoutes } from "./modules/users/users.routes";

const app = fastify({ logger: true });

// app.register(cors, {
//     origin: "http://localhost:5173",
//     credentials: true,
// });

// Routes
app.register(authRoutes, { prefix: "/api/auth" });
app.register(usersRoutes, { prefix: "/api/users" });

export default app;