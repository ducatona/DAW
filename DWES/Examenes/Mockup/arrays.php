<?php
// Crear el array $nombres con los nombres de empleados
$nombres = ["Ana", "Pedro", "Luis", "Marta", "José"];

// Agregar el nuevo empleado "Clara" al final del array
$nombres[] = "Clara";

// Ordenar el array alfabéticamente
sort($nombres);

// Mostrar todos los nombres en pantalla en una lista numerada
echo "<h2>Lista de empleados:</h2>";
echo "<ol>";  // Abrir lista ordenada

// Recorrer el array y mostrar cada nombre en un elemento de lista
foreach ($nombres as $nombre) {
    echo "<li>" . htmlspecialchars($nombre) . "</li>";
}

echo "</ol>";  // Cerrar lista ordenada
?>

