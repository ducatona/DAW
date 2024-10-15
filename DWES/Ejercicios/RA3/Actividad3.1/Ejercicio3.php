<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php

    $numero = 123;

    $productoN = 1;
    $sumaN = 0;

    while ($numero > 0) {

        $digitos = $numero % 10;
        $sumaN += $digitos;
        $productoN *= $digitos;

       $numero =  intdiv($numero, 10);
    }


    if ($sumaN === $productoN) {

        echo "Es valido amigo";
    } else {
        echo "No lo cumple";
    }




    ?>

</body>

</html>