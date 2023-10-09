// routes/helados.js
const express = require('express');
const router = express.Router();
const Helado = require('../models/helado');

// Ruta para obtener todos los sabores de helados
router.get('/', async (req, res) => {
  try {
    const helados = await Helado.find();
    res.json(helados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los helados' });
  }
});

// Ruta para agregar un nuevo sabor de helado
router.post('/', async (req, res) => {
  const { nombre, precio, valoracion } = req.body;
  try {
    const nuevoHelado = new Helado({ nombre, precio, valoracion });
    await nuevoHelado.save();
    res.status(201).json(nuevoHelado);
  } catch (error) {
    res.status(400).json({ error: 'Error al agregar el helado' });
  }
});

// Ruta para eliminar un sabor de helado por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await Helado.findByIdAndRemove(id);
    if (resultado) {
      res.json({ mensaje: 'Helado eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Helado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el helado' });
  }
});

module.exports = router;
