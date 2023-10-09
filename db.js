// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/helados-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conexión a MongoDB establecida');
});

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});
