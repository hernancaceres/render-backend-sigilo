// src/controllers/appVersion.controller.js
import { AppVersion } from "../models/AppVersion.js";

// Obtener la última versión de la app
export async function getLatestVersion(req, res) {
    try {
        const latestVersion = await AppVersion.findOne({
            order: [["created_at", "DESC"]],
        });
        if (!latestVersion) {
            return res.status(404).json({ message: "No hay versiones disponibles." });
        }
        res.json(latestVersion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Crear una nueva versión de la app
export async function createAppVersion(req, res) {
    const { version, mandatory, download_url, release_notes } = req.body;
    try {
        const newVersion = await AppVersion.create({
            version,
            mandatory,
            download_url,
            release_notes,
        });
        res.status(201).json(newVersion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
