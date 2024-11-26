<?php
session_start();

// Array con las rutas y distancias
$rutas = array(
    "oviedo" => 192,
    "madrid" => 400,
    "salamanca" => 360,
    "toledo" => 520,
    "lugo" => 390,
    "sevilla" => 830,
    "barcelona" => 825
);

// Inicialización de la sesión para almacenar las rutas
if (!isset($_SESSION['rutas'])) {
    $_SESSION['rutas'] = $rutas;
}

// Función para obtener la distancia de una ciudad
function verDistancia($rutas, $ciudad)
{
    $ciudad = strtolower(trim($ciudad)); // Convertir a minúsculas y eliminar espacios extra
    if (array_key_exists($ciudad, $rutas)) {
        return "La ciudad " . ucfirst($ciudad) . " está a " . $rutas[$ciudad] . " km.";
    } else {
        return "No tenemos datos de la ciudad.";
    }
}

// Función para obtener la ciudad a una distancia específica
function verCiudad($rutas, $distancia)
{
    $distancia = (int)$distancia; // Convertir la distancia a entero
    $resultado = "";
    foreach ($rutas as $ciudad => $km) {
        if ($distancia == $km) {
            $resultado .= "La ciudad " . ucfirst($ciudad) . " está a " . $km . " km.<br>";
        }
    }
    if (empty($resultado)) {
        return "No se ha encontrado ninguna ciudad con esa distancia.";
    }
    return $resultado;
}

// Función para mostrar las ciudades a menos de una distancia dada
function ciudadesMenores($rutas, $distancia)
{
    $distancia = (int)$distancia; // Convertir a entero
    $resultado = "";
    foreach ($rutas as $ciudad => $km) {
        if ($km < $distancia) {
            $resultado .= ucfirst($ciudad) . " está a " . $km . " km.<br>";
        }
    }
    if (empty($resultado)) {
        return "No hay ciudades a menos de $distancia km.";
    }
    return $resultado;
}

// Función para comprobar si la distancia introducida es mayor o menor que la real
function comprobarDistancia($rutas, $ciudad, $distancia)
{
    $mensaje = "";
    if (array_key_exists($ciudad, $rutas)) {
        $distanciaReal = $rutas[$ciudad];
        if ($distancia > $distanciaReal) {
            $mensaje =  "La distancia introducida ($distancia km) es mayor que la distancia real a $ciudad ($distanciaReal km).";
        } elseif ($distancia < $distanciaReal) {
            $mensaje =  "La distancia introducida ($distancia km) es menor que la distancia real a $ciudad ($distanciaReal km).";
        } else {
            $mensaje =   "La distancia introducida ($distancia km) coincide exactamente con la distancia real a $ciudad.";
        }
    } else {
        $mensaje = "La ciudad \"$ciudad\" no se encuentra en nuestras rutas.";
    }

    return  $mensaje;
}

// Función para mostrar todas las ciudades en una tabla con colores alternos
function mostrarTabla($rutas)
{
    $tabla = "<table border='1' cellpadding='5' cellspacing='0' style='border-collapse: collapse;'>";
    $tabla .= "<tr><th>Ciudad</th><th>Distancia (km)</th></tr>";

    $rowColor = true;
    foreach ($rutas as $ciudad => $km) {
        $color = $rowColor ? "#f2f2f2" : "#323232"; // Alternar color de filas
        $tabla .= "<tr style='background-color: $color;'>
                    <td>" . ucfirst($ciudad) . "</td>
                    <td>$km</td>
                   </tr>";
        $rowColor = !$rowColor;
    }
    $tabla .= "</table>";
    return $tabla;
}

// Función para añadir una ciudad nueva
function anadirRuta(&$rutas, $ciudad, $distancia)
{
    if (empty($ciudad) || !is_numeric($distancia) || $distancia <= 0) {
        return "Error: La ciudad no puede estar vacía y la distancia debe ser un número positivo.";
    }

    $ciudad = strtolower(trim($ciudad));
    if (isset($rutas[$ciudad])) {
        return "La ciudad ya existe en las rutas.";
    }

    $rutas[$ciudad] = $distancia;
    return "La ciudad " . ucfirst($ciudad) . " con $distancia km ha sido añadida exitosamente.";
}

// Procesar el formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $ciudad = $_POST['ciudad'] ?? ""; // Asegurar que la variable esté definida
    $accion = $_POST['accion'] ?? ""; // Asegurar que la variable esté definida
    $distancia = $_POST['distancia'] ?? ""; // Obtener la distancia si se introduce

    // Lógica para las diferentes acciones
    if ($accion === 'verdistancia') {
        $resultado = verDistancia($_SESSION['rutas'], $ciudad);
        echo $resultado;
    } elseif ($accion === 'verciudad') {
        $resultado = verCiudad($_SESSION['rutas'], $distancia);
        echo $resultado;
    } elseif ($accion === 'menores' && !empty($distancia)) {
        $resultado = ciudadesMenores($_SESSION['rutas'], $distancia);
        echo $resultado;
    } elseif ($accion === 'comprobar' && !empty($ciudad)) {
        $resultado = comprobarDistancia($_SESSION['rutas'], $ciudad, $distancia);
        echo $resultado;
    } elseif ($accion === 'todos') {
        $resultado = mostrarTabla($_SESSION['rutas']);
        echo $resultado;
    } elseif ($accion === 'añadir' && !empty($ciudad) && !empty($distancia)) {
        $mensaje = anadirRuta($_SESSION['rutas'], $ciudad, $distancia);
        echo $mensaje;
    }
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Rutas</title>
</head>

<body>
    <h1>Servicios de carreteras desde Santander</h1>
    <form action="" method="post">
        <label for="ciudad">Introduce una ciudad:</label>
        <input type="text" name="ciudad" id="ciudad">
        <br><br>

        <label for="distancia">Introduce una distancia (solo para algunos botones):</label>
        <input type="text" name="distancia" id="distancia">
        <br><br>

        <input type="submit" value="verdistancia" name="accion">
        <input type="submit" value="verciudad" name="accion">
        <input type="submit" value="menores" name="accion">
        <input type="submit" value="comprobar" name="accion">
        <input type="submit" value="todos" name="accion">
        <input type="reset" value="limpiar">
        <input type="submit" value="añadir" name="accion">
    </form>
</body>

</html>