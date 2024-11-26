<?php
session_start();

// Verificar si las variables de sesión están configuradas
if (!isset($_SESSION['nombre']) || !isset($_SESSION['correo']) || !isset($_SESSION['valoracion'])) {
    echo "<p>No hay datos de sesión disponibles. Por favor, completa el formulario primero.</p>";
    echo "<p><a href='formulario.php'>Volver al formulario</a></p>";
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conectado</title>
</head>
<body>
    <h1>Datos de Sesión</h1>

    <p><strong>Identificador de la sesión:</strong> <?php echo session_id(); ?></p>
    <p><strong>Nombre:</strong> <?php echo htmlspecialchars($_SESSION['nombre']); ?></p>
    <p><strong>Correo Electrónico:</strong> <?php echo htmlspecialchars($_SESSION['correo']); ?></p>
    <p><strong>Valoración:</strong> <?php echo htmlspecialchars($_SESSION['valoracion']); ?></p>
    <p><strong>Comentarios:</strong> <?php echo nl2br(htmlspecialchars($_SESSION['comentarios'] ?? '')); ?></p>

    <p><a href="formulario.php">Volver al formulario</a></p>
</body>
</html>
