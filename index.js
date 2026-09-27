// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import flightRoutes from './src/routes/FlightRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/flights', flightRoutes);

const PORT = process.env.PORT || 3000;

// Evita cierres silenciosos imprimiendo el stack de error exacto en consola
process.on('uncaughtException', (err) => {
  console.error('Error crítico no capturado:', err.stack || err);
});

process.on('unhandledRejection', (reason) => {
  console.error('Promesa rechazada no manejada:', reason);
});

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Servidor activo en http://localhost:${PORT}`);
  } catch (error) {
    console.error('Fallo en la conexión DB:', error.message);
  }
});