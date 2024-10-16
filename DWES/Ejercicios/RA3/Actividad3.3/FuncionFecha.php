<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
// Arreglos para los días de la semana y los meses en español
$dias = array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
$meses = array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

// Obtener la fecha actual
$diaSemana = date("w"); // Día de la semana como número (0 para Domingo, 6 para Sábado)
$diaDelMes = date("d"); // Día del mes
$mes = date("n") - 1;   // Mes como número (1 a 12), restamos 1 para indexar el arreglo
$anio = date("Y");      // Año actual

// Formatear la fecha
$fechaActual = $dias[$diaSemana] . ", " . $diaDelMes . " de " . $meses[$mes] . " de " . $anio;

// Mostrar la fecha en el formato deseado
echo "<p>$fechaActual</p>";




?>
    
</body>
</html>