// src/routes/appVersions.routes.js
import { Router } from "express";
import { getLatestVersion, createAppVersion } from "../controllers/appVersion.controller.js";

const router = Router();

// Ruta para obtener la última versión
router.get("/latest", getLatestVersion);

// Ruta para crear una nueva versión
router.post("/", createAppVersion);

// Puedes agregar más rutas si es necesario, como actualizar o eliminar versiones.

export default router;
