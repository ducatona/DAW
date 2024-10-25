<?php

// "HR Solutions" necesita un formulario en su portal para registrar a nuevos empleados en su sistema de recursos humanos.  
// Tarea:  
// 1. Crea un archivo llamado `registro.php` que contenga un formulario HTML con los siguientes campos:
//    - Nombre completo (campo de texto)
//    - Edad (campo de número)
//    - Correo electrónico (campo de texto)
//    - Botón de envío
// 2. Cuando el formulario se envíe, debe procesarse en el mismo archivo utilizando el método POST:
//    - Verifica si el correo tiene un formato válido.
//    - Verifica si la edad es un número positivo.
//    - Si todos los datos son válidos, muestra un mensaje de éxito con los datos ingresados. Si no, muestra un mensaje de error adecuado.


//verificamos si nos llega la informacion y la almacenamos en variables
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $email = $_POST['email'];
    //verificamos si cumplen con las reglas de validacion propuestas
    if (strpos($email, '@') !== false) {
        if (is_numeric($edad) && $edad > 0) {

            //si son correctas imprimimos las información.
            echo "<h2>Registro exitoso:</h2>";
            echo "Nombre: " . htmlspecialchars($nombre) . "<br>";
            echo "Edad: " . htmlspecialchars($edad) . "<br>";
            echo "Correo electrónico: " . htmlspecialchars($email) . "<br>";
        } else {
            //en caso de que meta un numero negativo
            echo "<p style='color: red;'>La edad debe ser un número positivo.</p>";
        }
    } else {

        //en caso de que no introduzca un @ en el correo.
        echo "<p style='color: red;'>Por favor, introduce un correo electrónico válido que contenga una arroba (@).</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parte 4: Formularios en PHP (30 minutos)
        Ejercicio 4.1: Registro de empleado nuevo
    </title>
</head>

<body>
    <h1>Registro de nuevo empleado</h1>
    <form action="registro.php" method="POST">
        <label for="nombre">Nombre completo:</label><br>
        <input type="text" id="nombre" name="nombre" required><br><br>

        <label for="edad">Edad:</label><br>
        <input type="number" id="edad" name="edad" required><br><br>

        <label for="email">Correo electrónico:</label><br>
        <input type="text" id="email" name="email" required><br><br>

        <input type="submit" value="Registrar">
    </form>
</body>

</html>