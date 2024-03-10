function crearNodo() {
    const contenedor = document.createElement("div");
    contenedor.className = "form";

    const imagen = document.createElement("div");
    imagen.className = "imagen";
    const img = document.createElement("img")
    img.src = "./assets/images/avatar-jessica.jpeg";
    imagen.appendChild(img);

    const textoNombre = document.createElement("div");
    textoNombre.className = "nombre";
    const parrafo1 = document.createElement("p");
    textoNombre.appendChild(parrafo1);
    const texto1 = document.createTextNode("Jessica Randall");
    parrafo1.appendChild(texto1);

    const textoLugar = document.createElement("div");
    textoLugar.className = "lugar";
    const parrafo2 = document.createElement("p");
    textoLugar.appendChild(parrafo2);
    const texto2 = document.createTextNode("London, United Kingdom");
    parrafo2.appendChild(texto2);

    const textoDescripcion = document.createElement("div");
    textoDescripcion.className = "descrip";
    const parrafo3 = document.createElement("p");
    textoDescripcion.appendChild(parrafo3);
    const texto3 = document.createTextNode("Front-end developer and avid reader.");
    parrafo3.appendChild(texto3);

    const boton1 = document.createElement("button");
    boton1.className = "buttons";
    const textoBoton1 = document.createTextNode("GitHub");
    boton1.appendChild(textoBoton1);

    const boton2 = document.createElement("button");
    boton2.className = "buttons";
    const textoBoton2 = document.createTextNode("Frontered Mentor");
    boton2.appendChild(textoBoton2);

    const boton3 = document.createElement("button");
    boton3.className = "buttons";
    const textoBoton3 = document.createTextNode("LinkedIn");
    boton3.appendChild(textoBoton3);

    const boton4 = document.createElement("button");
    boton4.className = "buttons";
    const textoBoton4 = document.createTextNode("Twitter");
    boton4.appendChild(textoBoton4);

    const boton5 = document.createElement("button");
    boton5.className = "buttons";
    const textoBoton5 = document.createTextNode("Instagram");
    boton5.appendChild(textoBoton5);

    contenedor.appendChild(imagen);
    contenedor.appendChild(textoNombre);
    contenedor.appendChild(textoLugar);
    contenedor.appendChild(textoDescripcion);
    contenedor.appendChild(boton1);
    contenedor.appendChild(boton2);
    contenedor.appendChild(boton3);
    contenedor.appendChild(boton4);
    contenedor.appendChild(boton5);
    return contenedor;
}

const contenedorPrincipal = document.querySelector("#form");
const botonNodo = document.querySelector("#buttons1");

function AgregarNodo() {
    contenedorPrincipal.appendChild(crearNodo());
}

botonNodo.addEventListener("click", AgregarNodo());