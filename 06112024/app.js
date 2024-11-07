/*
const operacion = (numero1, numero2,op )=>{
    return console.log(op(numero1,numero2));
}
operacion(1,3,(a,b)=>a+b);
operacion(1,3,(a,b)=>a-b);
*/
/*
const operacion = (numero1, numero2,callback )=>{
    return console.log(callback(numero1,numero2));
}
operacion(1,3,(a,b)=>a+b);
operacion(1,3,(a,b)=>a-b);
*/
/*
function saludar (nombre){
    console.log(`hola ${nombre}`);
}
function procesarEntradaUsuario(callback){
        const nombre= prompt("Ingresa nombre");
        callback(nombre);
}
procesarEntradaUsuario(saludar);
*/


const operacion = (numero1, numero2, callback)=>{
    return setTimeout(()=>{
        callback (numero1,numero2);
    },800);
}

operacion (1,3,(a,b)=>{
    console.log(a+b);
});