<?php
// Iniciar sesión
session_start();

// Array asociativo de contactos
$agenda = [
    "Juan Pérez" => "123456789",
    "Ana Gómez" => "987654321",
    "Luis Ramírez" => "456123789",
    "María Torres" => "789456123",
    "Carlos Vega" => "321654987",
    "Sofía Luna" => "654987321"
];

// Inicializar el array de búsquedas en sesión
if (!isset($_SESSION['busquedas'])) {
    $_SESSION['busquedas'] = [];
}

// Función para mostrar contenido en formato HTML
function mostrarContenido($lista)
{
    $salida = '';
    foreach ($lista as $clave => $valor) {
        $salida .= "El nombre es: $clave - El número es: $valor<br>";
    }
    return $salida;
}

$mensaje = ''; // Variable para mostrar mensajes al usuario

// Procesar formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = trim($_POST['nombre'] ?? '');
    $accion = $_POST['accion'] ?? '';

    if ($accion === 'busqueda') {
        if (!empty($nombre)) {
            if (array_key_exists($nombre, $agenda)) {
                $_SESSION['busquedas'][$nombre] = $agenda[$nombre];
                $mensaje = "Teléfono de $nombre: " . $agenda[$nombre];
            } else {
                $_SESSION['busquedas'][$nombre] = "DESCONOCIDO";
                $mensaje = "Titular '$nombre': DESCONOCIDO";
            }
        } else {
            $mensaje = "Por favor, ingrese un nombre para buscar.";
        }
    } elseif ($accion === 'listado') {
        if (!empty($_SESSION['busquedas'])) {
            $mensaje = "Listado de búsquedas:<br>" . mostrarContenido($_SESSION['busquedas']);
        } else {
            $mensaje = "No se han realizado búsquedas.";
        }
    } elseif ($accion === 'cerrar') {
        // Cerrar sesión y reiniciar
        session_destroy();
        session_start();
        $_SESSION['busquedas'] = [];
        $mensaje = "Sesión cerrada. Comience una nueva lista de búsqueda.";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio de Sesiones 5</title>
    <style>
        div {
            border: 2px solid blueviolet;
            padding: 15px;
            border-radius: 8px;
            max-width: 400px;
            margin: auto;
        }
        form {
            margin: 0 auto;
            text-align: center;
        }
        input[type="text"] {
            width: 90%;
            padding: 8px;
            margin-bottom: 10px;
        }
        button {
            padding: 8px 15px;
            margin: 5px;
        }
        .mensaje {
            color: blue;
            margin-top: 15px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div>
        <form action="" method="post">
            <label for="nombre">Titular:</label><br><br>
            <input type="text" name="nombre" id="nombre"><br>
            <button type="submit" name="accion" value="busqueda">Buscar titular</button>
            <button type="submit" name="accion" value="listado">Listado</button>
            <button type="submit" name="accion" value="cerrar">Cerrar</button>
        </form>
    </div>

    <?php if (!empty($mensaje)): ?>
        <div class="mensaje">
            <?= $mensaje ?>
        </div>
    <?php endif; ?>
</body>
</html>
