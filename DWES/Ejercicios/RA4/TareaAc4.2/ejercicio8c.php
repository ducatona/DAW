<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 8c</title>
  
</head>
<body>

<?php
require_once("conexionBD.php");


$conexion = conexionPDO('goyas', 'goyas', 'goyas123');


$resultado = $conexion->query('SELECT nombre,apellidos FROM director');

echo "<h2>Obtener el nombre y apellidos de todos los directores, en forma de lista. </h2>";


echo "<ul>";



while ($datos = $resultado->fetch(PDO::FETCH_ASSOC)) {
   
    echo "<li> Nombre" . " " .  htmlspecialchars($datos['nombre']);
    echo "<li> Apellidos" . " " . htmlspecialchars($datos['apellidos']) ;

}


echo "</ul>";
?>

</body>
</html>
