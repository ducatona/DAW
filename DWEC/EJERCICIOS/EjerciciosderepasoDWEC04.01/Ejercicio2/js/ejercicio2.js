window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

let informacionUsuario = [];

function manejadorClick() {

    let entrada = document.getElementById("entrada").value;
    //introducimos la información en el array
    informacionUsuario.push(entrada);

    let textoSalida = "";

    textoSalida += "El primer elemento de datos es: " + informacionUsuario[0] + "<br>";
    textoSalida += "El ultimo elemento de datos es: " + informacionUsuario[informacionUsuario.length - 1] + "<br>";
    textoSalida += "El numero total de datos es: " + informacionUsuario.length + "<br>";


    let copiaInformacion = informacionUsuario.slice();

    textoSalida += "Los datos ordenados son " + copiaInformacion.sort() + "<br>";
    // textoSalida += "Los datos ordenados inversamente son: " + copiaInformacion.reverse() + "<br>";
    textoSalida += "Los datos ordenados inversamente son: " + copiaInformacion.sort(ordenarInverso) + "<br>";

    document.getElementById("salida").innerHTML = textoSalida;

}

function ordenarInverso(a, b) {

return b.localeCompare(a);


}


// Ejercicio 2
// Crea una app con la plantilla de tal modo que cada vez que se escriba algo en la entrada y se
// pulse al botón se guarde lo escrito en un array y, al mismo tiempo, muestre por la salida la
// siguiente información:
// • La primera palabra introducida
// • La última palabra introducida
// • El número de palabras introducidas en total
// • Las palabras ordenadas alfabéticamente de manera ascendente y de manera
// descendente
// Ojo, usa solo una variable global, la del array, no guardes en ninguna variable la primera palabra,
// la última, etc. Saca toda la información dinámicamente del array.

