const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app= express();
//configuracion para el uso peticiones post
app.use( bodyParser.urlencoded({extended:false}));

//platillas que sean dinamicas
app.set('view engine','ejs');

const db = mysql.createConnection({
    host: 'localhost',//server
    user: 'root',
    password: '123456',
    database: 'node_crud',
    port: 3306
});

