import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const DeviceToken = sequelize.define('device_tokens', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,  // Para llevar registro de cuándo fue registrado
});
