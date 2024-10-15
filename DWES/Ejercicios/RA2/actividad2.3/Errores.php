<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Errores</title>
</head>
<body>



<?php
$x = -1;
$y = 9;
$suma = $x + $y;
print ("El valor de x es <i>$x</i>");

print("El valor de y es <i>$y</i><br/>");
print("La suma es <b><i>$suma</i></b><br/>");
?>




<!-- 1. ;  final de codigo
2. falta etiqueta de cerrado <i>
3. falta ; linea debajo de la variable $suma;
4. Falta cierre de comillas
5. La etiqueta de <br> no puede ir ahi suelta;
6. Falta cierre parentesis en el segundo print;
7. x e y estan sin el $ delante por ende no son variables detectables por PHP. -->


</body>
</html>