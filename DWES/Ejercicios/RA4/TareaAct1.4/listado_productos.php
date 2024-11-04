<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado Productos PHP</title>
</head>

<body>



    <?php




    $conexion = conexionPDO("tienda", "super", "super123");

    if (isset($conexion)) {
        echo "Conexion establecida con exito";


        $sql = "SELECT id, nombre, precio, descripcion FROM producto";

        $result = $conexion->query($sql);

        if ($result->rowCount() > 0) {

            echo "<h1>Listado de Productos</h1>";
            echo "<table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                </tr>";


            while ($fila = $result->fetch(PDO::FETCH_ASSOC)) {
                echo "<tr>
                            <td>" . $fila['id'] . "</td>
                            <td>" . $fila['nombre'] . "</td>
                            <td>" . $fila['precio'] . "</td>
                            <td>" . $fila['descripcion'] . "</td>
                          </tr>";
            }
            echo "</table>";
        } else {

            echo "No se han encontrado productos";
        }
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