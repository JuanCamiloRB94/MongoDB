const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});

// Conexión a Mongo (ajusta si usas Atlas u otra URL)
mongoose.connect('mongodb://localhost:27017/api_practice')
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error conectando a MongoDB:', error));

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
