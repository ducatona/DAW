<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Piedra, Papel o Tijera</title>
</head>
<body>
    <h1>Piedra, Papel o Tijera</h1>
    <form action="game.php" method="post">
        <label for="rounds">Selecciona el número de rondas:</label>
        <select name="rounds" id="rounds">
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
        </select>
        <input type="submit" value="Comenzar">
    </form>
</body>
</html>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $rounds = isset($_POST['rounds']) ? (int)$_POST['rounds'] : (int)$_POST['total_rounds'];
    $player_choice = isset($_POST['choice']) ? $_POST['choice'] : null;
    $player_wins = isset($_POST['player_wins']) ? (int)$_POST['player_wins'] : 0;
    $machine_wins = isset($_POST['machine_wins']) ? (int)$_POST['machine_wins'] : 0;
    $current_round = isset($_POST['current_round']) ? (int)$_POST['current_round'] : 1;
    $history = isset($_POST['history']) ? json_decode($_POST['history'], true) : [];

    $choices = ['piedra', 'papel', 'tijera'];
    $machine_choice = $choices[array_rand($choices)];

    if ($player_choice) {
        if ($player_choice == $machine_choice) {
            $result = 'Empate';
        } elseif (
            ($player_choice == 'piedra' && $machine_choice == 'tijera') ||
            ($player_choice == 'papel' && $machine_choice == 'piedra') ||
            ($player_choice == 'tijera' && $machine_choice == 'papel')
        ) {
            $result = 'Jugador';
            $player_wins++;
        } else {
            $result = 'Máquina';
            $machine_wins++;
        }

        $history[] = [
            'round' => $current_round,
            'player_choice' => $player_choice,
            'machine_choice' => $machine_choice,
            'result' => $result
        ];

        $current_round++;
    }

    if ($current_round > $rounds) {
        $game_over = true;
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Piedra, Papel o Tijera</title>
</head>
<body>
    <h1>Piedra, Papel o Tijera</h1>

    <?php if (isset($game_over) && $game_over): ?>
        <h2>Resultado Final</h2>
        <p>Jugador: <?= $player_wins ?> victorias</p>
        <p>Máquina: <?= $machine_wins ?> victorias</p>
        <p><?= $player_wins > $machine_wins ? '¡El jugador gana!' : ($player_wins < $machine_wins ? '¡La máquina gana!' : '¡Es un empate!') ?></p>
        <form action="index.php" method="post">
            <input type="submit" value="Jugar de nuevo">
        </form>
    <?php else: ?>
        <h2>Ronda <?= $current_round ?> de <?= $rounds ?></h2>
        <form action="game.php" method="post">
            <input type="hidden" name="total_rounds" value="<?= $rounds ?>">
            <input type="hidden" name="player_wins" value="<?= $player_wins ?>">
            <input type="hidden" name="machine_wins" value="<?= $machine_wins ?>">
            <input type="hidden" name="current_round" value="<?= $current_round ?>">
            <input type="hidden" name="history" value='<?= json_encode($history) ?>'>
            <label for="choice">Elige tu jugada:</label>
            <select name="choice" id="choice">
                <option value="piedra">Piedra</option>
                <option value="papel">Papel</option>
                <option value="tijera">Tijera</option>
            </select>
            <input type="submit" value="Jugar">
        </form>

        <?php if ($player_choice): ?>
            <h3>Resultado de la ronda <?= $current_round - 1 ?>:</h3>
            <p>Jugador: <img src="<?= $player_choice ?>.gif" alt="<?= $player_choice ?>"></p>
            <p>Máquina: <img src="<?= $machine_choice ?>.gif" alt="<?= $machine_choice ?>"></p>
            <p>Ganador: <?= $result ?></p>
        <?php endif; ?>

        <h3>Historial de jugadas:</h3>
        <ul>
            <?php foreach ($history as $round): ?>
                <li>Ronda <?= $round['round'] ?>: Jugador - <img src="<?= $round['player_choice'] ?>.gif" alt="<?= $round['player_choice'] ?>">, Máquina - <img src="<?= $round['machine_choice'] ?>.gif" alt="<?= $round['machine_choice'] ?>">, Ganador: <?= $round['result'] ?></li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</body>
</html>
