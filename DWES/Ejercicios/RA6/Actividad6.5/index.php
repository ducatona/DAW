




<?php
require_once 'Coche.php';
require_once 'Bombilla.php';

// Función para encender un objeto Encendible
function enciende_algo(Encendible $algo) {
    $algo->encender();
}

// Función para apagar un objeto Encendible
function apaga_algo(Encendible $algo) {
    $algo->apagar();
}

// Crear objetos de tipo Encendible
$coche1 = new Coche();
$bombilla1 = new Bombilla(10); // Bombilla con 10 horas de vida

// Repostar el coche antes de encenderlo
$coche1->repostar(5);

// Llamar a las funciones enciende_algo y apaga_algo
echo "Intentando encender el coche...\n";
enciende_algo($coche1);

echo "\nIntentando encender la bombilla...\n";
enciende_algo($bombilla1);

echo "\nApagando el coche...\n";
apaga_algo($coche1);

echo "\nApagando la bombilla...\n";
apaga_algo($bombilla1);
?>

