window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;



}

// Define un array que contenga un listado de nombres de frutas. Implementa funciones que permitan:

// Mostrar todos los elementos del array separados por un salto de línea (en consola).
// Mostrar los elementos del array en sentido inverso separados por un salto de línea.
// Mostrar los elementos del array alfabéticamente separados por un salto de línea.
// Añadir un elemento al comienzo del array.
// Añadir un elemento al final del array.
// Borrar un elemento al comienzo del array (indicando cuál es).
// Borrar un elemento al final del array (indicando cuál es).
// Mostrar la posición en la que se encuentra un elemento.


let frutas = ['manzana', 'pera', 'platano', 'melon', 'sandia', 'kiwi'];
let salida = document.getElementById("salida");


function manejadorClick() {



    muestraMatriz(frutas);


}







    function muestraMatriz(frutas) {
        salida.innerHTML += "Frutas: <br>";
        for (const fruta of frutas) {
            salida.innerHTML += fruta + "<br>";
        }
        salida.innerHTML += "<br>";
    }




