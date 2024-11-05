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


    echo "<br>";
    echo "<br>";


    $countPeliculas = ("select COUNT(*)as total from pelicula ");

    $result = $conexion->prepare($countPeliculas);

    $result->execute();




    $resultado = $result->fetch(PDO::FETCH_ASSOC);




    $countDirectores = ("select COUNT(*)as total from director");

    $result2 = $conexion->prepare($countDirectores);

    $result2->execute();




    $resultado2 = $result2->fetch(PDO::FETCH_ASSOC);




    echo "Directores: " . $resultado2['total'] . "<br>";
    echo "<br>";
    echo "Peliculas: " . $resultado['total'] . "<br>";








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