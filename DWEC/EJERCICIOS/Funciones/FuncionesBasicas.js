function esNumero(n) {
    return typeof n === 'number' && !isNaN(n);

}

function esEntero(n) {
    return (typeof n === 'number' && Number.isInteger(n)) || (typeof n === 'string' && isNaN(parseFloat(n) && n.trim() !== ''));

}


function esPositivo(n) {
    return n > 0;
}


function sumarNumeros(n1, n2) {
    return n1 + n2;

}

function restarNumeros(n1, n2) {
    return n1 - n2;
}

function multiplicarNumeros(n1, n2) {
    return n1 * n2;

}

function dividirNumeros(n1, n2) {

    return n1 / n2;

}

function factorialNumero(n) {
    let factorial = 1;
    for (let i = n; i >= 1; i--) {
        factorial * i;
    }
    return factorial;

}

function sumatorioNumero(n) {
    suma = 0;

    for (let i = 0; i < n; i++) {
        suma += i;

    }
    return suma;

}

function esRango(n, min, max) {
    return n >= min && n <= max;



}



