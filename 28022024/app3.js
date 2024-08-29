//Funcion generica
function saludar(){
    console.log("Hola como estas");
}
saludar();

//Funcion con un argumento
function saludo(nombreUsuario){
    console.log("Hola como estas: "+nombreUsuario);
}
saludo("Aaron");

//Funcion con retorno

function adios (userName){
    return "Adios que estes bien: "+userName;
}
console.log(adios("HuronMarron"));
