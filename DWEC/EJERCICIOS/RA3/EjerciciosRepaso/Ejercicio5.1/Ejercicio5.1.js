window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {

    let entrada;
    let informacion = [];

    while (true) {
        entrada = prompt("Introduce algo(ESC para salir)");
        informacion.push(entrada);


        if (entrada === "ESC") {

            informacion.sort((a, b) => a.localeCompare(b));


            document.getElementById("salida").innerHTML = "Has salido del bucle";

            for (let i = 0; i < entrada.length; i++) {

                document.getElementById("salida").innerHTML += informacion[i] + "<br>";

            }


            break;

        }

        document.getElementById("salida").innerHTML = "Has introducido" + " " + entrada;
    }



}