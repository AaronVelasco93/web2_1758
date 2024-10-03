/*
let  gato = {
    nombre: 'Mimikyu',
    duerme: true,
    edad: 6,
    color: 'moteado',
    enemigos: ["agua","Otros Perros","Humanos"],
    //funcion desde un  objeto
    comer: function(){
        console.log("Ahora esta comiendo");
    },
};
*/
/*
//reduccion
let  gato = {
    nombre: 'Mimikyu',
    duerme: true,
    edad: 6,
    color: 'moteado',
    enemigos: ["agua","Otros Perros","Humanos"],
    //funcion desde un  objeto
    comer(){
        console.log("Ahora esta comiendo");
    },
};
gato.comer();
*/
//Con parametros
/*
let  gato = {
    nombre: 'Mimikyu',
    duerme: true,
    edad: 6,
    color: 'moteado',
    enemigos: ["agua","Otros Perros","Humanos"],
    //funcion desde un  objeto
    comer(comida){
        return "Ahora esta comiendo: "+comida;
    },
};
console.log(gato.comer("pez"));
*/

let nombre= "Gato bebe";
let  gato = {
    nombre: 'Mimikyu',
    duerme: true,
    edad: 6,
    color: 'moteado',
    enemigos: ["agua","Otros Perros","Humanos"],
    //funcion desde un  objeto
    comer(comida){
        return `Ahora ${nombre} esta comiendo: ${comida}`;
    },
};

console.log(gato.comer("pez"));