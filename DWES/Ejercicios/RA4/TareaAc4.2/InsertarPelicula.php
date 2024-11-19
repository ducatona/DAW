<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertar película</title>
</head>
<body>

<?php
require_once("conexionBD.php");

// Establecer la conexión
$conexion = conexionPDO('goyas', 'goyas', 'goyas123');

// Datos que deseas insertar
$idPelicula = 'P15';
$titulo = 'El Bola';
$fecha = '2000';  // Aquí asumimos el formato 'YYYY-MM-DD' para la fecha
$genero = 'Drama';
$numGoyas = 4;
$director = 'D14';

// Preparar la consulta de inserción
$resultado = $conexion->prepare('INSERT INTO pelicula (idPelicula, titulo, fecha, genero, numGoyas, director) 
                                 VALUES (:idPelicula, :titulo, :fecha, :genero, :numGoyas, :director)');

// Vincular los parámetros
$resultado->bindParam(':idPelicula', $idPelicula);
$resultado->bindParam(':titulo', $titulo);
$resultado->bindParam(':fecha', $fecha);
$resultado->bindParam(':genero', $genero);
$resultado->bindParam(':numGoyas', $numGoyas);
$resultado->bindParam(':director', $director);

// Ejecutar la consulta
$resultado->execute();

echo "Película insertada correctamente.";
?>

</body>
</html>
