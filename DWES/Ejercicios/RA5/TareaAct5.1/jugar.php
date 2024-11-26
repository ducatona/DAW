<?php
session_start();

if (!isset($_SESSION['numero'])) {
    $_SESSION['numero'] = generarNumeroRamdon(100);
    $_SESSION['intentos'] = 0;
}

$mensaje = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (isset($_POST['numero'])) {
        $intento = intval($_POST['numero']);
        $_SESSION['intentos']++;

        if ($intento > $_SESSION['numero']) {
            $mensaje = "El número es menor.";
        } elseif ($intento < $_SESSION['numero']) {
            $mensaje = "El número es mayor.";
        } else {
            $mensaje = "¡Felicidades! Adivinaste el número en " . $_SESSION['intentos'] . " intentos.";
            session_destroy(); // Finalizar la sesión para un nuevo juego
        }
    }
}

function generarNumeroRamdon($n)
{
    return rand(1, $n); // Devolver el número generado
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego Adivinanza</title>
</head>

<body>
    <h1>Juego: Adivina el Número</h1>

    <?php if (!isset($_SESSION['numero'])): ?>
        <p>El juego ha finalizado. <a href="jugar.php">Inicia un nuevo juego</a>.</p>
    <?php else: ?>
        <p>Estoy pensando en un número entre 1 y 100. ¿Puedes adivinar cuál es?</p>
        <form action="" method="post">
            <label for="numero">Introduce tu número:</label><br><br>
            <input type="number" name="numero" id="numero" required min="1" max="100">
            <br><br>
            <input type="submit" value="Probar">
        </form>

        <p><?= htmlspecialchars($mensaje) ?></p>
        <p>Número de intentos: <?= $_SESSION['intentos'] ?></p>
    <?php endif; ?>

    <!-- Descomenta esta línea para ver el número generado durante pruebas -->
    <p>Número generado para pruebas: <?= $_SESSION['numero'] ?></p>
</body>

</html>
