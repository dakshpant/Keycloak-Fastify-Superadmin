import fastify from "fastify";
import cors from "@fastify/cors";
import { authRoutes } from "./modules/auth/auth.routes";
import { usersRoutes } from "./modules/users/users.routes";
import cookie from "@fastify/cookie";

const app = fastify({ logger: true });

app.register(cors, {
    origin: "http://localhost:5173",
    credentials: true, // 🔥 THIS LINE FIXES EVERYTHING
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
});

app.register(cookie);

// Routes
app.register(authRoutes, { prefix: "/api/auth" });
app.register(usersRoutes, { prefix: "/api/users" });

export default app;