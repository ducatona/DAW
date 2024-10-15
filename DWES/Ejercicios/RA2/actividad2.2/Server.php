<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables Impresas Server</title>
</head>
<body>
    


<?php

// d) Realiza un programa llamado server.php que muestre el valor de la variable
// superglobal $_SERVER en cada uno de los casos siguientes:
// $_SERVER['PHP_SELF']
// $_SERVER['SERVER_ADDR']
// $_SERVER['SERVER_NAME']
// $_SERVER['DOCUMENT_ROOT

echo $_SERVER['PHP_SELF'];
// echo $_SERVER['SERVER_ADDR']; //No me deja visualizarlo
echo $_SERVER['SERVER_NAME'];
echo $_SERVER['DOCUMENT_ROOT'];
echo $_SERVER['REMOTE_ADDR'];




?>
</body>
</html>