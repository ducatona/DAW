<!-- Serie de números de Fibonacci de los números menores de 200, usando un bucle while. -->

<?php
	$num1 = 0;
    $num2 = 1;
  
	echo $num1."<br>";
	echo $num2."<br>";
    while ($num1 + $num2 < 200) {
        $suma = $num1 + $num2;
        $num1 = $num2;
        $num2 = $suma;      
        echo $suma. "<br>";
    }
?>