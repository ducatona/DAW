<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parte 1: Comandos básicos de PHP (30 minutos)
        Ejercicio 1.1: Saludo personalizado según el día de la semana
    </title>
</head>

<body>





    <?php


    /*
Parte 1: Comandos básicos de PHP (30 minutos) 
Ejercicio 1.1: Saludo personalizado según el día de la semana  
Situación:  
Cuando un empleado ingresa al portal de "HR Solutions", debe recibir un saludo personalizado dependiendo del día de la semana y la hora del acceso.  
Tarea:  
1. Crea un archivo llamado `bienvenida.php`. Dentro de este archivo:  
   - Muestra tu nombre como desarrollador responsable.  
   - Muestra el día de la semana actual.  
   - Dependiendo del día, muestra un mensaje diferente:
     - Si es lunes, muestra "Feliz inicio de semana".
     - Si es viernes, muestra "¡Feliz viernes, prepárate para el fin de semana!".
     - Para el resto de los días, muestra "Que tengas un excelente día de trabajo".
   - Si es antes de las 12:00, añade al mensaje "Buenos días". Si es después, añade "Buenas tardes".
*/






    //Mostramos mi nombre como desarrollador responsable

    //guardamos mi nombre en una variable
    $nombre = "Adrián Peña Carnero";
    //lo concatenamos

    echo "Desarrollador responsable: " . $nombre . "<br>";

    //establecemos fechas
    $diaSemana = date('l'); // 'l' devuelve el nombre del día completo en inglés
    $horaActual = date('H'); // 'H' devuelve la hora en formato de 24 horas

    // Traducir el día de la semana al español
    $diasEspañol = [
        'Monday' => 'lunes',
        'Tuesday' => 'martes',
        'Wednesday' => 'miércoles',
        'Thursday' => 'jueves',
        'Friday' => 'viernes',
        'Saturday' => 'sábado',
        'Sunday' => 'domingo'
    ];

    //guardamos en un array nuevo la traducción.
    $diaTraducido = $diasEspañol[$diaSemana];

    // Mostrar el día de la semana en español lo traduzco como en el ejercicio de clase para transformar las fechas al español(no pide ningun idiomas).
    echo "Hoy es " . $diaTraducido . ".<br>";

    //mensaje segun dia
    if ($diaTraducido == 'lunes') {
        echo "Feliz inicio de semana.";
    } elseif ($diaTraducido == 'viernes') {
        echo "¡Feliz viernes, prepárate para el fin de semana!";
    } else {
        echo "Que tengas un excelente día de trabajo.";
    }

    // Utilizar una estructura condicional para mostrar un saludo
    if ($horaActual < 12) {
        echo " Buenos días.";
    } else {
        echo " Buenas tardes.";
    }

    
    ?>




</body>

</html>