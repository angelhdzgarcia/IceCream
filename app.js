// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const heladosRouter = require('./routes/helados');

const app = express();
const port = 3000;

// Configurar la conexión a MongoDB
require('./db');

app.use(bodyParser.json());

// Rutas para los sabores de helados
app.use('/helados', heladosRouter);

app.listen(port, () => {
  console.log(`API de helados escuchando en el puerto ${port}`);
});
