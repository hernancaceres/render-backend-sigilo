import { Expo } from 'expo-server-sdk';
import { DeviceToken } from '../models/DeviceToken.js';

// Obtener todos los tokens registrados
export async function getAllTokens(req, res) {
  try {
    const tokens = await DeviceToken.findAll();
    res.json(tokens);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// Crea un nuevo cliente Expo
let expo = new Expo();

export async function sendPushNotification(req, res) {
  const { message } = req.body;

  try {
    // Recupera todos los tokens de los dispositivos
    const deviceTokens = await DeviceToken.findAll();

    if (deviceTokens.length === 0) {
      return res.status(400).json({ message: 'No hay tokens registrados' });
    }

    let messages = [];
    for (let { token } of deviceTokens) {
      if (!Expo.isExpoPushToken(token)) {
        console.error(`El token ${token} no es válido`);
        continue;
      }

      messages.push({
        to: token,
        sound: 'default',
        body: message,
        data: { message }
      });
    }

    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];
    for (let chunk of chunks) {
      try {
        let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        tickets.push(...ticketChunk);
      } catch (error) {
        console.error(error);
      }
    }

    res.json({ message: 'Notificación enviada', tickets });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function registerDeviceToken(req, res) {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token no proporcionado' });
  }

  try {
    const existingToken = await DeviceToken.findOne({ where: { token } });
    if (existingToken) {
      return res.status(400).json({ message: 'El token ya está registrado' });
    }

    const newToken = await DeviceToken.create({ token });
    res.status(201).json(newToken);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
