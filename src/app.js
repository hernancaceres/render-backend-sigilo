// src/app.js
import express from "express";
import morgan from "morgan";
import cors from "cors";
import appVersionRoutes from "./routes/appVersions.routes.js"; // Importar nuevas rutas
import { FRONTEND_URL } from "./config.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));

// Rutas

app.use("/api/app-versions", appVersionRoutes); // Usar nuevas rutas

export default app;
