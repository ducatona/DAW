window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

let matrizCreada = [];

function manejadorClick() {
    // Recogemos los datos introducidos en los inputs
    let dimensiones = document.getElementById("nDimensiones").value;
    let primeraDimension = document.getElementById("primeraDimension").value;
    let segundaDimension = document.getElementById("segundaDimension").value;
    let terceraDimension = document.getElementById("terceraDimension").value;

    if (comprobarNumPositivos(dimensiones, primeraDimension)) {

        dimensiones = parseFloat(dimensiones);
        primeraDimension = parseFloat(primeraDimension);

        switch (dimensiones) {

            case 1:
                matrizCreada = creaMatriz(primeraDimension);
                break;

            case 2:
                if (comprobarNumPositivos(segundaDimension)) {
                    segundaDimension = parseFloat(segundaDimension);
                    matrizCreada = creaMatriz(primeraDimension, segundaDimension);
                } else {
                    document.getElementById("salida").innerHTML = "Está mal la segunda dimensión amigo";
                }
                break;

            case 3:
                if (comprobarNumPositivos(segundaDimension, terceraDimension)) {
                    segundaDimension = parseFloat(segundaDimension);
                    terceraDimension = parseFloat(terceraDimension);
                    matrizCreada = creaMatriz(primeraDimension, segundaDimension, terceraDimension);
                } else {
                    document.getElementById("salida").innerHTML = "Está mal la segunda o tercera dimensión amigo";
                }
                break;

            default:
                document.getElementById("salida").innerHTML = "El número de dimensiones solo puede ser 1, 2 o 3, lo siento amigo";
        }

        if (matrizCreada.length > 0) {
            // document.getElementById("salida").innerHTML = `Visualización de la matriz creada: ${JSON.stringify(matrizCreada)}`;
            document.getElementById("salida").innerHTML = "Matriz creada correctamente";

        } else {
            document.getElementById("salida").innerHTML = "No se ha creado ninguna matriz.";
        }
    } else {

        document.getElementById("salida").innerHTML = "Has introducido mal los datos de la primera y segunda dimension amigo";

    }
}

function comprobarNumPositivos(...num) {
    for (let n of num) {
        if (!esNumero(n) || !esEntero(n) || !esPositivo(n)) {
            return false;
        }
    }
    return true;
}

function creaMatriz(primera, segunda, tercera) {
    let matriz = [];

    if (arguments.length === 1) {
        // Matriz de 1 dimensión
        for (let i = 0; i < primera; i++) {
            matriz.push(numAleatorio0a10());
        }
    } else if (arguments.length === 2) {
        // Matriz de 2 dimensiones
        for (let x = 0; x < primera; x++) {
            let fila = [];
            for (let j = 0; j < segunda; j++) {
                fila.push(numAleatorio0a10());
            }
            matriz.push(fila);
        }
    } else if (arguments.length === 3) {
        // Matriz de 3 dimensiones
        for (let i = 0; i < primera; i++) {
            let plano = [];
            for (let j = 0; j < segunda; j++) {
                let fila = [];
                for (let k = 0; k < tercera; k++) {
                    fila.push(numAleatorio0a10());
                }
                plano.push(fila);
            }
            matriz.push(plano);
        }
    }
    return matriz;
}

function numAleatorio0a10() {
    return Math.floor(Math.random() * 11);
}

function esNumero(entrada) {
    return entrada != parseFloat(entrada) ? false : true;
}

function esEntero(number) {
    return number % 1 === 0;
}

function esPositivo(numero) {
    return numero > 0;
}
