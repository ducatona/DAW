<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>


    <?php

    function validarFecha($fecha)
    {
        // Crear un objeto DateTime a partir de la cadena con el formato dd/mm/yyyy
        $formato = DateTime::createFromFormat('d/m/Y', $fecha);

        // Verificar si la fecha es válida y coincide con el formato
        if ($formato && $formato->format('d/m/Y') === $fecha) {
            return "La fecha es válida.";
        } else {
            return "La fecha no es válida.";
        }
    }

    ?>

</body>

</html>