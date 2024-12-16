window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    document.getElementById("salida").innerHTML = "Has escrito: " + document.getElementById("entrada").value;
}


crearMatriz(3, 2, 4, 3);
crearMatriz(2, 2, 4);

function crearMatriz(dimensiones, x, y, z) {
    if (!verificarDatos(dimensiones, x, y, z)) {
        console.log("Error: Entradas invalidas amigo");
        return;
    }

    let matriz = []; 

    if (dimensiones === 2) {
        for (let a = 0; a < x; a++) {
            let filaM = [];
            for (let j = 0; j < y; j++) { 
                filaM.push(numAleatorio0a10());
            }
            matriz.push(filaM);
        }
    } else if (dimensiones === 3) {
        for (let i = 0; i < x; i++) {
            let fila = [];
            for (let j = 0; j < z; j++) {
                let columna = [];
                for (let s = 0; s < y; s++) {
                    columna.push(numAleatorio0a10());
                }
                fila.push(columna);
            }
            matriz.push(fila);
        }
    }

    console.log(matriz); 
    return matriz;

    function verificarDatos(dimensiones, x, y, z) {
        if (dimensiones === 2) {
            if (x === undefined || y === undefined) {
                return false;
            }
        } else if (dimensiones === 3) {
            if (x === undefined || y === undefined || z === undefined) {
                return false;
            }
        } else {
            return false;
        }

        for (let i = 1; i < arguments.length; i++) { 
            if (arguments[i] !== undefined && (!Number.isInteger(arguments[i]) || arguments[i] <= 0)) {
                return false;
            }
        }

        return true;
    }

                                                                                                                                                                                                                function numAleatorio0a10() {
                                                                                                                                                                                                                    return Math.floor(Math.random() * 11); 
                                                                                                                                                                                                                }
}
