// Pon tu nombre y apellidos aquí
console.log("UD2_1: Ejercicio 3");
console.warn("Adrián Peña Carnero");

window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

// Variables globales asi al darle todo el rato me empezara de 0.
let intervalo;
let indice = 0;
let texto = "";

function manejadorClick() {
    // Limpiamos donde vamos a mostrar la información
    document.getElementById("salida").innerText = "";
    // Reiniciamos las variables globales
    texto = document.getElementById("entrada").value;
    indice = 0;

    // Limpiamos cualquier intervalo previo
    clearInterval(intervalo);

    // Creamos el intervalo que añade caracter a caracter al índice y lo muestra
    intervalo = setInterval(function () {
        if (indice < texto.length) {
            document.getElementById("salida").innerText += texto[indice];
            indice++;
        } else {
            // Volvemos a limpiar
            clearInterval(intervalo);
        }
    }, 1000);
}