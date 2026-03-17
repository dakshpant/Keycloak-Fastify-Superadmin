import dotenv from "dotenv";
dotenv.config();
import app from "./app";
const PORT = process.env.PORT || 5000;

async function start() {
  try {
    app.listen({ port: Number(PORT) });
    console.log(`Server running on Port:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();