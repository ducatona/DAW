<?php
// Crear el array asociativo $productos
$productos = [
    "Laptop" => 1500,
    "Mouse" => 25,
    "Teclado" => 45,
    "Monitor" => 300
];

// Mostrar cada producto con su precio en pantalla
echo "<h2>Lista de productos y precios:</h2>";
echo "<ul>";  // Abrir lista desordenada

// Recorrer el array $productos y mostrar cada producto con su precio
foreach ($productos as $producto => $precio) {
    echo "<li>" . htmlspecialchars($producto) . ": $" . number_format($precio, 2) . "</li>";
}

echo "</ul>";  // Cerrar lista desordenada

// Calcular el precio total de todos los productos
$precioTotal = array_sum($productos);

// Mostrar el precio total
echo "<h3>Precio total de todos los productos: $" . number_format($precioTotal, 2) . "</h3>";
?>
