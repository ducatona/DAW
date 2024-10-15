<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php


    for ($i = 1; $i <= 11; $i++) {
        for ($j = 1; $j < $i; $j++) {
            echo $j . ' ';
        }
        echo '<br>';
    }
    echo "-----
------------------------ <br>" ;
   // Imprimir la secuencia decreciente
for ($c = 10; $c >= 1; $c--) {
    for ($d = $c; $d >= 1; $d--) {
        echo $d . ' ';
    }
    echo '<br>';
}



    ?>

</body>

</html>