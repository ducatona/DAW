<?php
	$n=2;
	$primo=true;
	for ($i=2;$i<$n;$i++){
		//echo $i."<br>";
		if ($n%$i==0){
			$primo=false;
			break;
		}  
	}
	if ($primo && $n!=1) echo $n." es número primo.<br>";
	else echo $n." no es número primo.<br>";
?>		
	