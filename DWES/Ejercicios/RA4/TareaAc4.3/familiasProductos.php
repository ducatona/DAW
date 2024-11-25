<?php
// Incluir el archivo de conexión a la base de datos
require_once("conexionBD.php");

// Establecer conexión con la base de datos
$conexion = conexionPDO("dwes", "root", "");

// Obtener las familias desde la base de datos
$listado_vehiculos = $conexion->query("SELECT cod, nombre FROM familia");

// Inicializar productos
$productos = [];

// Manejar el formulario para mostrar productos
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["familia"])) {
    $familia_seleccionada = $_POST["familia"];

    // Preparar la consulta para obtener productos
    $stmt = $conexion->prepare("SELECT cod, nombre_corto FROM producto WHERE familia = ?");
    $stmt->bindParam(1, $familia_seleccionada);
    $stmt->execute();

    // Guardar los resultados en un array
    $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = null; // Cerrar la consulta preparada
}


function mostrar($listado_vehiculos)
{
    echo "<table>" .

        "<th>COD</th>" .
        "<th>Nombre Corto</th>";


    foreach ($listado_vehiculos as $row) {
        echo "<tr>" .
            "<td>" . htmlspecialchars($row["cod"]) . "</td>" .
            "<td>" . htmlspecialchars($row["nombre_corto"]) . "</td>" .

            "</tr>";
    }

    echo "</table>";
}

$conexion = null; // Cerrar la conexión

// Pasar los datos a la plantilla
require_once("familiasProductosView.php");
