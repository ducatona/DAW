let formulario = crearElemento({ "etiqueta": "form", "id": "miFormulario" });

formulario.appendChild(crearElemento({ "etiqueta": "label", "texto": "Nº Divisiones", "for": "numDiv" }));
formulario.appendChild(crearElemento({ "etiqueta": "input", "id": "numDiv", "type": "text" }));
formulario.appendChild(crearElemento({ "etiqueta": "label", "texto": "Nº Párrafos", "for": "numParr" }));
formulario.appendChild(crearElemento({ "etiqueta": "input", "id": "numParr", "type": "text" }));
formulario.appendChild(crearElemento({ "etiqueta": "label", "texto": "Nº Elementos Lista", "for": "numElem" }));
formulario.appendChild(crearElemento({ "etiqueta": "input", "id": "numElem", "type": "text" }));
let miBoton = crearElemento({ "etiqueta": "input", "id": "botonCrear", "type": "button", "value": "Crear" });
miBoton.addEventListener('click', manejadorBoton);
formulario.appendChild(miBoton);

document.body.appendChild(formulario);

let divContenido = crearElemento({ "etiqueta": "div", "id": "contenido" });

divContenido.addEventListener('click', eliminarElemento); 

function manejadorBoton() {
    // Limpiar contenido previo
    while (divContenido.firstChild) {
        divContenido.removeChild(divContenido.firstChild);
    }

    let numDiv = document.getElementById("numDiv").value;
    let numParr = document.getElementById("numParr").value;
    let numElem = document.getElementById("numElem").value;

    for (let i = 1; i <= numDiv; i++) {
        let idDiv = "div" + i;
        let div = crearElemento({ "etiqueta": "div", "id": idDiv, "style": "border: 1px solid red;", "texto": `Contenido del div ${i}` });
        console.log(div);

        for (let j = 1; j <= numParr; j++) {
            let idParr = "parr" + j;
            div.appendChild(crearElemento({ "etiqueta": "div", "id": idParr, "style": "border: 1px solid green;", "texto": `Contenido del párrafo ${i}.${j}` }));
            console.log(div);
        }

        if (numElem > 0) {
            let idUl = "ul" + i;
            let listadoUL = crearElemento({ "etiqueta": "ul", "id": idUl, "style": "border: 1px solid blue;"});
            for (let j = 1; j <= numElem; j++) {
                let idLi = "li" + i;
                listadoUL.appendChild(crearElemento({ "etiqueta": "li", "id": idLi, "texto": `Contenido del li ${i}.${j}`}));
                console.log(div);
            }
            div.appendChild(listadoUL);
        }
        divContenido.appendChild(div);
    }

    document.body.appendChild(divContenido);
}

function eliminarElemento(pepi) {
    pepi.stopPropagation(); // Evita la propagación a elementos padres
    pepi.target.remove(); // Elimina el elemento clicado
}

//////////////////////////////////////////////////////////////////HERRAMIENTAS//////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////HERRAMIENTAS//////////////////////////////////////////////////////////////////