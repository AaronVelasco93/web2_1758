//iniciamos un arreglo para poder almacenar las tareas
let tareas =[];

//Funcion para mostrar opciones
function mostrarMenu(){
    return parseInt(prompt(`
        "Opciones diponibles"
        1.- Agregar tarea
        2.- Ver todas las tareas
        3.- Marcar mis tareas como completadas
        4.- Salir  

    `));
}
//Funcion para agregar tarea
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
        let tarea={
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada con exito");
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

//Funcion para ver las tareas
function verTarea(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");

    }else{
        let mensaje = "Listas de tareas: \n";
        tareas.forEach((tarea,index)=>{
            mensaje+= `${index+1}.- ${tarea.nombre} [${tarea.completada ? "Completada":"Pendiente"} ]\n`;

        });
        alert (mensaje);
        
    }
}
//Funcion para agregar tarea como completada.

function marcarTareaCompletada(){
    let numero = parseInt(prompt("Introduce el  numero para marcar la tarea como completada"));
    if( numero > 0 && numero <= tareas.length ){
        tareas[numero-1].completada=true;
        alert(`La tarea ${tareas[numero-1].nombre} ha sido completada`);

    }else{
        alert("Numero de tarea no valido (Fuera de rango....)");
    }
}

//Funcion principal para poder manejar nuestro programa
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();//1
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intentar nuevamente");
        }
    }
    alert("Programa Finalizado");
}
iniciarPrograma();

