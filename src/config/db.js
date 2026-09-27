// src/config/db.js
import mongoose from 'mongoose';

export const connectDB = async () => {
  // Validación para evitar lanzamientos no controlados si no hay URI configurada
  if (!process.env.MONGO_URI || process.env.MONGO_URI.includes('tu_cadena_de_conexion')) {
    throw new Error('MONGO_URI no configurada o inválida en el archivo .env');
  }
  
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(` MongoDB Conectado: ${conn.connection.host}`);
};