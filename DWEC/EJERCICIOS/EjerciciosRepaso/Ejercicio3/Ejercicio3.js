window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {

    let entrada;

    while (true) {
        entrada = prompt("Introduce algo(ESC para salir)");


        if (entrada === "ESC") {
            document.getElementById("salida").innerHTML = "Has salido del bucle";
            break;

        }

        document.getElementById("salida").innerHTML = "Has introducido" + " " + entrada;



    }



}