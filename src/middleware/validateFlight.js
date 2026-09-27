// src/middlewares/validateFlight.js
import Joi from 'joi';

const flightSchema = Joi.object({
  code: Joi.string().alphanum().min(3).max(10).required(),
  origin: Joi.string().length(3).required(),
  destination: Joi.string().length(3).required(),
  date: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).required(), // YYYY-MM-DD
  departureTime: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required(), // HH:MM (24h)
  arrivalTime: Joi.string().pattern(/^([01]\d|2[0-3]):([0-5]\d)$/).required(), // HH:MM (24h)
  availableSeats: Joi.number().integer().min(0).required(),
  status: Joi.string().valid('Disponible', 'Retrasado', 'Cancelado', 'Completo')
});

// Middleware de validación para interceptar payloads inválidos antes del controlador
export const validateFlight = (req, res, next) => {
  const { error } = flightSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ 
      errors: error.details.map(d => d.message) 
    });
  }
  next();
};