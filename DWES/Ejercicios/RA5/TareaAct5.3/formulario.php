<?php
session_start();

// Inicializar las variables de sesión si no están definidas
$_SESSION['nombre'] = $_SESSION['nombre'] ?? '';
$_SESSION['correo'] = $_SESSION['correo'] ?? '';
$_SESSION['valoracion'] = $_SESSION['valoracion'] ?? '';

// Array con las opciones de valoración (corrección del uso de comas y concatenación)
$valoraciones = ["Muy Mala", "Mala", "Media", "Buena", "Muy Buena"];

// Función para generar las opciones del campo select
function visualizarContenidoOpciones($contenido) {
    foreach ($contenido as $c) {
        echo "<option value=\"" . htmlspecialchars($c) . "\">" . htmlspecialchars($c) . "</option>";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesiones 5.3</title>
</head>
<body>

<h1>Formulario con Sesiones</h1>
<form action="conectado.php" method="post">

    <label for="nombre">Nombre:</label>
    <input type="text" name="nombre" value="<?php echo htmlspecialchars($_SESSION['nombre']); ?>">
    <br><br>

    <label for="correo">Correo:</label>
    <input type="email" name="correo" value="<?php echo htmlspecialchars($_SESSION['correo']); ?>">
    <br><br>

    <label for="valoracion">Valoración:</label>
    <select name="valoracion" required>
        <option value="" disabled selected>Selecciona una opción</option>
        <?php visualizarContenidoOpciones($valoraciones); ?>
    </select>
    <br><br>

    <label for="comentarios">Comentarios:</label>
    <textarea name="comentarios"><?php echo htmlspecialchars($_SESSION['comentarios'] ?? ''); ?></textarea>
    <br><br>

    <input type="submit" value="Enviar">
    <input type="reset" value="Limpiar">

</form>

<?php
// Procesar el formulario si se envía
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $_SESSION['nombre'] = $_POST['nombre'] ?? '';
    $_SESSION['correo'] = $_POST['correo'] ?? '';
    $_SESSION['valoracion'] = $_POST['valoracion'] ?? '';
    $_SESSION['comentarios'] = $_POST['comentarios'] ?? '';

    echo "<h2>Datos enviados:</h2>";
    echo "<p><strong>Nombre:</strong> " . htmlspecialchars($_SESSION['nombre']) . "</p>";
    echo "<p><strong>Correo:</strong> " . htmlspecialchars($_SESSION['correo']) . "</p>";
    echo "<p><strong>Valoración:</strong> " . htmlspecialchars($_SESSION['valoracion']) . "</p>";
    echo "<p><strong>Comentarios:</strong> " . nl2br(htmlspecialchars($_SESSION['comentarios'])) . "</p>";
}
?>

</body>
</html>
