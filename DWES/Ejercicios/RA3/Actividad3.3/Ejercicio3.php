<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


<?php


function factorial($numero){


if(!is_int($numero) || $numero < 0){    
    return -1;
}
$factorial = 1;

for($i = $numero;$i >= 1; $i--){
    
    
    $factorial*$i;


    


}
return $factorial;



}

?>
    
</body>
</html>