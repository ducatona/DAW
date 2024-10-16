<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php

    function sumaNumeros($num1, $num2)
    {
        return $num1 + $num2;
    }
    $resultado = sumaNumeros(5, 5);

    echo 'La suma de los dos numeros es: ' . $resultado;

    ?>
</body>

</html>