<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado Clientes PHP</title>
</head>
<body>



<?php




$conexion = conexionPDO("tienda","super","super123");

if(isset($conexion)){
    echo "Conexion establecida con exito";


    $sql = "SELECT nombre,direccion,telefono from cliente";

    $result = $conexion->query($sql);

    if($result->rowCount()> 0){


        while($fila = $result->fetch(PDO::FETCH_ASSOC)){

            echo "Nombre" . " ". $fila["nombre"] . "<br>"; 
            echo "Direccion" ." ". $fila["direccion"] . "<br>";
            echo "telefono" ." " . $fila["telefono"] . "<br>";

        }

          
        }else{

            echo "No se han encontradi registros";
        }


        



}


/**
 * 
 * @param mixed $nombreBd
 * @param mixed $usuarioBd
 * @param mixed $contraseñaBd
 * @return PDO retorna un Objeto PDO con la conexion a la Base de datos.
 */
function conexionPDO($nombreBd, $usuarioBd, $contraseñaBd)
{
    return new PDO("mysql:host=localhost;dbname=$nombreBd", "$usuarioBd", "$contraseñaBd");
}



?>
    
</body>
</html>