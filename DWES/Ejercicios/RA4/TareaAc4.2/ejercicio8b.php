<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de Películas</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<?php
require_once("conexionBD.php");

// Establecer la conexión
$conexion = conexionPDO('goyas', 'goyas', 'goyas123');

// Consulta SQL para obtener los títulos y años de las películas, ordenados por fecha
$resultado = $conexion->query('SELECT titulo, fecha FROM pelicula ORDER BY fecha');

echo "<h2>Listado de Películas Ordenado por Año</h2>";

// Comienza la tabla
echo "<table>";
echo "<tr><th>Título</th><th>Año</th></tr>";

// Mostrar los resultados en la tabla
while ($datos = $resultado->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>";
    echo "<td>" . htmlspecialchars($datos['titulo']) . "</td>";
    echo "<td>" . htmlspecialchars($datos['fecha']) . "</td>";
    echo "</tr>";
}

// Cerrar la tabla
echo "</table>";
?>

</body>
</html>
