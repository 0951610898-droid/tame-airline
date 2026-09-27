// src/routes/flightRoutes.js
import { Router } from 'express';
import { getFlights, createFlight, getFlightById, updateFlight, deleteFlight } from '../controllers/FlightController.js';
import { validateFlight } from '../middlewares/validateFlight.js';

const router = Router();

router.route('/')
  .get(getFlights)
  .post(validateFlight, createFlight); // Validación inyectada en creación

router.route('/:id')
  .get(getFlightById)
  .put(validateFlight, updateFlight)  // Validación inyectada en actualización
  .delete(deleteFlight);

export default router;