<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>




    <?php


    // Realiza un programa que indique si un número de 3 cifras es capicúa. Intenta hacerlo
    // para cualquier número de cifras. 




    function esCapicua($n)

    {
        $numeroOriginal =  strval($n);
        $numeroInvertido = strrev($n);
        return $numeroInvertido === $numeroOriginal;
    }


    // c) Realiza en PHP un programa que muestre los números comprendidos entre 100 y 999
    // que son capicúa. 


    echo "Números capicúa entre 100 y 999:<br>";
    for ($i = 100; $i <= 999; $i++) {
        if (esCapicua($i)) {
            echo "$i<br>"; // Usar echo para imprimir el número
        }
    }


    ?>


</body>

</html>