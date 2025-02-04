let formulario = crearElemento({ "etiqueta": "form", "type": "miFormulario" });
let tag1 = crearElemento({ "etiqueta": "label", "texto": "ID" });
let input1 = crearElemento({ "etiqueta": "input", "type": "text", "id": "inputID", "nombre": "mi input 1" });
input1.addEventListener("change", manejadorCambio);
formulario.appendChild(tag1);
formulario.appendChild(input1);

let tag2 = crearElemento({ "etiqueta": "label", "texto": "Nombre" });
let input2 = crearElemento({ "etiqueta": "input", "type": "text", "id": "inputNombre", "nombre": "mi input 2" });
input2.addEventListener("change", manejadorCambio);
formulario.appendChild(tag2);
formulario.appendChild(input2);

let botonGuardar = crearElemento({ "etiqueta": "input", "type": "button", "value": "Guardar", "id": "botonGuardar" });
botonGuardar.addEventListener("click", manejadorClick);
formulario.appendChild(botonGuardar);

let botonCargar = crearElemento({ "etiqueta": "input", "type": "button", "value": "Cargar", "id": "botonCargar" });
botonCargar.addEventListener("click", manejadorClick);
formulario.appendChild(botonCargar);

formulario.appendChild(crearElemento({ "etiqueta": "div", "id": "salida", "texto": "Texto inicial del párrafo de salida" }));


document.body.appendChild(formulario);


let inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", manejadorCambio);
}


function manejadorCambio(e) {
    let valor = e.target.value;
    e.target.style.backgroundColor = "transparent";

    let correcto = true;

    if (e.target.id === "inputID") {
        correcto = checkID(valor);
    } else {
        correcto = checkNombre(valor);
    }

    if (!correcto) {
        e.target.style.backgroundColor = "red";
    }
}

function manejadorClick(e) {
    let id = document.getElementById("inputID").value;
    let nombre = document.getElementById("inputNombre").value;

    if (checkID(id) && checkNombre(nombre)) {
        if (e.target.id === "botonGuardar") {
            sessionStorage.setItem(id, nombre);
        } else if (e.target.id === "botonCargar") {
            let salida = document.getElementById("salida");
            salida.innerHTML = "";
            const items = Object.keys(sessionStorage);
            for (let i = 0; i < items.length; i++) {
                let key = items[i];
                let value = sessionStorage.getItem(key);
                const div = document.createElement('div');
                div.textContent = `Clave: ${key}, valor: ${value}`;
                salida.appendChild(div);
            }
        }
    }
}

function checkID(id) {
    const regex = /^BCH-?\d{2,6}$/;
    return regex.test(id);
}

function checkNombre(nombre) {
    const regex = /^[A-Za-z]{3,30}\s[A-Za-z]{3,30}$/;
    return regex.test(nombre);
}



//////////////////////////////////////////////////////////////////////HERRAMIENTAS//////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////HERRAMIENTAS//////////////////////////////////////////////////////////////////////