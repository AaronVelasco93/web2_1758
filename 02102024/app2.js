//Objeto literal
let  gato = {
    nombre: 'Mimikyu',
    duerme: true,
    edad: 6,
    color: 'moteado',
    enemigos: ["agua","Otros Perros","Humanos"],
};
//  Forma para ingresar a los objetos
console.log(gato.nombre);
console.log(gato.duerme);
console.log(gato.enemigos[1]);

console.log(gato['nombre']);


//Crud
// Crear
gato.patas=3;
console.log(gato.patas);

// leer
console.log(gato.edad);

//Update
gato.nombre= 'Pelusa';
console.log(gato.nombre);

//Objeto completo
console.log(gato);
//Eliminar
delete gato.color;
console.log(gato);

//Propiedades

console.log(gato.hasOwnProperty("nombre"));
console.log(gato.hasOwnProperty("ID"));