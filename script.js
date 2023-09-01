const agregar = document.getElementById("agregar");
const inputTarea = document.getElementById("nombre-tarea");
const contenedor = document.querySelector(".seccion-tareas");
const nroTareas = document.querySelector("h1");
let cantidad = 0;

function cantidadTareas(rest){
    if(rest){
        cantidad++
        nroTareas.textContent = "Lista de Tareas (" + cantidad + ")";
    } else {
        cantidad--
        nroTareas.textContent = "Lista de Tareas (" + cantidad + ")";
    }
}

agregar.addEventListener("click", () => {
    if(inputTarea.value !== ""){
        const nombreTarea = inputTarea.value;
        crearTareas(nombreTarea)
    } else {
        alert("Coloquele un nombre a su tarea")
    }
})

function crearTareas(nombre){
    cantidadTareas(true);
    inputTarea.value = "";
    const tarea = document.createElement("div");
    tarea.setAttribute("class", "nueva-tarea");
    tarea.innerHTML = "<p>" + nombre + "</p>";
    contenedor.appendChild(tarea);
    const borrar = document.createElement("i");
    borrar.setAttribute("class", "fa-solid fa-trash");
    tarea.appendChild(borrar);
    borrar.addEventListener("click", borrarTarea)
}

function borrarTarea(e){
    e.target.parentElement.style.display = "none";
    cantidadTareas(false)
}