function crearNodo() {
    const contenedor = document.createElement("div");
    contenedor.className = "form";
    const imagen = document.createElement("div");
    imagen.className = "imagen";
    const img = document.createElement("img")
    img.src = "./assets/images/avatar-jessica.jpeg";
    imagen.appendChild(img);
    contenedor.appendChild(imagen);
    return contenedor
}

const obtenerNodo = document.querySelector("#form");
const botonNodo = document.querySelector(".buttons1");

function AgregarNodo() {
    obtenerNodo.appendChild(crearNodo());
}

botonNodo.addEventListener('click', AgregarNodo())