<?php
// Definir la función convertirTemperatura que convierte grados Celsius a Fahrenheit
function convertirTemperatura($gradosC) {
    // Fórmula para convertir Celsius a Fahrenheit
    $gradosF = ($gradosC * 9/5) + 32;
    return $gradosF;
}

// Llamar a la función para convertir 0°C, 25°C y 100°C
$temp0C = convertirTemperatura(0);
$temp25C = convertirTemperatura(25);
$temp100C = convertirTemperatura(100);

// Mostrar los resultados en pantalla
echo "<h2>Conversión de temperaturas de Celsius a Fahrenheit:</h2>";
echo "0°C = " . number_format($temp0C, 2) . "°F<br>";
echo "25°C = " . number_format($temp25C, 2) . "°F<br>";
echo "100°C = " . number_format($temp100C, 2) . "°F<br>";
 

// Llamar a la función para convertir 0°C, 25°C y 100°C
$temp0C = convertirTemperatura(0);
$temp25C = convertirTemperatura(25);
$temp100C = convertirTemperatura(100);

// Mostrar los resultados de la conversión en pantalla
echo "<h2>Conversión de temperaturas de Celsius a Fahrenheit:</h2>";
echo "0°C = " . number_format($temp0C, 2) . "°F<br>";
echo "25°C = " . number_format($temp25C, 2) . "°F<br>";
echo "100°C = " . number_format($temp100C, 2) . "°F<br>";

// Función para calcular el promedio de edad
function calcularPromedioEdad($edades) {
    // Sumar todas las edades y dividir entre la cantidad de elementos
    $totalEdades = array_sum($edades);  // suma todas las edades
    $cantidadEdades = count($edades);  // cuenta cuántos elementos tiene el array
    $promedio = $totalEdades / $cantidadEdades;
    return $promedio;
	}

// Crear un array con las edades de los candidatos
$edadesCandidatos = [30, 25, 40, 35, 28];

// Llamar a la función para calcular el promedio de edad
$promedioEdad = calcularPromedioEdad($edadesCandidatos);

// Mostrar el promedio de edad en pantalla, redondeado a dos decimales
echo "<h2>Promedio de edad de los candidatos:</h2>";
echo "El promedio de edad es: " . number_format($promedioEdad, 2) . " años.";

?>
