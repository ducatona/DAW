<?php
	for ($i=100;$i<999;$i++){
		$centena = (int)($i/100);
		$decena = (int)(($i%100)/10);
		$unidad = $i%10;
		$suma=$unidad+$decena+$centena;
		$producto=$unidad*$decena*$centena;
		if ($suma==$producto)
			echo $i."<br>";
	}
?>		
	