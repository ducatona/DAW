<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Consultas de Monstruos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1e1e1e;
            color: #e0e0e0;
            margin: 0;
            padding: 20px;
        }
        h3 {
            color: #ff4081;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: #2d2d2d;
        }
        th, td {
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #444;
            color: #ff4081;
        }
        td {
            border-bottom: 1px solid #444;
        }
        tr:hover td {
            background-color: #333;
        }
    </style>
</head>
<body>


<h1>BIENVENIDO A LAS CONSULTAS MÁS TENEBROSAS DE DAW. LEE CON CUIDADO</h1>
<img src="img/imagenTenebrosa.jpg" alt="ImagenTenebrosa">

<?php
// Conexión a la base de datos
$host = 'localhost';
$db = 'Monstruosa';
$user = 'root'; // Cambia por tu usuario de base de datos
$pass = ''; // Cambia por tu contraseña de base de datos

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Función para ejecutar la consulta y mostrar resultados
    function ejecutarConsulta($conn, $consulta, $enunciado)
    {
        echo "<h3>$enunciado</h3>";
        $stmt = $conn->query($consulta);
        $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($resultados) {
            echo "<table border='1'>";
            echo "<tr>";
            // Imprimir encabezados de columnas
            foreach (array_keys($resultados[0]) as $columna) {
                echo "<th>$columna</th>";
            }
            echo "</tr>";
            // Imprimir filas de resultados
            foreach ($resultados as $fila) {
                echo "<tr>";
                foreach ($fila as $valor) {
                    echo "<td>$valor</td>";
                }
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "Sin resultados.<br>";
        }
        echo "<br>";
    }



    $consultas = [
        "consulta1" => "SELECT nombre, primera_aparicion FROM monstruos WHERE primera_aparicion < 1900;",
        "consulta2" => "SELECT monstruos.nombre, peliculas.titulo FROM monstruos 
                        INNER JOIN peliculas ON monstruos.id_monstruo = peliculas.id_monstruo 
                        WHERE peliculas.actor_principal = 'Boris Karloff';",
        "consulta3" => "SELECT nombre FROM monstruos;",
        "consulta4" => "SELECT nombre, primera_aparicion FROM monstruos;",
        "consulta5" => "SELECT titulo FROM peliculas WHERE director = 'James Whale';",
        "consulta6" => "SELECT titulo FROM libros INNER JOIN monstruos 
                        ON libros.id_monstruo = monstruos.id_monstruo 
                        WHERE monstruos.nombre = 'Drácula';",
        "consulta7" => "SELECT nombre FROM monstruos WHERE fecha_muerte IS NULL;",
        "consulta8" => "SELECT titulo FROM series_tv 
                        INNER JOIN monstruos ON series_tv.id_monstruo = monstruos.id_monstruo 
                        WHERE monstruos.nombre = 'Chucky';",
        "consulta9" => "SELECT titulo FROM peliculas WHERE actor_principal = 'Boris Karloff';",
        "consulta10" => "SELECT fecha_muerte FROM monstruos WHERE nombre = 'Frankenstein';",
        "consulta11" => "SELECT titulo FROM libros;",
        "consulta12" => "SELECT primera_aparicion FROM monstruos WHERE nombre = 'Hombre Lobo';",
        "consulta13" => "SELECT peliculas.titulo, peliculas.director FROM monstruos 
                         INNER JOIN peliculas ON monstruos.id_monstruo = peliculas.id_monstruo 
                         WHERE monstruos.fecha_muerte IS NOT NULL;",
        "consulta14" => "SELECT COUNT(*) FROM libros 
                         INNER JOIN monstruos ON libros.id_monstruo = monstruos.id_monstruo 
                         WHERE monstruos.nombre = 'Frankenstein';",
        "consulta15" => "SELECT monstruos.nombre FROM monstruos 
                         INNER JOIN peliculas ON monstruos.id_monstruo = peliculas.id_monstruo 
                         GROUP BY nombre HAVING COUNT(peliculas.id_pelicula) > 1;",
        "consulta16" => "SELECT M.nombre, L.titulo FROM Monstruos M 
                         INNER JOIN Libros L ON M.id_monstruo = L.id_monstruo;",
        "consulta17" => "SELECT st.titulo, m.nombre FROM series_tv AS st 
                         INNER JOIN monstruos AS m ON st.id_monstruo = m.id_monstruo 
                         WHERE m.nombre = 'Drácula';",
        "consulta18" => "SELECT m.nombre, m.primera_aparicion FROM monstruos AS m 
                         INNER JOIN series_tv AS st ON st.id_monstruo = m.id_monstruo;",
        "consulta19" => "SELECT titulo FROM peliculas WHERE actor_principal != 'Lon Chaney Jr.';",
        "consulta20" => "SELECT m.nombre FROM libros l 
                         INNER JOIN monstruos m ON m.id_monstruo = l.id_monstruo 
                         INNER JOIN series_tv st ON m.id_monstruo = st.id_monstruo 
                         GROUP BY m.nombre;"
    ];


    // Ejecutar cada consulta
    foreach ($consultas as $enunciado => $consulta) {
        ejecutarConsulta($conn, $consulta, $enunciado);
    }
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}

?>
</body>
</html>