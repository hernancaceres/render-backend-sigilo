// config.js
import dotenv from "dotenv";
dotenv.config();

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 5432;
export const DB_DATABASE = process.env.DB_DATABASE || "sigilodb";
export const DB_USER = process.env.DB_USER || "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD || "v4juuK4fUPYoguaK";
export const PORT = process.env.PORT || 4000;
