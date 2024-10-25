<?php
	$distancia=40;
	$estancia=8;
	define ("PKM",2.5);
	define ("PEST",10);
	$pvp=2*$distancia*PKM+$estancia*PEST;
	if ($estancia>7 && $distancia>800) 
		$pvp=0.70*$pvp;
	if ($distancia<50)
		$pvp=1.10*$pvp;
	echo "Su viaje de $estancia días a $distancia km. tiene un coste total de $pvp €.";
?>		
	