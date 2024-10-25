<?php
	$numero = 100;
	while ($numero <= 999){
		$inverso = 0;
		$aux = $numero;
		while ( $aux != 0){
			$resto = $aux % 10;
			$inverso = $inverso * 10 + $resto;
			$aux = (int)($aux / 10);
		}
		if ( $numero == $inverso )
			echo "$numero, ";
		$numero++;
	}
?>
