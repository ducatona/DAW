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
 * aleatorio
 * Devuelve un número aleatorio comprendido entre el número inferior del rango (minimo) y el superior (máximo), ambos inclusive
 * @param {int} minimo
 * @param {int} maximo
 * @returns el número entero aleatorio dentro del rango indicado
 */
function aleatorio(minimo, maximo) {
    let resultado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    console.log(resultado);
    return resultado;
}

function esPrimo(num) {
    let primo = num >= 2;
    //let primo = true;

    if (primo) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                primo = false;
                i = num;
            }
        }
    }
    return primo;
}

/**
 * Función que separa una cadena utilizando como separador un caracter pasado como parámetro
 * @param {String} cadena
 * @param {*} caracter
 * @returns array con las partes de la cadena separadas
 */
function separaPalabras(cadena, caracter) {
    return cadena.split(caracter);
}

/**
 * Función que da la vuelta a una cadena
 * @param cadena
 * @returns {string} Cadena completamente invertida
 */
function girarPalabras(cadena) {
    return cadena.split("").reverse().join("");
}

/**
 * Función que comprueba si una cadena es un palíndromo o no
 * @param {String} cadena
 * @returns true o false en función de si es palíndromo o no
 */
function comprobarPalindromo(cadena) {
    cadena = cadena.toLowerCase();
    let esPalindromo = true;
    let longitudCadena = cadena.length;
    for (let i = 0; i <= longitudCadena / 2; i++) {
        if (cadena[i] !== cadena[longitudCadena - (i + 1)]) {
            esPalindromo = false;
        }
    }
    return esPalindromo;
}

/*Otra forma de hacer la función esPalindromo:
    function comprobarPalindromo(texto) {
        let resultado = true;
        let textoInvertido = texto.split("").reverse().join("");
        if(texto !== textoInvertido){
            resultado = false;
        }
        return resultado;
         }
    */

/**
 * Función que devuelve una copia de un array   
 * @param {*} coleccion: array a copiar
 * @returns el nuevo array con todos los elementos del copiado
 */
function copiarArray(coleccion) {
    let copia = [];
    for (elemento of coleccion) {
        copia.push(elemento);
    }
    return copia;
}

/**
 * Función que separa los números entre pares e impares, y, dentro de pares e impares, los ordena de mayor a menor
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function ordenarParesEImpares(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    let resultado = 0;
    if (a % 2 === 0 && !(b % 2 === 0)) {
        resultado = -1;
    } else if (!(a % 2 === 0) && b % 2 === 0) {
        resultado = 1;
    } else {
        return a - b;
    }
    return resultado;
}

/**
 * Función para recuperar el valor de una cookie
 * @param nomCookie
 * @returns {null}
 */
function getCookie(nomCookie) {
    let n;
    let nombre;
    let valor;
    let resultado = null;  // si no se encuentra = nulo
    let cook=document.cookie.split(";"); // pares de valores
    // revisamos todos los pares
    for (let i=0; i<cook.length; i++) {
        n = cook[i].split("="); // separamos nombre/valor
        nombre=n[0];
        valor =n[1];
        // si es el buscado
        if (nombre.trim()==nomCookie.trim()){
            resultado = valor;// devolvemos su valor
        }
    }
    return resultado;
}

/**
 * Establecer las cookies
 * @param name
 * @param value
 * @param caducidad
 */
function setCookie(name, value, caducidad) {
    var now = new Date();
    var then = now;
    then.setDate(then.getDate() + caducidad);
    console.log(then);
    document.cookie = name + "=" + value
        + ";expires=" + then.toGMTString() + ";path=/";
}

/**
 * Comprobar si hay cookies
 * @returns {*}
 */
function haycookies() {
    document.cookie = "micookie=hay";
    return (getCookie("micookie") === "hay");
}


/**
 * Función para crear una etiqueta, con sus atributos y, en caso de que lo tenga, su texto, definidos y pasados como parámetro dentro de su único parámetro, en un array asociativo (JSON)
 * Dentro del array asociativo parámetro es necesario pasar OBLIGATORIAMENTE "etiqueta" : "tipoEtiqueta"
 * En caso de querer que tenga texto, lo pasaríamos como: "texto" : "valorDelTexto"
 * El resto de datos del array se añadirán como atributos
 * @param {*} datos 
 * @returns 
 */
function crearElemento(datos) {
    let elementoNuevo;
    if (datos.etiqueta !== undefined) {
        elementoNuevo = document.createElement(datos.etiqueta);
        if (datos.texto !== undefined) {
            elementoNuevo.appendChild(document.createTextNode(datos.texto));
        }

        for (let clave in datos) {
            if (clave !== "etiqueta" && clave !== "texto") {
                elementoNuevo.setAttribute(clave, datos[clave]);
            }
        }
    }else{
        elementoNuevo = crearElemento({"etiqueta":"p", "texto":"ERROR: NO SABER USAR ESTA FUNCIÓN (mira que esté bien definida etiqueta)"});
    }
    return elementoNuevo;
}


