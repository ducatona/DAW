<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php


    function calcularPrecioViaje($distancia, $diasEstancia)
    {
        $precioPorKm = 2.5; // Precio por kilómetro
        $precioPorDia = 10;  // Precio por día de estancia

        // Cálculo del costo base
        $costoViaje = $distancia * $precioPorKm; // Costo del viaje de ida y vuelta
        $costoEstancia = $diasEstancia * $precioPorDia; // Costo de la estancia

        // Aplicar descuentos y recargos
        if ($diasEstancia > 7 && $distancia > 800) {
            $costoViaje *= 0.7; // 30% de descuento
        } elseif ($distancia < 50) {
            $costoViaje *= 1.1; // 10% de recargo
        }

        // Costo total
        $costoTotal = $costoViaje + $costoEstancia;

        return $costoTotal;
    }


    ?>
</body>

</html>