<?php
// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores de los campos del formulario
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    // Validar si el campo de correo contiene una "@" 
    if (strpos($correo, '@') !== false) {
        // Si el correo es válido, mostrar los datos ingresados
        echo "<h2>Datos enviados:</h2>";
        echo "Nombre: " . htmlspecialchars($nombre) . "<br>";
        echo "Correo: " . htmlspecialchars($correo) . "<br>";
        echo "Mensaje: " . nl2br(htmlspecialchars($mensaje)) . "<br>";
    } else {
        // Si el correo no es válido, mostrar mensaje de error
        echo "<p style='color: red;'>Por favor, introduce un correo electrónico válido que contenga una arroba (@).</p>";
    }
}
?>

<!-- Formulario HTML -->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Contacto</title>
</head>

<body>


    <h1>Formulario de Contacto</h1>
    <form action="formulario.php" method="POST">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" required><br><br>

        <label for="correo">Correo electrónico:</label><br>
        <input type="text" id="correo" name="correo" required><br><br>

        <label for="mensaje">Mensaje:</label><br>
        <textarea id="mensaje" name="mensaje" rows="4" cols="50" required></textarea><br><br>

        <input type="submit" value="Enviar">



    </form>
</body>

</html>