<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Familias y Productos</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid black;
        }

        th, td {
            padding: 10px;
            text-align: left;
        }
    </style>
</head>

<body>
    <h1>Familias y Productos</h1>

    <!-- Formulario para seleccionar familia -->
    <form method="POST">
        <label for="familia">Selecciona una familia:</label>
        <select id="familia" name="familia" required>
            <option value="" disabled selected>Elige una familia</option>
            <?php
            // Mostrar las familias en el desplegable
            if ($listado_vehiculos->rowCount() > 0) {
                while ($row = $listado_vehiculos->fetch(PDO::FETCH_ASSOC)) {
                    echo "<option value='" . htmlspecialchars($row["cod"]) .
                     "'>" . htmlspecialchars($row["nombre"]) . "</option>";
                }
            }
            ?>
        </select>
        <button type="submit">Mostrar productos</button>
    </form>
       <?php mostrar($productos) ?>
</body>

</html>
