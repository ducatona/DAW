let salida;
let divTabla;


// Función anónima ;)
window.onload = function () {

    // Crear el div con el nombre
    let nombre = crearElemento({ etiqueta: 'div', texto: 'Tarea made by Adrián Peña Carnero', id: 'nombre', style: 'background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); padding: 10px; margin: auto; margin-bottom: 10px; color: white; border-radius: 5px;' });
    document.body.appendChild(nombre);

    /*********************************************************************************/
    //creamos el formulario
    let formulario = document.body.appendChild(crearElemento({ etiqueta: 'form', id: 'formulario-id' }));

    salida = crearElemento({ etiqueta: 'div', id: 'div-salida', style: 'border: 1px solid black; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; margin: 20px auto; width: 80%; box-sizing: border-box;' });
    salida.style.display = 'none';

    /********************************************************************************/
    //añadimos las casillas para crear la tabla al padre que es formulario
    formulario.appendChild(crearElemento({ etiqueta: 'label', texto: 'Número de Filas:', for: 'input-fila', style: 'padding: 10px' }));
    formulario.appendChild(crearElemento({ etiqueta: 'input', type: 'number', id: 'input-fila', style: 'padding: 10px' }));
    formulario.appendChild(crearElemento({ etiqueta: 'label', texto: 'Número de Columnas:', for: 'input-columna', style: 'padding: 10px' }));
    formulario.appendChild(crearElemento({ etiqueta: 'input', type: 'number', id: 'input-columna', style: 'padding: 10px' }));
    //añadimos el boton aparte
    const botonCrearTabla = crearElemento({ etiqueta: 'button', texto: 'Crear Tabla', type: 'button', id: 'crear-tabla', style: 'padding: 10px' });
    botonCrearTabla.addEventListener('click', crearTabla);
    formulario.appendChild(botonCrearTabla);

    /**********************************************************************************/
    //añadimos el div salida
    formulario.appendChild(salida);

    divTabla = crearElemento({ etiqueta: 'div', id: 'tabla-div', style: ' padding: 20px; margin-top: 20px; width: 100%; overflow-x: auto; box-sizing: border-box; display: flex; justify-content: center; align-items: center;' });
    salida.appendChild(divTabla);

    salida.appendChild(crearElemento({ etiqueta: 'label', texto: 'Fila:', for: 'seleccion-fila', style: 'padding: 10px' }));
    salida.appendChild(crearElemento({ etiqueta: 'input', type: 'number', id: 'seleccion-fila', style: 'padding: 10px' }));

    salida.appendChild(crearElemento({ etiqueta: 'label', texto: 'Columna:', for: 'seleccion-columna', style: 'padding: 10px' }));
    salida.appendChild(crearElemento({ etiqueta: 'input', type: 'number', id: 'seleccion-columna', style: 'padding: 10px' }));

    salida.appendChild(crearElemento({ etiqueta: 'label', texto: 'Valor:', for: 'input-valor', style: 'padding: 10px' }));
    salida.appendChild(crearElemento({ etiqueta: 'input', type: 'text', id: 'input-valor', style: 'padding: 10px' }));

    const botonInsertar = crearElemento({ etiqueta: 'button', texto: 'Insertar', type: 'button', id: 'insertar', style: 'padding: 10px' });
    botonInsertar.addEventListener('click', insercionDatos);

    salida.appendChild(botonInsertar);


}
// Función para crear la tabla
function crearTabla() {
    let filas = document.getElementById('input-fila').value;
    let columnas = document.getElementById('input-columna').value;

    // Verificar si ya existe una tabla antes de crear una nueva
    let tablaExistente = document.getElementById('tabla');
    if (tablaExistente) {
        tablaExistente.remove();  // Eliminar la tabla existente si ya hay una
    }

    let tabla = crearElemento({
        etiqueta: 'table', id: 'tabla', style: ' border: 1px solid blue; margin: 20px auto; width: 80%; text-align: center; background-color: #f9f9f9; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); border-radius: 8px;'
    });

    for (let f = 0; f < filas; f++) {
        let fila = crearElemento({ etiqueta: 'tr', id:`${f}`,style: 'border: 1px solid red; padding: 10px; text-align: center; cursor: pointer;' });

        for (let c = 0; c < columnas; c++) {
            let celda = crearElemento({ etiqueta: 'td', id:`${c}`,texto: 'x', style: 'border: 1px solid red; padding: 10px; text-align: center; cursor: pointer; background-color: white; ' });
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    divTabla.appendChild(tabla);

    let celdasTabla = tabla.querySelectorAll('td');


    for (let i = 0; i < celdasTabla.length; i++) {
        celdasTabla[i].addEventListener('click', celdaAccion);

    }


    //hace visible el div de salida con el contenido
    salida.style.display = 'block';
}

/**
 * 
 * metodo que añade la acción de cambio de color
 * @param {*} event 
 */
function celdaAccion(event) {
    // Cambiar color de fondo a amarillo cuando se hace clic en la celda
    if (event.target.style.backgroundColor === 'red') {
        event.target.style.backgroundColor = 'white';
    } else {
        event.target.style.backgroundColor = 'red'
    }

}


/**
 * Function que inserta un valor en una casilla de una tabla
 */
function insercionDatos() {

    //recogemos los datos contexto: les he puesto un id acorde al bucle entonces me dice la posicio exacta empezando desde el 0, para t y td.
    let filaSeleccionada = document.getElementById('seleccion-fila').value;
    let columnaSeleccionada = document.getElementById('seleccion-columna').value;
    let valor = document.getElementById('input-valor').value;

    // Verificar si la fila y columna son válidas
    let tabla = document.getElementById('tabla');
    if (tabla) {
        let fila = tabla.rows[filaSeleccionada]; 
        if (fila) {
            let celda = fila.cells[columnaSeleccionada];  
            if (celda) {
                // Verificar si la celda está bloqueada
                if (celda.style.backgroundColor === 'red') {
                    document.getElementById('input-valor').value = "CELDA BLOQUEADA"; // Modificar el texto en el input
                } else {
                    // Insertar el valor en la celda
                    celda.textContent = valor;
                }
            }
        }
    }
}


// Función para crear elementos dinámicamente
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
        elementoNuevo = crearElemento({
            etiqueta: "p",
            texto: "ERROR: NO SABER USAR ESTA FUNCIÓN (mira que esté bien definida etiqueta)"
        });
    }
    return elementoNuevo;
}
