<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertar PHP</title>
</head>

<body>



    <?php

    $conexion = conexionPDO("tienda", "super", "super123");


    $insert = "INSERT INTO cliente (nif, nombre, direccion, email, telefono, saldo) VALUES (72208910, 'Adrian', 'astillero', 'adrian@gmail.com', 610347733, 10)";


    $insercion = $conexion->prepare($insert);

    $insercion->execute();

    if (isset($insercion)) {

        echo  "datos insertados correctamente";
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