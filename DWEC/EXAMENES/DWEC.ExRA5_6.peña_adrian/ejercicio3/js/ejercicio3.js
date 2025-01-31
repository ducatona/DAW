//Author: Adrián Peña Carnero :)


//con una función flecha nos ahorramos trabajo
window.onload = () => {
    //asignación nombre
    document.getElementById('cambiaNombre').innerHTML = "Adrián Peña Carnero ;)"
    //cogemos el elemento
    let contenedor = document.getElementById('contenedor');
    //añadimos al propio dom un evento de teclado
    document.addEventListener('keydown', (evento) => {
        //cogemos la tecla seleccionada
        var tecla = evento.key;
        // console.log("Codigo" + tecla)

        //creamos el elemento y le añadimos la tecla pulsada
        let cuadrado = crearElemento({ etiqueta: 'div', class: 'cuadrado-cuqui', texto: tecla });
        contenedor.appendChild(cuadrado);
    });
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