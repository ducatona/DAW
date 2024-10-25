<?php
	$numero = 0;
	$numero2 = 1;
	echo $numero."<br>";
	$i=0;
	while ($numero2 < 200) {
		echo $numero2."<br>";
		$numero2 += $numero;
		$numero = $numero2 - $numero;
		$i++;
	}
	echo "<br> son $i términos";
?>