//Funcion declarativa
/*
function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
                 
}
console.log(numeroAleatorio(5,156));
*/
//Funcion expresada
/*
let numero = function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
                 
}
console.log(numero(5,156));
*/
//funcion flecha

let miNumeroFlecha = (max,min) =>{return Math.floor(Math.random()*(max-min)+min);}
console.log(miNumeroFlecha(10,1));


