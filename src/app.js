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
//app.use(cors({ origin: FRONTEND_URL, credentials: true }));


const allowedOrigins = ["http://localhost:5173", FRONTEND_URL];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));


// app.use(cors({
//     origin: "*",
//     credentials: true,
//   }));

// Rutas

app.use("/api/app-versions", appVersionRoutes); // Usar nuevas rutas

export default app;
