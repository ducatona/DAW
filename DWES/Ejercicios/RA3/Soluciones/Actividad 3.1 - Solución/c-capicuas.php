<?php
	for ($i=100;$i<999;$i++){
		$centena=(int)($i/100);
		$unidad= $i%10;
		if ($centena==$unidad)
			echo $i."<br>";
	}
?>