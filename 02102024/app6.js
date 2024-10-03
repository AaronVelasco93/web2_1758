
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
    mostrarEnemigos(){
        return this.enemigos.forEach((item)=>console.log(item));
    },
};
//gato.mostrarEnemigos();
//console.log(gato.comer("pez"));

for ( let propiedades in gato ){
    console.log(propiedades);

}