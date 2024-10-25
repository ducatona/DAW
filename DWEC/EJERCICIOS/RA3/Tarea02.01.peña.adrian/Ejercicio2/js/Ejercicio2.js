window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {

    const cantidad = parseInt(document.getElementById("entrada").value, 10); //lo pasamos a base 10;
    let respuesta = document.getElementById("respuesta");
    let min = 0;
    let max = 99999;


    //validaciones
    if (isNaN(cantidad) || cantidad < 0 || cantidad > 99999) {
        respuesta.innerText = "Introduce una cantidad valida (0-99999)"
        return;
    }

    //Generar Numeros Aleatorios
    const decimosGenerados = generarNAleatorios(cantidad, min, max);
    document.getElementById("salida").innerHTML = "Numeros generados " + decimosGenerados;


    //buscar coincidencias



    let encontrado = false;
    let intentos = 0;
    const maxInt = 99999;
    let coincidencia;


    while (intentos < maxInt && !encontrado) {

        let nuevoNumero = generaAleatorio(min, max);
        intentos++;

        if (decimosGenerados.includes(nuevoNumero)) {
            coincidencia = nuevoNumero;
            encontrado = true;
        }





    }


    if (encontrado) {
        document.getElementById("resultadoCoincidencia").innerHTML = `Coincidencia encontrada: ${coincidencia} en ${intentos} intentos.`
    } else {
        document.getElementById("resultadoCoincidencia").innerHTML = `No se ha encontrado ninguna coincidencia despues de ${maxInt} intentos.`
    }


}





function generaAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;


}


function generarNAleatorios(cantidad, min, max) {
    let numerosAleatorios = [];

    for (let i = 0; i < cantidad; i++) {

        numerosAleatorios.push(generaAleatorio(min, max));


    }
    return numerosAleatorios;

}
