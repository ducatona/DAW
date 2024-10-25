window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {


    let a = parseInt(document.getElementById("entradaA").value);
    let b = parseInt(document.getElementById("entradaB").value);
    let c = parseInt(document.getElementById("entradaC").value);

    let resultado;

    if (a > b && a > c) {

        resultado = a + " es el mayor";

    } else if (b > a && b > c) {
        resultado = b + " es el mayor";


    } else {
        resultado = c + " es el mayor";
    }


    document.getElementById("salida").innerText = resultado;



}