// src/models/AppVersion.js
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const AppVersion = sequelize.define(
  "app_versions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mandatory: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    download_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    release_notes: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);
