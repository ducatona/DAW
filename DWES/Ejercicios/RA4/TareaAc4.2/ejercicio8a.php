<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de películas</title>
</head>
<body>

<?php
require_once("conexionBD.php");

// Establecer la conexión
$conexion = conexionPDO('goyas', 'goyas', 'goyas123');

// Consulta SQL para obtener los títulos y años de las películas, ordenados por fecha
$resultado = $conexion->query('SELECT titulo, fecha FROM pelicula ORDER BY fecha');

echo "<h2>Listado de Películas Ordenado por Año</h2>";
echo "<ul>";
// Mostrar los resultados
while ($datos = $resultado->fetch(PDO::FETCH_ASSOC)) {
    echo "<li>";
    echo "Título: " . htmlspecialchars($datos['titulo']) . " - Año: " . htmlspecialchars($datos['fecha']);
    echo "</li>";
}
echo "</ul>";

?>

</body>
</html>
