// Ángela Ruiz Soto

let divisionesPrueba = document.getElementsByTagName("div");
for (let i = 0; i < divisionesPrueba.length; i++) {
    divisionesPrueba[i].addEventListener("mouseover", entroDiv);
    divisionesPrueba[i].addEventListener("mouseout", salgoDiv);
    divisionesPrueba[i].addEventListener("click", clickDiv);
}

document.getElementById("btnCrear").addEventListener("click", clickDiv);

let salida = document.getElementById("salida");


//// MANEJADORES DE EVENTOS
function entroDiv(e) {
    e.stopPropagation();
    salida.innerHTML = "";
    let texto = document.createTextNode(e.target.id);
    salida.appendChild(texto);
}

function salgoDiv(e) {
    salida.innerHTML = "";
    let texto = document.createTextNode("ID a borrar");
    salida.appendChild(texto);
}

function clickDiv(e) {

    if (e.target.id === "btnCrear") {
        console.log("Creando un div");
        let divCreacion = document.getElementById("divCreacion");
        let color = colorAleatorio();
        let id = "div" + color;

        let nuevoDiv = crearElemento({"etiqueta":"div", "id":id, "texto":id});
        nuevoDiv.style.backgroundColor = color;
        
        nuevoDiv.addEventListener("mouseover", entroDiv);
        nuevoDiv.addEventListener("mouseout", salgoDiv);
        nuevoDiv.addEventListener("click", clickDiv);

        divCreacion.appendChild(nuevoDiv);

    } else {
        
        e.stopPropagation();
        e.target.remove();
    }
}

//// HERRAMIENTAS

// No modifiques la siguiente función
function colorAleatorio() {
    let colores = ["red", "yellow", "blue", "green", "orange", "blue", "black", "pink", "purple", "gold", "olive", "navy", "beige", "gray", "aqua", "cyan"];
    return colores[Math.round(Math.random() * colores.length)];
}

function crearElemento(datos) {
    let elementoNuevo;
    if (datos.etiqueta !== undefined) {
        elementoNuevo = document.createElement(datos.etiqueta);
        if (datos.texto !== undefined) {
            elementoNuevo.appendChild(document.createTextNode(datos.texto));
        }

        for (let clave in datos) {
            if (clave !== "etiqueta" && clave !== "texto") {
                elementoNuevo.setAttribute(clave, datos[clave]);
            }
        }
    } else {
        elementoNuevo = crearElemento({ "etiqueta": "p", "texto": "ERROR: NO SABER USAR ESTA FUNCIÓN (mira que esté bien definida etiqueta)" });
    }
    return elementoNuevo;
}


