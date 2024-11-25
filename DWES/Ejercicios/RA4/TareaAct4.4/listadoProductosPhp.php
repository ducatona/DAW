<?php
require_once("conexionBD.php");

// Crear la conexión
$conexion = conexionPDO("dwes", "root", "");
$productos_descuentos = []; // Lista de productos con descuento

// Aplicar descuento si se envía el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["producto_cod"])) {
    $producto_cod = $_POST["producto_cod"];

    // Verificar si el producto ya recibió descuento
    if (!in_array($producto_cod, $productos_descuentos)) {
        // Actualizar el precio del producto con un descuento del 10%
        $consulta_actualiza = $conexion->prepare("UPDATE producto SET PVP = PVP * 0.9 WHERE cod = ?");
        $consulta_actualiza->bindParam(1, $producto_cod);
        $consulta_actualiza->execute();

        // Agregar el código del producto a la lista de descuentos aplicados
        $productos_descuentos[] = $producto_cod;

        $consulta_actualiza = null;
    }
}

// Obtener los productos ordenados por código
$consulta_productos = $conexion->query(
    "SELECT p.cod, p.nombre_corto, p.PVP, f.nombre AS familia 
    FROM producto p 
    JOIN familia f ON p.familia = f.cod 
    ORDER BY p.cod"
);
$productos = $consulta_productos->fetchAll(PDO::FETCH_ASSOC);

$conexion = null; // Cerrar la conexión

function mostrar($listado, $productos_descuentos)
{
    echo "<table>" .
        "<tr>" .
        "<th>Familia</th>" .
        "<th>COD</th>" .
        "<th>NOMBRE CORTO</th>" .
        "<th>PVP</th>" .
        "<th>Acción</th>" .
        "</tr>";

    foreach ($listado as $producto) {
        echo "<tr>" .
            "<td>" . htmlspecialchars($producto["familia"]) . "</td>" .
            "<td>" . htmlspecialchars($producto["cod"]) . "</td>" .
            "<td>" . htmlspecialchars($producto["nombre_corto"]) . "</td>" .
            "<td>" . number_format(htmlspecialchars($producto["PVP"]), 2, ',', '.') . " €</td>" .
            "<td>";

        // Mostrar el botón de descuento solo si el producto no tiene descuento y el PVP es mayor a 100
        if (!in_array($producto["cod"], $productos_descuentos) && $producto["PVP"] > 100) {
            echo '<form method="POST" style="display:inline;">' .
                '<input type="hidden" name="producto_cod" value="' . htmlspecialchars($producto["cod"]) . '">' .
                '<button type="submit">Aplicar Descuento</button>' .
                '</form>';
        } else {
            echo "No aplica";
        }

        echo "</td>" .
            "</tr>";
    }

    echo "</table>";
}



?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de Productos</title>
   
</head>

<body>
    <h1>Listado de Productos</h1>
    <?php mostrar($productos, $productos_descuentos) ?>
    
</body>

</html>
