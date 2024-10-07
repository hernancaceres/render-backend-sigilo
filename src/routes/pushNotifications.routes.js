import { Router } from 'express';
import { getAllTokens, sendPushNotification, registerDeviceToken } from '../controllers/pushNotifications.controller.js';

const router = Router();

// Ruta para obtener todos los tokens registrados
router.get("/tokens", getAllTokens);

// Ruta para registrar el token del dispositivo
router.post('/register-token', registerDeviceToken);

// Ruta para enviar notificaciones push
router.post('/send-notification', sendPushNotification);


export default router;
