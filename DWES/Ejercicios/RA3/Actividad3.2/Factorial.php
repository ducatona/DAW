<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php

    function calculoFactorial($n)
    {
        $factorial = 1;

        for ($i = $n; $i >= 1; $i--) {
            $factorial *= $i; // Multiplica el factorial por el número actual
            echo $i . " "; // Muestra el número actual
        }

        echo "\nEl factorial de " . $n . " es: " . $factorial; // Muestra el resultado final
    }

    ?>

</body>

</html>