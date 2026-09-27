// src/controllers/flightController.js
import Flight from '../models/Flight.js';

// Obtener todos los vuelos
export const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo vuelo
export const createFlight = async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);
    res.status(201).json(newFlight);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener vuelo por ID
export const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: 'Vuelo no encontrado' });
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar vuelo
export const updateFlight = async (req, res) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, req.body, { 
      new: true, 
      runValidators: true 
    });
    if (!updatedFlight) return res.status(404).json({ message: 'Vuelo no encontrado' });
    res.status(200).json(updatedFlight);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar vuelo
export const deleteFlight = async (req, res) => {
  try {
    const deletedFlight = await Flight.findByIdAndDelete(req.params.id);
    if (!deletedFlight) return res.status(404).json({ message: 'Vuelo no encontrado' });
    res.status(200).json({ message: 'Vuelo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};