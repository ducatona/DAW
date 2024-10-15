<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludo</title>
</head>
<body>







<?php


// ) Realiza una página llamada saludo.php indicando tu nombre en ella.
// Muestra también la fecha y hora de la conexión, añadiendo un mensaje para indicar la
// fecha con el formato: dd-nombre_mes-aaaa (por ejemplo: 25-september-2021), y otro
// para indicar la hora con el formato: HH:MM:SS (por ejemplo: 18:35:22). 


$nombre = 'Adrian';
$fecha = date("d-F-Y");
$tiempo = date("H-i-s");

echo "<h1>Buenas mi nombre es: {$nombre} y estamos a: {$fecha}  y son las: {$tiempo}</h1>";

?>



    
</body>
</html>