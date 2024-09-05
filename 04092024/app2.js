let miCarro = new Object();
miCarro.marca = "Ford";
miCarro.modelo=2013;
miCarro.color ="Azul";

//console.log(miCarro);

let miMoto ={
    marca: "Honda",
    modelo:2023,
    color:"negro",
    caracteristicas: ["CLD:250","klm:15000","IR:2","NR:2"]
};
/*
//CRUD
console.log(miMoto);
miMoto.usuario="Aaron";
console.log(miMoto);
miMoto.modelo=2024;
//ejemplo para eliminar
console.log(miMoto);
delete miMoto.marca;
console.log(miMoto);
*/

/*
console.log("-------------------------------------------");
console.log(miMoto.marca);
console.log(miMoto['marca']);
console.log(miMoto['modelo']);
console.log(miMoto ['caracteristicas'][0]);
*/


console.log("-----------------------------");

let gato ={
    nombre:"Biwi",
    duerme:true,
    edad:3,
    color:"naranja",
    enemigos:["perro","agua","otros Gatos"],
    comer:function(){
        console.log("Ahora esta comiendo");
    },
    comiendo(comer){
        return `${this.nombre} esta comiendo ${comer}`;
    },

};
console.log(gato.comiendo("pllito"));
