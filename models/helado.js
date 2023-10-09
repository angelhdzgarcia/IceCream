// models/helado.js
const mongoose = require('mongoose');

const heladoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  valoracion: Number,
});

module.exports = mongoose.model('Helado', heladoSchema);

