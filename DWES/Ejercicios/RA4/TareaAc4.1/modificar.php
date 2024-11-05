<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar PHP</title>
</head>

<body>




    <?php



    $NIF = '12345678Z';
    $conexion = conexionPDO("tienda", "super", "super123");
    $smt = "UPDATE cliente SET saldo = saldo + 500 where nif = '$NIF'";

    $conexion->exec($smt);

    if (isset($conexion)) {
        echo "Datos actualizados correctamente";
    }



    /**
     * 
     * @param mixed $nombreBd
     * @param mixed $usuarioBd
     * @param mixed $contraseñaBd
     * @return PDO retorna un Objeto PDO con la conexion a la Base de datos.
     */
    function conexionPDO($nombreBd, $usuarioBd, $contraseñaBd)
    {
        return new PDO("mysql:host=localhost;dbname=$nombreBd", "$usuarioBd", "$contraseñaBd");
    }



    ?>

</body>

</html>