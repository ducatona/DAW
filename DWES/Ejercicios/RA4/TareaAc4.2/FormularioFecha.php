<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>

<body>
    <form action="" method="post">
        <label for="dato">Año de la película que quieres buscar (2000-2014):</label>
        <input type="number" name="dato" id="dato" min="2000" max="2014" required>
        <input type="submit" value="Buscar">
    </form>

    <?php
// Conexión a la base de datos
$conexion = conexionPDO('goyas', 'goyas', 'goyas123');

if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST['dato'])) {
    $anio = $_POST['dato']; // Recoger el año de la película

    // Consulta que extrae el año de la columna fecha (suponiendo que la fecha tiene formato 'YYYY-MM-DD')
    $consulta = $conexion->prepare("SELECT titulo, genero, fecha FROM pelicula WHERE LEFT(fecha, 4) = ?");
    $consulta->bindParam(1, $anio, PDO::PARAM_STR); // Utilizamos PDO::PARAM_STR ya que estamos comparando con un string
    $consulta->execute();

    $resultados = $consulta->fetchAll(PDO::FETCH_ASSOC);

    if ($resultados) {
        foreach ($resultados as $resultado) {
            echo "Título: " . htmlspecialchars($resultado["titulo"]) . " - Género: " . htmlspecialchars($resultado["genero"]) . " - Fecha: " . htmlspecialchars($resultado["fecha"]) . "<br>";
        }
    } else {
        echo "No se encontraron películas para el año proporcionado.";
    }
}

/**
 * Función para establecer la conexión con la base de datos
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
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
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
