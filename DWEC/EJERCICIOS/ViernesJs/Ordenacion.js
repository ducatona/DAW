//aray numeros
let numeros = [5, 1, 4, 2, 3];


function ordenarAleatorio() {
    return Math.random(numeros.length); 
}

// Paso 3: Ordenar el array de manera aleatoria
numeros.sort(ordenarAleatorio);