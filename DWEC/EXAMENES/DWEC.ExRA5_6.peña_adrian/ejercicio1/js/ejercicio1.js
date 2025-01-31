//Author: Adrián Peña Carnero :)

//funcion anónima 
window.onload = function () {

    //creamos el formulario y lo añadimos al cuerpo
    let formulario = document.body.appendChild(crearElemento({ etiqueta: 'form', id: 'formulario' }));
    //creamos el select y le añadimos los elementos
    let select = crearElemento({ etiqueta: 'select', id: 'selector' });
    select.appendChild(crearElemento({ etiqueta: 'option', id: 'valor1', texto: 'Patatas' }));
    select.appendChild(crearElemento({ etiqueta: 'option', id: 'valor2', texto: 'Tomates' }));
    select.appendChild(crearElemento({ etiqueta: 'option', id: 'valor3', texto: 'Manzanas' }));

    //añadimos los demas elementos
    formulario.appendChild(crearElemento({ etiqueta: 'h2', texto: 'Ejercicio 1' }));
    formulario.appendChild(crearElemento({ etiqueta: 'h1', texto: 'Adrián Peña Carnero' }));
    formulario.appendChild(crearElemento({ etiqueta: 'label', texto: 'Nombre', for: 'nombreInput' }));
    formulario.appendChild(crearElemento({ etiqueta: 'input', type: 'text', id: 'nombreInput' }));
    formulario.appendChild(crearElemento({ etiqueta: 'label', texto: 'Cantidad', for: 'cantidad' }));
    formulario.appendChild(crearElemento({ etiqueta: 'input', type: 'number', id: 'cantidad' }));
    formulario.appendChild(select);

    //creamos, añadimos el evento y le añadimos al formulario
    let botonCargar = crearElemento({ etiqueta: "input", type: "button", value: "Cargar", id: "botonCargar" });
    formulario.appendChild(botonCargar);
    botonCargar.addEventListener('click', manejadorClick);
}

//creamos el elemento salida
let salida = crearElemento({ etiqueta: 'div', id: 'salida', style: 'border: 1px solid black; background-color:red' });
function manejadorClick() {
    //funcion para que cada vez que se le de a crear no deje hijos 
    while (salida.firstChild) {
        salida.firstChild.remove();
    }

    //asignación y selección de elementos
    let nombre = document.querySelector('#nombreInput').value + " ";
    let cantidad = 'Come ' + document.querySelector('#cantidad').value + " ";
    let selector = document.querySelector('#selector').value + " ";
    document.body.appendChild(salida);
    salida.append(nombre, cantidad, selector);
}












/**
 * Función para crear una etiqueta, con sus atributos y, en caso de que lo tenga, su texto, definidos y pasados como parámetro dentro de su único parámetro, en un array asociativo (JSON)
 * Dentro del array asociativo parámetro es necesario pasar OBLIGATORIAMENTE "etiqueta" : "tipoEtiqueta"
 * En caso de querer que tenga texto, lo pasaríamos como: "texto" : "valorDelTexto"
 * El resto de datos del array se añadirán como atributos
 * @param {*} datos
 * @returns
 */
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