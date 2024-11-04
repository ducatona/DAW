<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eliminar PHP</title>
</head>

<body>



    <?php

    $conexion = conexionPDO("tienda", "super", "super123");
    $nif = '98765432A';

    $eliminar = "DELETE FROM pedido WHERE cliente = '$nif'";

    $eliminacion  = $conexion->prepare($eliminar);
    $eliminacion->execute();

    $eliminar2 = "DELETE FROM cliente WHERE nif = '$nif'";

    $eliminacion2  = $conexion->prepare($eliminar2);
    $eliminacion2->execute();


    if (isset($eliminacion)) {
        echo "datos eliminados correctamente";
    }


    if (isset($eliminacion2)) {
        echo "datos eliminados correctamente";
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