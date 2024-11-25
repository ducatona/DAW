<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarea 4.5 - Compra de Vehículos</title>
</head>
<body>
    <?php require_once("servidor.php"); ?>

    <!-- Mostrar tabla de vehículos -->
    <?php mostrarVehiculos($listado_vehiculos); ?>

    <h1>Compra de Vehículos</h1>
    <form action="servidor.php" method="post">
        <label for="matricula">Selecciona una matrícula:</label>
        <select name="matricula" id="matricula" required>
            <option value="" disabled selected>Selecciona una matrícula</option>
            <?php mostrarMatricula($matriculas); ?>
        </select>
        <br><br>

        <label for="cliente">Cliente:</label>
        <input type="text" name="cliente" id="cliente" required>
        <br><br>

        <label for="cuota">Cuota:</label>
        <input type="number" name="cuota" id="cuota" min="0" step="0.01" required>
        <br><br>

        <button type="submit" name="accion" value="comprar">Comprar</button>
        <button type="reset">Limpiar</button>
    </form>
</body>
</html>
