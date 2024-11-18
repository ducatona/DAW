<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

require_once("Coche.php");


$coche1 = new Coche("MPZ","20");


$matricula = $coche1->matricula;
$velocidad = $coche1->velocidad;

echo $matricula . $velocidad;

echo $coche1;

$coche1->aceleraVelocidad(20);
echo $coche1;
echo "<br>";
echo "<br>";
$coche1->deceleraVelocidad(10);
echo $coche1;


?>
</body>
</html>