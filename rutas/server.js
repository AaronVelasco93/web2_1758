const express = require('express'); //Importacion del modulo de express
const path = require("path");

const app = express(); // Crea una instancia de un aplicacion de express
const PORT =3005;//Definimos el puerto que vamos a ocupar

const routes = require('./routes');//imoprta las rutas definidas

app.use('/', routes);//usamos las ruras importadas


//Servidor
// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT,()=>{
 console.log(`El servidor esta en funcionamiento: http://localhost:${PORT}`);
});

