console.log("Hola mundo");

function suma(x, y) {
    let resultado;
    debugger;
    resultado = x + y;
    return resultado;
}

let botones = document.querySelector("button");
botones.name = "Arroz";
let facebook = document.createElement("button");
let texto = document.createTextNode("Facebook OwO");
facebook.appendChild(texto);
let SelectorBotones = document.querySelector(".form")
SelectorBotones.appendChild(facebook);