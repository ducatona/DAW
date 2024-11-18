<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertar Directort</title>
</head>
<body>

<?php
require_once("conexionBD.php");

// Establecer la conexión
$conexion = conexionPDO('goyas', 'goyas', 'goyas123');

// Datos que deseas insertar
$d1 = 'D14';
$d2 = 'Achero'; 
$d3 = 'Mañas';

// Preparar la consulta de inserción
$resultado = $conexion->prepare('INSERT INTO director (codDirector, nombre, apellidos) VALUES (:d1, :d2, :d3)');

// Vincular los parámetros
$resultado->bindParam(':d1', $d1);
$resultado->bindParam(':d2', $d2);
$resultado->bindParam(':d3', $d3);

// Ejecutar la consulta
$resultado->execute();

echo "Director insertado correctamente.";
?>

    
</body>
</html>