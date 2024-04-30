// Define una clase para representar a una tarea
class Tarea {
    // Constructor de la clase 
    constructor(contenido) {
        this.contenido = contenido; // Inicializa el contenido vacio
    }

}


class GestorTareas {
    // constructor
    constructor() {
        this.tareas = []; //inicializa un array vacío para tareas
    }

    //metodo para crear tareas
    agregarTarea(contenido) {
        const tareaNueva = new Tarea(contenido);
        this.tareas.push(tareaNueva);

        //llamo a mostrar tareas cada vez que creo una
        this.mostrarTareas();

        console.log('Tarea creada correctamente');
    }

    mostrarTareas() {

        const lista = document.getElementById("tareasPendientes"); // Obtiene el elemento del DOM donde se mostrará la lista.
        lista.innerHTML = ""; // Limpia la lista actual antes de mostrar la nueva.
        // contador que me servirá de id para las entradas
        let counter = 0;
        // Itera sobre cada entrada
        this.tareas.forEach(tar => {
            const item = document.createElement("div"); // Crea un nuevo div para cada estudiante.
            // Establece el contenido del div con el nombre del estudiante y los cursos en los que está inscrito.
            item.innerHTML = `
                    <div class="cajaTareas" id="tarea${counter}">
                        <h3 id="titulo${counter}">
                        <input type="checkbox" id="completado" onclick="tareaCompletada(${counter})">Tarea nº ${counter}</h3>
                        <p id="${counter}">· ${tar.contenido}</p>
                        <button id="eliminarTarea${counter}" onclick="eliminarTarea(${counter})">Eliminar Tarea</button>
                    </div>`;

            counter++;
            lista.appendChild(item); // Añade el div a la lista en el DOM.
        });
    }



}

//función para eliminar elemento
function eliminarTarea(idValor) {
    //eliminar el div
    let divBorrar = document.getElementById("tarea" + idValor);
    divBorrar.parentNode.removeChild(divBorrar);

    //elimino la entrada del array
    miGestor.tareas.splice(idValor, 1);

    console.log('Tarea eliminada');


}

//función para cambiar el estilo de las tareas completadas
function tareaCompletada(idValor) {
    const nuevaTareaCompletada = document.getElementById("tarea" + idValor);

    if (nuevaTareaCompletada.style.backgroundColor === "rgba(136, 240, 72, 0.337)") {

        nuevaTareaCompletada.style.backgroundColor = "rgba(194, 194, 194, 0.337)";
        nuevaTareaCompletada.style.textDecorationLine = 'none';
        console.log('Tarea pendiente');

    } else {

        nuevaTareaCompletada.style.backgroundColor = "rgba(136, 240, 72, 0.337)";
        nuevaTareaCompletada.style.textDecorationLine = 'line-through';
        console.log('Tarea completada');

    }


}



//   -->   MAIN   <--   //
//instancio el gestor
const miGestor = new GestorTareas();


//listener para agregar tarea
document.getElementById("agregarTarea").addEventListener("click", () => {
    const tareaNew = document.getElementById("nuevaTarea").value;
    miGestor.agregarTarea(tareaNew); // Llama al método para agregar entrada
    document.getElementById("nuevaTarea").value = "";
});




