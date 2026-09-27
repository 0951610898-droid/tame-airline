// src/models/Flight.js
import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, uppercase: true, trim: true },
  origin: { type: String, required: true, uppercase: true, trim: true },
  destination: { type: String, required: true, uppercase: true, trim: true },
  date: { type: String, required: true }, // Formato YYYY-MM-DD
  departureTime: { type: String, required: true }, // Formato HH:MM
  arrivalTime: { type: String, required: true }, // Formato HH:MM
  availableSeats: { type: Number, required: true, min: 0 },
  status: {
    type: String,
    enum: ['Disponible', 'Retrasado', 'Cancelado', 'Completo'],
    default: 'Disponible'
  }
}, { timestamps: true });

export default mongoose.model('Flight', flightSchema);