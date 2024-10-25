<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Parte 2: Funciones en PHP (30 minutos)
        Ejercicio 2.1: Conversión de horas trabajadas a minutos
    </title>

</head>

<body>

    <?php

    /*
Ejercicio 2.1: Conversión de horas trabajadas a minutos
Situación:  
El equipo de "HR Solutions" quiere llevar un registro preciso del tiempo trabajado por los empleados, y para ello necesitan convertir las horas trabajadas a minutos.  
Tarea:  
1. Crea un archivo llamado `horas.php`. Dentro de este archivo:  
   - Define una función llamada `convertirHorasAMinutos($horas)` que reciba como parámetro una cantidad de horas y las convierta a minutos.
   - Usa esta función para convertir las siguientes horas de trabajo: 8 horas, 5.5 horas y 3.25 horas.
   - Muestra el resultado de cada conversión en pantalla.
*/

    /**
     * Summary of convertirHorasAMinutos
     * @param mixed $horas
     * @return float|int Funcion que transforma las horas a minutos.
     */
    function convertirHorasAMinutos($horas)
    {
        return $horas * 60;
    }
    echo "<h1>Ejercicio 2.1</h1>";
    echo "8 horas son " . convertirHorasAMinutos(8) . " minutos.<br>";
    echo "5.5 horas son " . convertirHorasAMinutos(5.5) . " minutos.<br>";
    echo "3.25 horas son " . convertirHorasAMinutos(3.25) . " minutos.<br>";



    /*
Ejercicio 2.2: Cálculo de salario semanal  
Situación:  
El equipo de RRHH necesita calcular el salario semanal de varios empleados. Cada uno tiene un número distinto de horas trabajadas.  
Tarea:  
1. En el mismo archivo `horas.php`, crea una función llamada `calcularSalarioSemanal($horasTrabajadas, $tarifaPorHora)` que reciba como parámetros el número de horas trabajadas en una semana y la tarifa por hora, y devuelva el salario total.  
   - Usa esta función para calcular el salario de los siguientes empleados:
     - Empleado 1: 40 horas trabajadas, tarifa de $15/hora.
     - Empleado 2: 35.5 horas trabajadas, tarifa de $18/hora.
     - Empleado 3: 45 horas trabajadas, tarifa de $20/hora.
   - Muestra los salarios calculados en pantalla.
  */
    /**
     * Summary of calcularSalarioSemanal
     * @param mixed $horasTrabajadas
     * @param mixed $tarifaPorHora
     * @return float|int Funcion que te calcula el salario semanal segun horas y tarifa por horas.
     */
    function calcularSalarioSemanal($horasTrabajadas, $tarifaPorHora)
    {
        return $salarioTotal = $horasTrabajadas * $tarifaPorHora;
    }

    echo "<h2>Ejercicio 2.2</h2>";
    //Empleado 1
    $empleado1 = calcularSalarioSemanal(40, 15);
    echo "El empleado numero 1 tiene un salario total de: " . $empleado1 . "<br>";
    //Empleado 2
    $empleado2 = calcularSalarioSemanal(35.5, 18);
    echo "El empleado numero 2 tiene un salario total de: " . $empleado2 . "<br>";
    //Empleado 3
    $empleado3 = calcularSalarioSemanal(45, 20);
    echo "El empleado numero 3 tiene un salario total de: " . $empleado3 . "<br>";
    ?>




</body>

</html>