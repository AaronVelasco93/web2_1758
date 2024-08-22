let opciones =prompt(`
    Elija una opcion:
    1: Libros
    2: Peliculas
    3: Juegos    

    `);

    switch(opciones){
        case "1":
            console.log("El principito");
        break;
        case "2":
            console.log("Matrix");
        break;
        case "3":
            console.log("COD");
        break;
        default:
            console.log("Opcion no valida");
        break;

    }
    