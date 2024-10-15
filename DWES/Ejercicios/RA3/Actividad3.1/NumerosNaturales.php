<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numeros naturales</title>
</head>

<body>


    <?php


    for ($i = 1; $i <= 100; $i++) {
        if (esPar($i)) {
            echo "" . $i . "";
        }
    }
    function esPar($n): bool
    {

        if ($n % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }



    ?>




</body>

</html>