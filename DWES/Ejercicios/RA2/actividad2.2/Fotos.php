<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>imagenest</title>
</head>
<body>


<?php


print "<IMG SRC='logo.gif'>"; // muestra <IMG SRC='logo.gif’>
print "<IMG SRC=\"logo.gif\">"; //muestra <IMG SRC="logo.gif">
print '<IMG SRC="logo.gif">'; 















// h) Averigua la utilidad de las funciones isset() y empty(). ¿Entiendes bien el siguiente


//isset() esta funcion nos dice si existe y si su valor es diferente a nulo y empty() me dice si el valor esta vacio.

// ejemplo?
// <?php
$var = "";
// Se evalúa a true ya que $var está vacia
if (empty($var)) {
echo '$var es 0, cadena vacía, o no se encuentra definida en absoluto';
}
// Se evalúa como true ya que $var está definida
if (isset($var))
echo '$var está definida a pesar de que está vacía';
else
echo "NO EXISTE LA VARIABLE";












// ?> 






?>
    
</body>
</html>