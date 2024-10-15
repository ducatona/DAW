<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Programa desglose dinerot</title>
</head>

<body>




    <?php

$cantidadDisponible = 67;
$billetes = [10, 5];

$monedas = [1];


$resultadoBilletes = [];
$resultadoMonedas = [];


//Desglose de billetes
foreach($billetes as $billete){
    while($cantidadDisponible >= $billete){

        if(isset($resultadoBilletes[$billete])){
            $resultadoBilletes[$billete]++;
        }else{
            $resultadoBilletes[$billete] = 1;
        }

        $cantidadDisponible -= $billete;
    }

}

    //Desglose monedas


    foreach($monedas as $moneda){
        while($cantidadDisponible >= $moneda){
            if(isset($resultadoMonedas[$moneda])){
                $resultadoMonedas[$moneda]++;
            }else{

                $resultadoMonedas[$moneda] = 1;
            }


            $cantidadDisponible -= $moneda;
        }

    }

 
 foreach ($resultadoBilletes as $billete => $cantidad) {
    echo "Desglose de $billete euros: $cantidad<br>";
}


foreach ($resultadoMonedas as $moneda => $cantidad) {
    echo "Desglose de $moneda euros: $cantidad<br>";
}

    



    ?>

</body>

</html>