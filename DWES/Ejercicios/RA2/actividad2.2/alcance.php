<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alcande de las variables en PHP</title>
</head>
<body>

<?php


//Ejercicio a) apartado 1 : ¿Puedes utilizar la instrucción print con varios valores?, por ejemplo:


$a = 1;
$b = 'a';
//Separado por punto si se puede , por coma no.

print ($a.$b); 
//apartado 2 : ¿Puedes utilizar instrucción print sin paréntesis?:
print $a.$b;

//Si se puede utilizar sin parentesis


//apartado 3: ¿Qué otra forma habría de concatenar dos cadenas? 


//podemos concatenar con . con + , podemos imprimir la informacion con el echo.


// Incremento y decremento: ++ y --.
// Estos operadores incrementan o decrementan el valor del operando al que se aplican.
// Si se utilizan junto a una expresión de asignación, modifican el operando antes o
// después de la asignación en función de su posición (antes o después) con respecto al
// operando. Por ejemplo:
// $a = 5; $b = ++$a; ¿Qué valores tienen ahora $a y $b?
// $a = 5; $b = $a++; ¿Qué valores tienen ahora $a y $b?
// Saca conclusiones. 

$a = 5; 
$b = ++$a; 


echo $a;
echo $b;
$a = 5;
 $b = $a++;

echo $a;
echo $b;

//b en el segundo caso se queda en 5 porque se pasa el valor de a primero y luego se incrementa a;



// c)Codifica un programa llamado alcance.php que ejecute el ejemplo relativo al epígrafe
// “Ámbito de las variables” de los apuntes. (Cuidado con las comillas!!!) 



function PruebaSinGlobal(){
    $var++;
    echo "Prueba sin global. \$var: ".$var."<br>";
    }
    function PruebaConGlobal(){
    global $var;
    $var++;
    echo "Prueba con global. \$var: ".$var."<br>";
    }
    function PruebaConGlobals(){
    $GLOBALS["var"]++;
    echo "Prueba con GLOBALS. \$var: ".$GLOBALS["var"]."<br>";
    }
    $var=20; //variable de prueba
    PruebaSinGlobal();
    print "\$var=".$var."<br>";
    PruebaConGlobal();
    print "\$var=".$var."<br>";
    PruebaConGlobals();
    print "\$var=".$var."<br>";



?>


    
</body>
</html>