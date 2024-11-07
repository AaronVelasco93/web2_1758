const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app= express();
//configuracion para el uso peticiones post
app.use( bodyParser.urlencoded({extended:false}));

//platillas que sean dinamicas
app.set('view engine','ejs');

//crear la conexion
const db = mysql.createConnection({
    host: 'localhost',//server
    user: 'root',//usuario de la DB
    password: '123456',//pass de tu DB
    database: 'fes_aragon3',//nombre de la base de datos
    port: 3308//puerto
});

//comprobacion de la conexion de la base de datos
db.connect(err=>{
    if(err){
        console.log(`Erro en la conexion de base de datos BB ${err}`);
    }else {
        console.log(`La base de datos funciona y esta conectada`)    
    }
});

//iniciamos el server

const port = 3009;
app.listen(port,()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});

