/*
let nombre= "Gato bebe";
let  gato = {
    nombre: 'Mimikyu',
    duerme: true,
    edad: 6,
    color: 'moteado',
    enemigos: ["agua","Otros Perros","Humanos"],
    //funcion desde un  objeto
    comer(comida){
       console.log(this);
    },
};
gato.comer("Pez");
//console.log(gato.comer("pez"));
*/




let  gato = {
    nombre: 'Mimikyu',
    duerme: true,
    edad: 6,
    color: 'moteado',
    enemigos: ["agua","Otros Perros","Humanos"],
    //funcion desde un  objeto
    comer(comida){
        return `Ahora ${this.nombre} esta comiendo: ${comida}`;
    },
};

console.log(gato.comer("pez"));