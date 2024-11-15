// Pon tu nombre y apellidos aquí
console.log("UD2_1: Ejercicio 1");
console.warn("Adrián Peña Carnero");

window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    //obtenemos el valor y lo almacenamos en una variable.
    let nDecimal = parseFloat(document.getElementById("inputDecimal").value);
    let nPar = parseInt(document.getElementById("inputPar").value);
    let nPrimo = parseInt(document.getElementById("inputPrimo").value);
    let inputEntre2y10 = parseInt(document.getElementById("inputEntre2y10").value);
    let inputDivisible5 = parseInt(document.getElementById("inputDivisible5").value);
    

    //guardamos en una variable las validaciones que hagamos
    let errores = validacionDatos(nDecimal, nPar, nPrimo, inputEntre2y10, inputDivisible5);
    //si detecta 1 error lo mostramos si no mandamos un mensaje de que todo esta correcto.
    errores.length > 0 ? document.getElementById("salida").innerText = errores.join("\n ") : document.getElementById("salida").innerText = "Datos rellenados correctamente";

}

/**
 * validacionDatos
 * @param {*} nDecimal 
 * @param {*} nPar 
 * @param {*} nPrimo 
 * @param {*} inputEntre2y10 
 * @param {*} inputDivisible5 
 * @returns retorna errores que puedan tener al realizar validaciones
 */
function validacionDatos(nDecimal, nPar, nPrimo, inputEntre2y10, inputDivisible5) {
    //creamos un array donde vamos a guardar los errores.
    let errores = [];


    (!esDecimal(nDecimal)) ? errores.push("Tienes que introducir un número decimal.") : null;
    (!esPar(nPar)) ? errores.push("Tienes que introducir un número par.") : null;
    //como me daba problemas con el ternario paso a hacerlo con el if else con todas las validaciones (asi si funciona).
    if (nPrimo === "" || isNaN(nPrimo) || !esPrimo(nPrimo)) {
        errores.push("Tienes que introducir un número primo.");
    }
    (!esRango(inputEntre2y10, 2, 10)) ? errores.push("Tienes que introducir un número que este en el rango de 2 y 10.") : null;
    (!esDivisible(inputDivisible5, 5)) ? errores.push("Tienes que introducir un número divisible entre 5.") : null;

    return errores;
}




/**
 * esDecimal
 * @param {*} entrada 
 * @returns me devuelve si es decimal o no
 */
function esDecimal(entrada) {
    let resultado = false;

    // Comprobamos si la entrada es un número y si no es un entero
    if (!isNaN(entrada) && entrada % 1 !== 0) {
        resultado = true;
    }
    return resultado;
}

/**
 * esDivisible
 * Devuelve verdadero si el primer parámetro es divisible entre el segundo y falso en caso contrario
 * @param {int} dividendo
 * @param {int} divisor
 * @returns boolean
 */
function esDivisible(dividendo, divisor) {
    let resultado = false;
    if (dividendo % divisor === 0) {
        return true;
    }
    return resultado;
}
/**
 * esPar
 * @param {*} n 
 * @returns funcion que me dice si un numero es par.
 */
function esPar(n) {
    
    return n % 2 === 0;

}
/**
 * esPrimo
 * @param {*} numero 
 * @returns function que me dice si un numero es primo.
 */
function esPrimo(numero) {

    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

/**
 * esRango
 * Función que devuelve verdadero si el número está en el rango entre máximo y mínimo, y falso en caso contrario
 * @param {*} numero
 * @param {*} minimo
 * @param {*} maximo
 * @returns boolean
 */
function esRango(numero, minimo, maximo) {
    let resultado = false;
    if (numero >= minimo && numero <= maximo) {
        resultado = true;
    }
    return resultado;
}