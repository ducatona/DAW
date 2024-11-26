

<?php


require_once 'Encendible.php';


class Bombilla implements Encendible
{



    private $horasDeVida;



    public function __construct($horasDeVida)
    {
        $this->horasDeVida = $horasDeVida;
    }



    public function encender() {

        if($this->horasDeVida>0){

            $this->horasDeVida -= 2;
            echo "Horas de vida Faltantes" . $this->horasDeVida;
        }else {
            echo "no le quedan horas de vida";
        }

    }

    public function apagar() {}
}











?>