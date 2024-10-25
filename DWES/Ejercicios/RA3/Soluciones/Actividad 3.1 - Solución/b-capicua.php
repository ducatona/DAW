<?php
	$numero = 313;
	$unidad = $numero%10;
	$centena = floor($numero/100);
	if ($unidad == $centena)
		echo "El número $numero es capicúa<br />";
	else
		echo "El número $numero NO es capicúa<br />";

	//Capicúa genérico
	$numero = 4774;
	$inverso = 0;
	$aux = $numero;
	while ( $aux != 0)
	{
		$resto = $aux % 10;
		$inverso = $inverso * 10 + $resto;
		$aux = (int)($aux / 10);
	}
	if ( $numero == $inverso )
		echo "El número $numero es capicúa<br />";
	else
		echo "El número $numero NO es capicúa<br />";
?>
