<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>



<body>

    <form action="" method="post">
        <label for="fecha">Fecha de la pelicula que quieres buscar(YYYY-MM-DD):</label>
        <input type="date" name="fecha" id="fecha" required>
        <input type="submit" value="Buscar">
    </form>



    <?php



    $conexion = conexionPDO('goyas', 'goyas', 'goyas123');


    if ([$_SERVER["REQUEST_METHOD"] == "POST"]) {

        $fecha = $_POST['fecha']; //recogemos el valor de la fecha




        $consulta = $conexion->prepare("SELECT *  FROM peliculas WHERE fecha=?");
        $consulta->bindParam(1, $fecha, PDO::PARAM_STR);
        $consulta->execute();

        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);


        if ($resultado) {
            echo "Título: " . htmlspecialchars($resultado["titulo"]) . "<br>";
            // Puedes imprimir más detalles si es necesario
        } else {
            echo "No se encontraron películas para la fecha proporcionada.";
        }
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