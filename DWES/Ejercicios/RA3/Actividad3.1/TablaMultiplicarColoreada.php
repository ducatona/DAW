<!-- ) Muestra la tabla de multiplicar de un número, pero colorea las filas alternando dos
colores diferentes en las filas pares y las impares.  -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>


    <?php


function tablaMultiplicar($n)
{
    echo '<table border="1" cellpadding="5">';
    
    for ($i = 0; $i <= 10; $i++) {
        $resultado = $i * $n;

        // Alterna los colores
        $color = ($i % 2 == 0) ? '#f2f2f2' : '#ffffff'; // Color para filas pares e impares

        echo "<tr style='background-color: {$color};'>
                <td>Número: {$i} X {$n} = {$resultado}</td>
              </tr>";
    }

    echo '</table>';
}
tablaMultiplicar(4);

    ?>

</body>

</html>