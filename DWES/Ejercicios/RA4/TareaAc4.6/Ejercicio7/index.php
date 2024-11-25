<?php
require_once("conexionBD.php");

$conexion = getConexion();


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 7</title>
</head>

<body>
    <h1><strong>Traspaso de jugadores</strong></h1>
    <form action="" method="post">
        <label for="equipo">Equipo:</label>
        <select name="equipo" id="equipo" required>
            <option value="" disabled selected>Selecciona un equipo</option>
            <?php getEquipos(); ?>
        </select>
        <br><br>
        <input type="submit" value="Mostrar" name="mostrar" id="mostrar">
        <?php if (isset($nombre_jugadores)) visualizarContenido($nombre_jugadores); ?>
    </form>

    <h2>Baja y alta de jugadores</h2>
    <form action="" method="post">
        <input type="hidden" name="equipo" value="<?= htmlspecialchars($equipo_seleccionado ?? '') ?>">

        <label for="baja">Baja de jugador:</label>
        <select name="baja" id="baja">
            <option value="" disabled selected>Selecciona un jugador</option>
            <?php if (isset($nombre_jugadores)) visualizarContenidoOpciones($nombre_jugadores); ?>
        </select>

        <h2>Datos del nuevo jugador</h2>
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" required>
        <br><br>
        <label for="procedencia">Procedencia:</label>
        <input type="text" name="procedencia" required>
        <br><br>
        <label for="altura">Altura:</label>
        <input type="number" name="altura" required>
        <br><br>
        <label for="peso">Peso:</label>
        <input type="number" name="peso" required>
        <br><br>
        <label for="posicion">Posición:</label>
        <select name="posicion" id="posicion" required>
            <option value="" disabled selected>Selecciona su posición</option>
            <?php getPosiciones(); ?>
        </select>
        <br><br>
        <input type="submit" value="Traspaso" name="traspaso">
    </form>
</body>

</html>