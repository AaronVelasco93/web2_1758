//routes/index.js
const express =require('express');
const router = express.Router();
const path = require("path");

//Definicion de rutas y sus manejadores
router.get('/',(req,res)=>{
    //res.send('Hola mundo');
    res.sendFile(path.join(__dirname+"/index.html"));
});

router.get('/about',(req,res)=>{
    res.send('Acerca de nosotros');
});
router.get('/registro',(req,res)=>{
    res.send('Te vas a registrar');
});
module.exports = router; //Exportamos el enrutador