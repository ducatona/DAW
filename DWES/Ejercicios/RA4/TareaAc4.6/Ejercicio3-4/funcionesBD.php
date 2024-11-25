<?php


require_once("conexionBD.php");



function getEquipos()
{

    $nombres_equipos = [];

    $conexion = getConexion();

    $consulta = $conexion->query("SELECT nombre from equipos");




    $nombres_equipos = $consulta->fetchAll(PDO::FETCH_COLUMN);

    echo "<h1>Nombre de los equipos de la NBA</h1>";

    visualizarContenido($nombres_equipos);

  


}



function visualizarContenido($contenido){
    echo "<table border=1>";
  
  

    foreach ($contenido as $c) {
        echo "<tr><td>$c</td></tr>";
    }


    echo "</table>";
}















?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php getEquipos() ?>


</body>

</html>