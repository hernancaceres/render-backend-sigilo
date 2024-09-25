import Sequelize from "sequelize";
import {DB_HOST,DB_DATABASE,DB_USER,DB_PASSWORD} from "../config.js"

export const sequelize = new Sequelize(
    DB_DATABASE, // db name,
    DB_USER, // username
    DB_PASSWORD, // password
    {
        host: DB_HOST,
        dialect: "postgres",
    }
);