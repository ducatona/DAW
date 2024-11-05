<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>

<body>

    <?php



    $conexion = conexionPDO('goyas', 'goyas', 'goyas123');






    $smt = "SELECT titulo,fecha FROM pelicula";
    $result = $conexion->query($smt);




    if ($result->rowCount() > 0) {




        while ($fila = $result->fetch(PDO::FETCH_ASSOC)) {
            echo "<br>";
            echo "Titulo" . " " . $pelicula = $fila["titulo"] . "<br>";
            echo "Fecha"  . " " .  $fecha = $fila["fecha"] . "<br>";
        }
    } else {


        echo "No se han encontrado consultas";
    }











    /**
     * 
     * @param string $nombreBd Nombre de la base de datos
     * @param string $usuarioBd Nombre de usuario de la base de datos
     * @param string $contraseñaBd Contraseña del usuario de la base de datos
     * @return PDO|null Retorna un objeto PDO con la conexión a la base de datos o null en caso de error
     */
    function conexionPDO($nombreBd, $usuarioBd, $contraseñaBd)
    {
        $dsn = "mysql:host=localhost;dbname=$nombreBd"; // DSN con la interpolación de la variable
        try {
            $connection = new PDO($dsn, $usuarioBd, $contraseñaBd);
            echo 'Conexión establecida correctamente';
            return $connection;
        } catch (PDOException $e) {
            echo match ($e->getCode()) {
                1049 => 'Base de datos no encontrada',
                1045 => 'Acceso denegado',
                2002 => 'Conexión rechazada',
                default => 'Error desconocido: ' . $e->getMessage(),
            };
            return null; // Devuelve null si hay un error
        }
    }



    ?>
</body>

</html>