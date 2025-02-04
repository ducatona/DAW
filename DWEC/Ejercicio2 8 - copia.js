//Primer formulario: para crear la tabla
let formularioTabla = crearElemento({ "etiqueta": "form", "id": "formularioTabla" });

//Campos del formulario para crear la tabla ↓↓↓
formularioTabla.appendChild(crearElemento({ "etiqueta": "label", "for": "numFilas", "texto": "Número de filas" }));
formularioTabla.appendChild(crearElemento({ "etiqueta": "input", "type": "number", "id": "numFilas" }));

formularioTabla.appendChild(crearElemento({ "etiqueta": "label", "for": "numColumnas", "texto": "Número de columnas" }));
formularioTabla.appendChild(crearElemento({ "etiqueta": "input", "type": "number", "id": "numColumnas" }));

let miBoton = crearElemento({ "etiqueta": "input", "type": "button", "value": "crear tabla", "id": "miBoton" });
miBoton.addEventListener("click", manejadorBotonCrearTabla);
formularioTabla.appendChild(miBoton);
//Campos del formulario para crear la tabla ↑↑↑

//Añadimos el formulario para crear la tabla al body
document.body.appendChild(formularioTabla);

//Un salto de línea para que las cosas no estén demasiado juntas
document.body.appendChild(crearElemento({ "etiqueta": "br" }));

//Contenedor para la tabla, para borrarla y volverla a crear cada vez que se pulse el boton
let contenedorTabla = crearElemento({ "etiqueta": "div", "id": "contenedorTabla" });


function manejadorBotonCrearTabla() {
    //Borramos los elementos hijos del contenedor de la tabla uno a uno cada vez que queramos crear una nueva tabla
    while (contenedorTabla.firstChild) {
        contenedorTabla.removeChild(contenedorTabla.firstChild);
    }

    //Recogemos el número de filas y columnas de los campos del formulario
    let numFilas = document.getElementById("numFilas").value;
    let numCols = document.getElementById("numColumnas").value;

    let miTabla = crearElemento({ "etiqueta": "table", "style": "border: 1px solid red;" });

    for (let i = 1; i <= numFilas; i++) {
        let filaActual = crearElemento({ "etiqueta": "tr" });
        for (let j = 1; j <= numCols; j++) {
            let idCelda = "Celda_" + i + "_" + j;
            //let celdaActual = crearElemento({ "etiqueta": "td", "texto": idCelda, "id": idCelda });
            let celdaActual = crearElemento({ "etiqueta": "td", "texto": "x", "id": idCelda });
            //Le añadimos un manejador a cada celda
            celdaActual.addEventListener("click", manejadorBloqueoCeldas);
            filaActual.appendChild(celdaActual);
        }
        miTabla.appendChild(filaActual);
    }
    //Añadimos la tabla al contenedor que nos permitirá borrarla, y el contenedor con la tabla al body
    contenedorTabla.appendChild(miTabla);

    //Un salto de línea para que las cosas no estén demasiado juntas
    contenedorTabla.appendChild(crearElemento({ "etiqueta": "br" }));
    // document.body.appendChild(contenedorTabla);

    document.body.appendChild(contenedorTabla, document.getElementById("formularioValorCeldas")); //Lo insertamos antes del segundo formulario

    let formularioValorCeldas = crearElemento({ "etiqueta": "form", "id": "formularioValorCeldas" });

    //Creamos los elementos del formulario
    formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "label", "for": "fila", "texto": "Fila:" }));
    formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "input", "type": "number", "id": "fila" }));

    formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "label", "for": "columna", "texto": "Columna:" }));
    formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "input", "type": "number", "id": "columna" }));

    formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "label", "for": "valor", "texto": "Valor:" }));
    formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "input", "type": "text", "id": "valor" }));

    let botonValorCeldas = crearElemento({ "etiqueta": "input", "type": "button", "value": "Insertar", "id": "botonValor" });
    botonValorCeldas.addEventListener("click", manejadorBotonValorCeldas);
    formularioValorCeldas.appendChild(botonValorCeldas);

    //Añadimos el formulario al body
    contenedorTabla.appendChild(formularioValorCeldas);
}

function manejadorBloqueoCeldas(e) {
    let claseActual = e.target.getAttribute("class");
    let nuevaClase;

    //Comprobamos si la clase tiene valor nulo (si el objeto no tiene ninguna clase)
    if (e.target.getAttribute("class") == null) {
        nuevaClase = "bloqueada";//Si no tiene clase, le añadimos la clase que permite el bloqueo
    } else if (e.target.getAttribute("class").includes("bloqueada")) {//Si ya tiene clase y es la de bloqueo, la cambiamos por la de no bloqueo
        nuevaClase = claseActual.replace("bloqueada", "normal");
    } else if (e.target.getAttribute("class").includes("normal")) {//Y viceversa
        nuevaClase = claseActual.replace("normal", "bloqueada");
    }
    //Aquí hacemos efectivo el cambio de clase
    e.target.setAttribute("class", nuevaClase);

    //Comprobamos si después de los cambios la clase final es la de bloqueo, para darle fondo rojo
    if (e.target.getAttribute("class").includes("bloqueada")) {
        e.target.style.backgroundColor = "red";
    } else {
        //Si no lo es, quitamos el fondo
        e.target.style.backgroundColor = "transparent";
    }
}

//Segundo formulario: para cambiar el contenido de las celdas
/*let formularioValorCeldas = crearElemento({ "etiqueta": "form", "id": "formularioValorCeldas" });

//Creamos los elementos del formulario
formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "label", "for": "fila", "texto": "Fila:" }));
formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "input", "type": "number", "id": "fila" }));

formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "label", "for": "columna", "texto": "Columna:" }));
formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "input", "type": "number", "id": "columna" }));

formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "label", "for": "valor", "texto": "Valor:" }));
formularioValorCeldas.appendChild(crearElemento({ "etiqueta": "input", "type": "text", "id": "valor" }));

let botonValorCeldas = crearElemento({ "etiqueta": "input", "type": "button", "value": "Insertar", "id": "botonValor" });
botonValorCeldas.addEventListener("click", manejadorBotonValorCeldas);
formularioValorCeldas.appendChild(botonValorCeldas);


//Añadimos el formulario al body
document.body.appendChild(formularioValorCeldas);*/


function manejadorBotonValorCeldas() {
    let c = document.getElementById("columna").value;
    let f = document.getElementById("fila").value;

    let nuevoContenido = document.getElementById("valor").value;
    console.log(nuevoContenido);

    let id = "Celda_" + f + "_" + c;

    let celdaAModificar = document.getElementById(id);

    //Le quitamos el contenido a la celda 
    celdaAModificar.innerHTML = "";

    let nuevoTexto = document.createTextNode(nuevoContenido);

    if (celdaAModificar.getAttribute("class") !== null && celdaAModificar.getAttribute("class").includes("bloqueada")) {
        nuevoTexto = document.createTextNode("CELDA BLOQUEADA");
    }

    celdaAModificar.appendChild(nuevoTexto);
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