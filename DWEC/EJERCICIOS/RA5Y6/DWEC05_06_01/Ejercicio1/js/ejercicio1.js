// ¡README! He probado varias cosas para ver su funcionamiento, como las arrow functions, forEach, etc. No obstante, todo funciona correctamente. ;)

//variable global de salida
let salida;

window.onload = () => {

    //elemento div donde va mi nombre
    let nombre = crearElemento({ etiqueta: 'div', texto: 'Tarea made by Adrián Peña Carnero', id: 'nombre', style: 'background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); padding: 10px; margin: auto; margin-bottom: 10px; color: white; border-radius: 5px;' });
    //asignacion a el cuerpo 
    document.body.appendChild(nombre);

    //asignacion div para mostrar la salida
    salida = crearElemento({ etiqueta: 'div', id: 'salida' });

    //creacion formulario
    const formulario = document.createElement('form');

    //asignacion elementos hijos del formulario
    formulario.appendChild(crearElemento({ etiqueta: 'label', texto: 'N° Divisiones: ', for: 'numDivisiones', style: 'padding: 5px' }));
    formulario.appendChild(crearElemento({ etiqueta: 'input', type: 'number', id: 'numDivisiones', style: 'padding: 5px' }));
    formulario.appendChild(crearElemento({ etiqueta: 'label', texto: 'N° Párrafos: ', for: 'numParrafos', style: 'padding: 5px' }));
    formulario.appendChild(crearElemento({ etiqueta: 'input', type: 'number', id: 'numParrafos', style: 'padding: 5px' }));
    formulario.appendChild(crearElemento({ etiqueta: 'label', texto: 'N° Elementos Lista: ', for: 'numListas', style: 'padding: 5px' }));
    formulario.appendChild(crearElemento({ etiqueta: 'input', type: 'number', id: 'numListas', style: 'padding: 5px ' }));

    //el botón se crea aparte ya que si lo creamos de la misma manera no va a funcionar el evento, ya que nos devolveria un undefined
    const boton = crearElemento({ etiqueta: 'button', texto: 'Crear', type: 'button', id: 'crear', style: 'padding: 5px' });
    //se asigna independientemente
    boton.addEventListener('click', accionBoton);
    //como último paso se añade
    formulario.appendChild(boton);

    //asignacion del formulario y la salida a el body
    document.body.appendChild(formulario);
    document.body.appendChild(salida);
};




function accionBoton() {



    //lo utilizamos para comprobar del elemento salida si encuentra un primer nodo(primer elemento) lo elimine hasta llegar a null que pararia el while
    while (salida.firstChild) {
        salida.firstChild.remove();//eliminarimos los elementos al pulsar nuevamente el botón
    }

    //parseamos aun asi por asegurarnos que es un numero aunque lo falseemos, y lo guardamos en una constante , en caso de que no introduzca nada le asignamos un 0 como valor por defecto
    const divisiones = parseInt(document.querySelector('#numDivisiones').value) || 0;
    const parrafos = parseInt(document.querySelector('#numParrafos').value) || 0;
    const listas = parseInt(document.querySelector('#numListas').value) || 0;




    //Primer div creacion de contenedores div
    for (let i = 0; i < divisiones; i++) {


        let divs = crearElemento({ etiqueta: 'div', texto: `Contenido de la División ${i + 1}`, id: `div${i + 1}`, style: 'border: 1px solid red; padding: 10px; margin: 5px' });
        // console.log('entro');



        //asignacion de parrafos
        for (let p = 0; p < parrafos; p++) {

            let parr = crearElemento({ etiqueta: 'p', texto: `Párrafo 1.${i + 1}${p + 1}`, id: `parr${i + 1}`, style: ' border: 1px solid green; padding: 10px margin: 5px' });
            //añadimos al elemento div
            divs.appendChild(parr);
        }

        //si existe un valor de lista se crea una lista desordenada donde añadiremos los elementos que haya
        if (listas > 0) {
            let el = crearElemento({ etiqueta: 'ul', id: `ul${i + 1}`, style: 'border: 1px solid blue; padding: 10px margin: 5px' });

            for (let e = 0; e < listas; e++) {


                let elementos = crearElemento({ etiqueta: 'li', id: `li${i + 1} ${e + 1}`, texto: `Elemento listado ${i + 1}.${e + 1}` });
                //añadimos los elementos al padre
                el.appendChild(elementos);


            }
            //añadimos a los contenedores el padre que es el ul en este caso
            divs.appendChild(el);
        }


        //añadimos el padre de los contenedores a el div salida
        salida.appendChild(divs);
    }

    //metodo para eliminar cualquier elemento que toquemos
    asignacionEliminacionElementos();

}


/**
 * 
 * recogemos el elemento divm, cogemos todo el contenido que tenga ese div , lo recorremos asignandole el evento 
 */
function asignacionEliminacionElementos() {

    let salida = document.querySelector('#salida');

    let elementos = salida.querySelectorAll('*');

    elementos.forEach(elemento => {
        elemento.addEventListener('click', eliminarElemento)
    })
}
/**
 * El objeto event tiene una propiedad o metodo target que metodo que recoge el disparo del evento y lo elimina(haces click en un p y lo elimina)
 * @param {*} event 
 */
function eliminarElemento(event) {


    event.target.remove();


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
        elementoNuevo = crearElemento({
            etiqueta: "p",
            texto: "ERROR: NO SABER USAR ESTA FUNCIÓN (mira que esté bien definida etiqueta)"
        });
    }
    return elementoNuevo;
}
