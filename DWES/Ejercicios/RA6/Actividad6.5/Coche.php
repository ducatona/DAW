<?php

require_once 'Encendible.php';

class Coche implements Encendible
{

    private $gasolina;
    private $bateria;

    private $estado;



    public function __construct()
    {
        $this->gasolina = 0;
        $this->bateria = 10;
        $this->estado = "apagado";
    }


    public function encender()
    {

        if ($this->estado === "encendido") {
            echo "el coche ya esta encendido";
        } else if ($this->gasolina > 0 && $this->bateria > 0) {
            $this->gasolina--;
            $this->bateria--;
            $this->estado === "encendido";

            echo "el coche ya esta encendido combustible: " . $this->gasolina . "bateria restante" . $this->bateria;
        }
    }

    public function apagar()
    {


        if ($this->estado === "encendido") {
            $this->estado === "apagado";
        } else {
            echo "el coche ya esta apagado";
        }
    }




    public function repostar($gasolina)
    {
        $this->gasolina += $gasolina;
    }
}
