<?php

/**
 * 
 * @param string $nombreBd Nombre de la base de datos
 * @param string $usuarioBd Nombre de usuario de la base de datos
 * @param string $contraseñaBd Contraseña del usuario de la base de datos
 * @return PDO|null Retorna un objeto PDO con la conexión a la base de datos o null en caso de error
 */
function conexionPDO($nombreBd, $usuarioBd, $contraseñaBd)
{
    $dsn = "mysql:host=localhost;dbname=$nombreBd"; // DSN con la interpolación de la variable
    try {
        $connection = new PDO($dsn, $usuarioBd, $contraseñaBd);
        echo 'Conexión establecida correctamente';
        return $connection;
    } catch (PDOException $e) {
        echo match ($e->getCode()) {
            1049 => 'Base de datos no encontrada',
            1045 => 'Acceso denegado',
            2002 => 'Conexión rechazada',
            default => 'Error desconocido: ' . $e->getMessage(),
        };
        return null; // Devuelve null si hay un error
    }
}



function getConexion()
{
    // Configuración de la base de datos
    $host = 'localhost';
    $nombreBd = 'dwes_01_nba'; // Cambia esto por el nombre de tu base de datos
    $usuarioBd = 'root';    // Cambia esto por tu usuario
    $contraseñaBd = ''; // Cambia esto por tu contraseña

    // DSN para la conexión
    $dsn = "mysql:host=$host;dbname=$nombreBd;charset=utf8mb4";

    try {
        // Crear una nueva instancia de PDO
        $conexion = new PDO($dsn, $usuarioBd, $contraseñaBd);
        // Configurar atributos para manejar errores
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "conexion establecida correctamente";
        return $conexion;
    } catch (PDOException $e) {
        // Manejar el error y mostrar un mensaje específico según el código
        echo match ($e->getCode()) {
            1049 => 'Base de datos no encontrada.',
            1045 => 'Credenciales incorrectas.',
            2002 => 'No se pudo conectar al servidor.',
            default => 'Error desconocido: ' . $e->getMessage(),
        };
        print("error"); // Retorna null si ocurre un error
    }
}



function getEquipos()
{


    $nombres_equipos = [];
    $conexion = getConexion();
    $consulta = $conexion->query("SELECT nombre from equipos");




    $nombres_equipos = $consulta->fetchAll(PDO::FETCH_COLUMN);

    echo "<h1>Nombre de los equipos de la NBA</h1>";

    visualizarContenidoOpciones($nombres_equipos);
}



function visualizarContenidoOpciones($contenido)
{




    foreach ($contenido as $c) {
        echo "<option value=\"$c\">" . htmlspecialchars($c) . "</option>";
    }
}


function visualizarContenido($datos)
{
    echo "<table border=1>";
    echo "<tr><th>Nombre</th><th>Peso</th></tr>";

    foreach ($datos as $d) {
        // Mostrar el nombre del jugador
        echo "<tr>";

        // Campo oculto para el código del jugador
        echo "<input type='hidden' name='jugadores[]' value='{$d['codigo']}'>";

        // Nombre del jugador
        echo "<td>" . htmlspecialchars($d['nombre']) . "</td>";

        // Campo para editar el peso
        echo "<td><input type='number' name='peso[]' value='" . htmlspecialchars($d['peso']) . "' required> kg</td>";

        echo "</tr>";
    }

    echo "</table>";
}
