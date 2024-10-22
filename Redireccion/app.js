const express = require('express');
const path = require('path');
const pagesRoutes = require('./routes/pages'); // Importa las rutas

const app = express();
const PORT = 3000;

// Sirviendo archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Usar las rutas del archivo pages.js
app.use('/', pagesRoutes);

// Redirección automática desde la raíz a la Página 1
app.get('/', (req, res) => {
    res.redirect('/page1');
});

// Servidor en funcionamiento
app.listen(PORT, () => {
    console.log(`El servidor está en funcionamiento: http://localhost:${PORT}`);
});