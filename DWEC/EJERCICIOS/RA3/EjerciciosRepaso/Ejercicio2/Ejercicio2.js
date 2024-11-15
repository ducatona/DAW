window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {

    const valor = document.getElementById("entrada").value;
    const numero = parseInt(valor, 10);

    if (isNaN(numero)) {
        document.getElementById("salida").innerHTML = "Porfavor introduce un numero valido";

    } else {
        const par = esPar(numero);
        document.getElementById("salida").innerHTML = "El numero" + numero + "es " + (par ? "par" : "impar") + ".";

    }



 



}

function esPar(n) {
    return n % 2 === 0;
}