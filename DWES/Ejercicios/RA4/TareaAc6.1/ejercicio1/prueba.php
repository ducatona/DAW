<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php


require_once("Circulo.php");



$circulo1 = new Circulo(5);


$radio = $circulo1->radio;
echo $radio;

$radio2 = $circulo1->radio=3;
echo $radio2;





?>
</body>
</html>