<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


<?php

// Función para comprobar si un número es capicúa
function esCapicua($numero) {
    $numeroStr = strval($numero); // Convertir el número en cadena
    return $numeroStr === strrev($numeroStr); // Comparar la cadena original con su reversa
}

// Función para comprobar si un número es primo
function esPrimo($numero) {
    if ($numero <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false; // Si es divisible por algún número distinto de 1 y sí mismo, no es primo
        }
    }
    return true;
}

// Función para redondear un número
function redondear($numero) {
    return round($numero); // Redondea al entero más cercano
}

// Función para quitar los decimales
function quitarDecimales($numero) {
    return intval($numero); // Convierte el número a un entero, eliminando los decimales
}

// Función para contar el número de dígitos
function contarDigitos($numero) {
    return strlen(strval(abs(intval($numero)))); // Convierte a entero y cuenta los dígitos
}

// Programa principal
$numero = 121.567; // Ejemplo de número

// Mostrar los resultados en el programa principal
echo "Número: $numero\n";
echo esCapicua($numero) ? "Es capicúa\n" : "No es capicúa\n";
echo esPrimo($numero) ? "Es primo\n" : "No es primo\n";
echo "Número redondeado: " . redondear($numero) . "\n";
echo "Número sin decimales: " . quitarDecimales($numero) . "\n";
echo "Número de dígitos: " . contarDigitos($numero) . "\n";


?>
    
</body>
</html>