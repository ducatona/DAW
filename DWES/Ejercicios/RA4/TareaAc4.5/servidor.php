<?php
require_once("conexionBD.php");

$conexion = conexionPDO("ocasion", "root", "");

// Consulta inicial de vehículos y matrículas
$listado_vehiculos = [];
$matriculas = [];

$vehiculo_stock = $conexion->query("SELECT * FROM vehiculo WHERE vendido = 0");
if ($vehiculo_stock) {
    $listado_vehiculos = $vehiculo_stock->fetchAll(PDO::FETCH_ASSOC);
}

$matricula_stock = $conexion->query("SELECT matricula FROM vehiculo WHERE vendido = 0");
if ($matricula_stock) {
    $matriculas = $matricula_stock->fetchAll(PDO::FETCH_COLUMN);
}

// Función para mostrar las opciones de matrícula en el select
function mostrarMatricula($matriculas)
{
    foreach ($matriculas as $matricula) {
        echo "<option value=\"$matricula\">" . htmlspecialchars($matricula) . "</option>";
    }
}

// Función para mostrar la tabla de vehículos
function mostrarVehiculos($listado_vehiculos)
{
    echo "<table border='1'>";
    echo "<tr>" . "<th>Matricula</th>" .
        "<th>Marca</th>" .
        "<th>Descripción</th>" .
        "<th>PVP</th>" .
        "<th>Tipo</th>" .
        "<th>Vendido</th></tr>";

    foreach ($listado_vehiculos as $row) {
        echo "<tr>" .
            "<td>" . htmlspecialchars($row["matricula"]) . "</td>" .
            "<td>" . htmlspecialchars($row["marca"]) . "</td>" .
            "<td>" . htmlspecialchars($row["descripcion"]) . "</td>" .
            "<td>" . htmlspecialchars($row["PVP"]) . "</td>" .
            "<td>" . htmlspecialchars($row["tipo"]) . "</td>" .
            "<td>" . htmlspecialchars($row["vendido"]) . "</td>" .
            "</tr>";
    }
    echo "</table>";
}

// Procesamiento del formulario
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["accion"]) && $_POST["accion"] === "comprar") {
    try {
        // Datos del formulario
        $matricula = $_POST["matricula"];
        $cliente = $_POST["cliente"];
        $cuota = (float)$_POST["cuota"];

        // Iniciar transacción
        $conexion->beginTransaction();

        // Obtener precio del vehículo
        $stmt = $conexion->prepare("SELECT PVP FROM vehiculo WHERE matricula = :matricula");
        $stmt->bindParam(":matricula", $matricula);
        $stmt->execute();
        $precio = $stmt->fetchColumn();

        if ($precio === false) {
            throw new Exception("No se encontró el vehículo con la matrícula proporcionada.");
        }

        // Datos calculados
        $fecha_compra = date("Y-m-d H:i:s");
        $cantidad_pendiente = $precio - $cuota;

        // Insertar en la tabla compra (usar id_matricula en lugar de matricula)
        $stmt = $conexion->prepare("
            INSERT INTO compra (id_matricula, cliente, cuota, f_compra, pendiente) 
            VALUES (:matricula, :cliente, :cuota, :fecha_compra, :cantidad_pendiente)
        ");
        $stmt->bindParam(":matricula", $matricula);  
        $stmt->bindParam(":cliente", $cliente);
        $stmt->bindParam(":cuota", $cuota);
        $stmt->bindParam(":fecha_compra", $fecha_compra);
        $stmt->bindParam(":cantidad_pendiente", $cantidad_pendiente);

        if (!$stmt->execute()) {
            throw new Exception("Error al insertar los datos en la tabla compra.");
        }

        // Actualizar el estado del vehículo a vendido (usar matricula)
        $stmt = $conexion->prepare("UPDATE vehiculo SET vendido = 1 WHERE matricula = :matricula");
        $stmt->bindParam(":matricula", $matricula);

        if (!$stmt->execute()) {
            throw new Exception("Error al actualizar el estado del vehículo.");
        }

        // Confirmar transacción
        $conexion->commit();

        echo "<p>La operación se realizó con éxito. El vehículo con matrícula $matricula ha sido comprado.</p>";

        echo "<h3>Datos a insertar en la tabla 'compra':</h3>";
        echo "<ul>";
        echo "<li><strong>Matrícula:</strong> " . htmlspecialchars($matricula) . "</li>";
        echo "<li><strong>Cliente:</strong> " . htmlspecialchars($cliente) . "</li>";
        echo "<li><strong>Cuota inicial:</strong> " . htmlspecialchars($cuota) . "</li>";
        echo "<li><strong>Precio del vehículo:</strong> " . htmlspecialchars($precio) . "</li>";
        echo "<li><strong>Fecha de compra:</strong> " . htmlspecialchars($fecha_compra) . "</li>";
        echo "<li><strong>Cantidad pendiente:</strong> " . htmlspecialchars($cantidad_pendiente) . "</li>";
        echo "</ul>";


    } catch (Exception $e) {
        // Revertir transacción en caso de error
        $conexion->rollBack();
        echo "<p>Error: " . $e->getMessage() . "</p>";
    }
}

?>
