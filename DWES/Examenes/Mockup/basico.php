<?php
// Mostrar el nombre del usuario
echo "<h2>Nombre del usuario: Alfredo de la Presa Cruz</h2>";

// Mostrar la fecha actual usando la función date()
echo "<p>Fecha actual: " . date("d-m-Y") . "</p>";

// Obtener la hora actual en formato de 24 horas
$horaActual = date("H");

// Utilizar una estructura condicional para mostrar un saludo
if ($horaActual < 12) {
    echo "<p>Buenos días</p>";
} else {
    echo "<p>Buenas tardes</p>";
}
?>
