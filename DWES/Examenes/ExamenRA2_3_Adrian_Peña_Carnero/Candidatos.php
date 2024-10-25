<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Parte 3: Arrays en PHP (30 minutos)
        Ejercicio 3.1: Gestión de candidatos en espera
    </title>
</head>

<body>


    <?php
    /*
Ejercicio 3.1: Gestión de candidatos en espera  
Situación:  
El equipo de "HR Solutions" tiene una lista de candidatos que están en espera para ser llamados a entrevistas. Necesitan gestionar esta lista de manera eficiente.  
Tarea:  
1. Crea un archivo llamado `candidatos.php`. Dentro de este archivo:  
   - Crea un array llamado `$candidatosEnEspera` con los siguientes nombres: "Carlos", "Sofía", "Andrés", "María", "Daniel".
   - Un nuevo candidato, "Isabel", se une a la lista de espera. Agrégalo al inicio del array.
   - Muestra el total de candidatos en espera.
   - Elimina el primer candidato de la lista (el que ya fue entrevistado) y muestra nuevamente la lista completa en pantalla.
    */



    echo "<h1>Ejercicio 3.1: Gestión de candidatos en espera  </h1>";

    //creamos el array llamado candidatosEnEspera y le pasamos los nombres
    $candidatosEnEspera = ["Carlos", "Sofía", "Andrés", "María", "Daniel"];

    //utilizamos el metodo de array para añadir a Isabel en la primera posicion
    array_unshift($candidatosEnEspera, "Isabel");
    //mostramos el TOTAL(numero) de candidatos en espera 
    echo "Total de candidatos en espera: " . count($candidatosEnEspera) . "\n" . "<br>";

    //Eliminamos el primer candidato(Como añadimos a Isabel anteriormente es la que va a ser Eliminada).
    array_shift($candidatosEnEspera);




    //Una vez eliminado el primer candidato actualizamos y mostramos los nombres de los candidatos en espera.    
    echo "Lista de candidatos en espera actualizada:\n";
    foreach ($candidatosEnEspera as $candidato) {
        echo $candidato . "\n";
    }



    /*
Situación:  
El equipo de administración quiere llevar un control del inventario de equipos de oficina, con los nombres de los productos y sus cantidades disponibles.  
Tarea:  
1. En el mismo archivo `candidatos.php`, crea un array asociativo llamado `$inventario` con los siguientes productos y cantidades:
   - "Impresora" => 5
   - "Escritorio" => 12
   - "Silla" => 20
   - "Teléfono" => 8
2. Muestra cada producto con su cantidad en pantalla.  
3. Calcula y muestra el total de equipos disponibles (sumando todas las cantidades).
    */




    echo "<h2>Ejercicio 3.2: Inventario de equipos de oficina</h2>";
    //creamos el array asociativo y le añadimos los productos con las cantidades
    $inventario = [
        "Impresora" => 5,
        "Escritorio" => 12,
        "Silla" => 20,
        "Teléfono" => 8
    ];


    //Mostramos el producto y la cantidad por pantalla  
    foreach ($inventario as $i => $valor) {
        echo "<li>" . htmlspecialchars($i) . "     " . $valor . "</li>";
    }


    //con la funcion del array sum podemos sumar todas las cantidades del inventario y sacar el total de equipos.
    $totalEquipos = array_sum($inventario);
    echo "\n Total de equipos disponibles: " . $totalEquipos . "\n";
    ?>


</body>

</html>