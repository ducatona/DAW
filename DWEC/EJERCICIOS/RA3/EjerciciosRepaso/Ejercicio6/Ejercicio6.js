window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {

    let a = parseInt(document.getElementById("entradaA").value);
    let b = parseInt(document.getElementById("entradaB").value);
    let temporal = 0;





    if (a < b) {
        temporal = b;
        b = a;
        a = temporal;
    }

    document.getElementById("Salida").innerHTML = "Orden = " + a + " ," + b;


}