const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// ======================
// MIDDLEWARES
// ======================
app.use(bodyParser.json());

// ======================
// RUTAS
// ======================

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente 🚀');
});

// Registro (simulado para evidencia)
app.get('/register/:usuario/:contraseña', (req, res) => {
  const { usuario, contraseña } = req.params;
  res.send(`Usuario ${usuario} registrado correctamente`);
});

// Login (simulado para evidencia)
app.get('/login/:usuario/:contraseña', (req, res) => {
  const { usuario, contraseña } = req.params;

  if (usuario === 'admin' && contraseña === '1234') {
    res.send('Autenticación satisfactoria');
  } else {
    res.send('Error en la autenticación');
  }
});

// ======================
// CONEXIÓN A MONGODB
// ======================
mongoose.connect('mongodb://localhost:27017/api_practice')
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

// ======================
// SERVIDOR
// ======================
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

