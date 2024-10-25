window.onload = principal;

function principal() {
    document.getElementById("btnOperar").onclick = manejadorClick;
}

let operadores = ["+", "-", "*", "/", "!", "S"];

function manejadorClick() {

    //cogemos el valor de los inputs
    let num1 = parseFloat(document.getElementById("inNumero1").value);
    let num2 = parseFloat(document.getElementById("inNumero2").value);
    let operador = document.getElementById("inOperacion").value.trim();
    let salida = document.getElementById("salida");

    // console.log(comprobarOperador(operador)); prueba del metodo comprobar ya que no me lo hacia bien.



    if (comprobarOperador(operador)) {
        if (operador === "+" || operador === "-" || operador === "*" || operador === "/") {

            if (esPositivo(num1) && esNumero(num1) && esPositivo(num2) && esNumero(num2)) {

                salida.innerText = realizarOperacion(operador, num1, num2);
            }else{
                salida.innerText = "No se ha introducido un número correcto";
            }

        } else if (operador === "!" || operador === "S") {

            if (esEntero(num1) && esNumero(num1) && esPositivo(num1)) {

                salida.innerText = realizarOperacion(operador, num1);

            }else {
                salida.innerText = "No se ha introducido un numero positivo y entero en la casilla 1."
            }

        }
       
    } else {
        salida.innerText = "Operador no encontrado."
    }

}

//Forma 2 con el includes -- mas resumido pero visto en el tema 4

//     if (["+", "-", "*", "/"].includes(operador)) {
//         if (esPositivo(num1) && esNumero(num1) && esPositivo(num2) && esNumero(num2)) {
//             salida.innerText = realizarOperacion(operador, num1, num2);
//         } else {
//             salida.innerText = "Por favor, ingresa números válidos.";
//         }
//     } else if (["!", "S"].includes(operador)) {
//         if (esEntero(num1) && esNumero(num1) && esPositivo(num1)) {
//             salida.innerText = realizarOperacion(operador, num1);
//         } else {
//             salida.innerText = "Por favor, ingresa un número entero positivo.";
//         }
//     }
// }







/**
 * 
 * @param {*} operador 
 * @param {*} numero1 
 * @param {*} numero2 
 * @returns Retorna dependiendo que operador le pasemos una operacion u otra.
 */
function realizarOperacion(operador, numero1, numero2) {




    switch (operador) {
        case '+':
            return numero1 + numero2;
            break;
        case '-':

            return numero1 - numero2;
            break;


        case '*':
            return numero1 * numero2;
            break;


        case '/':
            return numero1 / numero2;
            break;

        case '!':
            return factorial(numero1);
            break;




        case 'S':

            return sumatorio(numero1);
            break;

        default:


            return "operador no valido."
            break;
    }


}

/**
 * 
 * @param {*} operador 
 * @returns retorna true or false dependiendo si el operador que hemos obtenido el valor del input arriba 
 * esta entre el array de operadores validos.
 */
function comprobarOperador(operador) {

    let esCorrecto = false;

    for (let i = 0; i < operadores.length; i++) {

        if (operadores[i] === operador) {
            esCorrecto = true;
            break;
        }


    }
    return esCorrecto;

}


/**
 * esNumero
 * Función que comprueba si el string recibido como entrada es un número o no, devolviendo true o false, respectivamente
 * Para ello, comprobamos si el equivalente numérico a la cadena introducida es igual (no en tipo, solo en valor) a dicha cadena (por ejemplo, una cadena vacía parseada sería 0, y "" != 0)
 * @param {String} entrada
 * @returns boolean
 */
function esNumero(entrada) {
    let resultado = true;

    if (entrada != parseFloat(entrada)) {
        resultado = false;
    }
    return resultado;
}

/**
 * esEntero
 * Función que comprueba si el string recibido como entrada es un número entero o no, devolviendo true o false
 * @param number
 * @returns {boolean}
 */
function esEntero(number) {
    let resultado = false;
    if (number % 1 === 0) {
        resultado = true;
    }
    return resultado;
}

/**
 * esPositivo
 * Función que comprueba si el número que recibe como parámetro es positivo, devolviendo true o false
 * @param {number} numero
 * @returns boolean
 */
function esPositivo(numero) {
    return (numero > 0);
}
/**
 * sumar
 * Función que realiza la suma de dos operandos
 * @param {number} numero1
 * @param {number} numero2
 * @returns number
 */
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
/**
 * restar
 * Función que realiza la resta del primer operando menos el segundo
 * @param {number} numero1
 * @param {number} numero2
 * @returns
 */
function restar(numero1, numero2) {
    return numero1 - numero2;
}

/**
 * multiplicar
 * Función que realiza la multiplicación de los operandos recibidos como parámetros
 * @param {number} numero1
 * @param {number} numero2
 * @returns
 */
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

/**
 * dividir
 * Función que realiza la división del primer operando entre el segundo
 * @param {number} numero1
 * @param {number} numero2
 * @returns number
 */
function dividir(numero1, numero2) {
    return numero1 / numero2;
}

/**
 * factorial
 * Función que calcula el factorial del número que recibe y devuelve dicho valor
 * @param {number} numero
 * @returns number
 */
function factorial(numero) {
    let resultado = 1;
    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}

/**
 * sumatorio
 * Calcula el sumatorio del número que recibe y devuelve dicho valor
 * @param {number} numero
 * @returns number
 */
function sumatorio(numero) {
    let resultado = 0;
    for (let i = numero; i > 0; i--) {
        resultado += i;
    }
    return resultado;
}




