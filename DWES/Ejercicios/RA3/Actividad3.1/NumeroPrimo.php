<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>


    <?php


    function numeroPrimo($numero)
    {
        if ($numero <= 1) return false; // Números menores o iguales a 1 no son primos
        if ($numero <= 3) return true;  // 2 y 3 son primos

        if ($numero % 2 === 0) return false; // Eliminar números pares

        for ($i = 3; $i * $i <= $numero; $i += 2) { // Solo verificamos impares
            if ($numero % $i === 0) {
                return false; // Si encontramos un divisor, no es primo
            }
        }

        return true; // Si no se encontraron divisores, es primo
    }


    ?>
</body>

</html>