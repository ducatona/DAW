<?php

require_once("conexionBD.php");

$conexion = getConexion();
$nombre_jugadores = [];

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["mostrar"])) {
    // Verificar que se haya seleccionado un equipo
    if (isset($_POST["equipo"]) && !empty($_POST["equipo"])) {
        $equipo_seleccionado = $_POST["equipo"];

        // Obtener los jugadores del equipo seleccionado
        $consulta = $conexion->prepare("SELECT codigo, nombre, peso FROM jugadores WHERE nombre_equipo = :equipo");
        $consulta->bindParam(":equipo", $equipo_seleccionado);
        $consulta->execute();
        $nombre_jugadores = $consulta->fetchAll(PDO::FETCH_ASSOC);
    }
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['peso'])) {
    // Verifica si los valores de peso han sido enviados
    $pesos_modificados = $_POST['peso'];
    $jugadores = $_POST['jugadores']; // Se agregan los códigos de los jugadores

    foreach ($pesos_modificados as $index => $nuevo_peso) {
        $codigo_jugador = $jugadores[$index]; // Obtener el código del jugador correspondiente
        try {
            // Actualizar el peso del jugador en la base de datos, usando su codigo
            $consulta_update = $conexion->prepare("UPDATE jugadores SET peso = :peso WHERE codigo = :codigo");
            $consulta_update->bindParam(':peso', $nuevo_peso, PDO::PARAM_STR);
            $consulta_update->bindParam(':codigo', $codigo_jugador, PDO::PARAM_INT);
            $consulta_update->execute();
        } catch (Exception $e) {
            echo "Error al actualizar el peso: " . $e->getMessage();
        }
    }
    echo "<p>Pesos actualizados correctamente.</p>";
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 5 PHP</title>
</head>

<body>
    <h1>Jugadores de la NBA</h1>
    <form action="" method="post">
        <label for="equipo">Equipo:</label>
        <select name="equipo" id="equipo">
            <option value="" disabled selected>Selecciona un equipo</option>
            <?php getEquipos(); ?>
        </select>
        <br><br>
        <input type="submit" value="Mostrar" name="mostrar">
        <br><br>

      
                    <?php
                  visualizarContenido($nombre_jugadores);
                    ?>
             
            <br><br>
            <input type="submit" value="Actualizar">
      
    </form>
</body>

</html>
