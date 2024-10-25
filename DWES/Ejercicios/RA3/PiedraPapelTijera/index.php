<?php
// Inicializa las variables
$rondasRestantes = 5;
$resultados = [];
$victoriasJugador = 0;
$victoriasMaquina = 0;

// Manejo del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recupera los valores previos si existen
    $rondasRestantes = $_POST['rondas_restantes'] ?? $rondasRestantes;
    $victoriasJugador = $_POST['victorias_jugador'] ?? $victoriasJugador;
    $victoriasMaquina = $_POST['victorias_maquina'] ?? $victoriasMaquina;

    if (isset($_POST['jugada'])) {
        $jugadaJugador = $_POST['jugada'];
        $jugadaMaquina = elegirMaquina();
        $ganador = determinarGanador($jugadaJugador, $jugadaMaquina);

        // Guarda el resultado de la ronda
        $resultados[] = [
            'jugador' => $jugadaJugador,
            'maquina' => $jugadaMaquina,
            'ganador' => $ganador,
        ];

        // Resta una ronda
        $rondasRestantes--;

        // Actualiza los contadores de victorias
        if ($ganador === 'Jugador') {
            $victoriasJugador++;
        } elseif ($ganador === 'Máquina') {
            $victoriasMaquina++;
        }
    }
}

// Función para la elección de la máquina
function elegirMaquina()
{
    $opciones = ['piedra', 'papel', 'tijera'];
    return $opciones[rand(0, 2)];
}

// Función para determinar el ganador
function determinarGanador($jugador, $maquina)
{
    if ($jugador === $maquina) {
        return 'Empate';
    } elseif (
        ($jugador === 'piedra' && $maquina === 'tijera') ||
        ($jugador === 'papel' && $maquina === 'piedra') ||
        ($jugador === 'tijera' && $maquina === 'papel')
    ) {
        return 'Jugador';
    } else {
        return 'Máquina';
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Piedra, Papel o Tijera</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
            text-align: center;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
        }

        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            display: inline-block;
        }

        label {
            display: block;
            margin: 10px 0;
        }

        input[type="radio"] {
            margin-right: 10px;
        }

        button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #218838;
        }

        p {
            font-size: 18px;
            color: #555;
        }

        h2 {
            color: #c82333;
        }

        img {
            max-width: 100%; /* La imagen no excede el ancho del contenedor */
            height: auto; /* Mantiene la proporción de la imagen */
            display: block;
            margin: 10px auto; /* Centra la imagen */
            border: 2px solid #333; /* Añade un borde para visualizar mejor */
        }

        .img-container {
            max-width: 150px; /* Ajusta el tamaño máximo del contenedor */
            margin: 0 auto;
        }

        table {
            margin: 20px auto;
            border-collapse: collapse;
            width: 80%;
            background-color: #fff;
        }

        th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: center;
        }

        th {
            background-color: #28a745;
            color: white;
        }
    </style>
</head>
<body>

<div>
    <h1>Piedra, Papel o Tijera</h1>

    <?php if ($rondasRestantes > 0): ?>
        <form method="post">
            <label>
                <input type="radio" name="jugada" value="piedra" required>Piedra
            </label>
            <label>
                <input type="radio" name="jugada" value="papel">Papel
            </label>
            <label>
                <input type="radio" name="jugada" value="tijera">Tijera
            </label>
            <input type="hidden" name="rondas_restantes" value="<?= $rondasRestantes ?>">
            <input type="hidden" name="victorias_jugador" value="<?= $victoriasJugador ?>">
            <input type="hidden" name="victorias_maquina" value="<?= $victoriasMaquina ?>">
            <button type="submit">Jugar</button>
        </form>
    <?php else: ?>
        <h2>Juego terminado</h2>
        <table>
            <tr>
                <th>Ronda</th>
                <th>Jugador</th>
                <th>Máquina</th>
                <th>Ganador</th>
            </tr>
            <?php foreach ($resultados as $indice => $resultado): ?>
                <tr>
                    <td><?= $indice + 1 ?></td>
                    <td>
                        <?= htmlspecialchars($resultado['jugador']) ?>
                        <img src="<?= htmlspecialchars($resultado['jugador']) ?>.gif" alt="<?= htmlspecialchars($resultado['jugador']) ?>" style="width:50px; height:50px;">
                    </td>
                    <td>
                        <?= htmlspecialchars($resultado['maquina']) ?>
                        <img src="<?= htmlspecialchars($resultado['maquina']) ?>.gif" alt="<?= htmlspecialchars($resultado['maquina']) ?>" style="width:50px; height:50px;">
                    </td>
                    <td><?= htmlspecialchars($resultado['ganador']) ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
    <?php endif; ?>

    <h3>Rondas restantes: <?= $rondasRestantes ?></h3>
    <h3>Victorias del Jugador: <?= $victoriasJugador ?></h3>
    <h3>Victorias de la Máquina: <?= $victoriasMaquina ?></h3>
</div>

<div class="img-container">
    <img src="piedra.gif" alt="Piedra">
    <img src="papel.gif" alt="Papel">
    <img src="tijera.gif" alt="Tijera">
</div>

</body>
</html>
