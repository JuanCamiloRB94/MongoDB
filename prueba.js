// iniciamos el modulo de express con el fin  de dar inicio al servidor, evitando varias configuraciones
const express = require('express');
const app = express();
/* se crean las rutas*/
app.get('/', (req, res) => {
    res.send('prueba 1 del servidor con express'); // ruta por defecto //
});
// Primero se configura como va a escuchar el servidor las peticiones
app.listen(3000);
