// Pon tu nombre y apellidos aquí
console.log("UD2_1: Ejercicio 2");
console.warn("Adrian Peña Carnero");

window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    //variables
    let texto = document.getElementById("entrada").value;
    let salida = "";

    //comprobamos comparando si el texto al pasarlo a mayusculas es igual que el texto introducido.
    if (texto === texto.toUpperCase()) {
        salida += "Está escrito todo en mayúsculas.\n";
    }

    //comprobamos comparando si el texto al pasarlo a minusculas es igual que el texto introducido.
    if (texto === texto.toLowerCase()) {
        salida += "Está escrito todo en minúsculas.\n";
    }

    //utilizamos el .length para ver el tamaño de lo introducido.
    salida += `Número de caracteres: ${texto.length}.\n`;

    // primeros separamos con el split y la expresion y despues vamos filtrando a ver si encontramos algun falsy a la hora de contar el numero de palabras.
    salida += `Número de palabras: ${texto.split(/\s+/).filter(Boolean).length}.\n`;

    // Comprobar si tiene el 3
    if (texto.includes('3')) {
        salida += "Contiene el caracter '3'.\n";
    }

    // comprobar si se encuentra algun 5 en el input.
    let count5 = (texto.match(/5/g) || []).length;
    salida += `El caracter '5' aparece ${count5} veces.\n`;

    //imprimimos la salida
    document.getElementById("salida").innerText = salida;
}


