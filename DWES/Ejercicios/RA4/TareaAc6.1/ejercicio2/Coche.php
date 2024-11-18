<?php



class Coche
{


    private $matricula;
    private $velocidad;


    public function __construct($matricula, $velocidad)
    {

        $this->matricula = $matricula;
        $this->velocidad = $velocidad;
    }


    public function __get($name)
    {
        return $this->$name;
    }

    public function __set($name, $value)
    {
        $this->$name = $value;
    }

    public function aceleraVelocidad($velocidad)
    {


        $this->velocidad += $velocidad;
        if ($this->velocidad > 120) {
            $this->velocidad = 120;
        }
    }

    public function deceleraVelocidad($velocidad)
    {
        $this->velocidad -= $velocidad;
        if ($this->velocidad < 0) {
            $this->velocidad = 0;
        }
    }
//Muestra datos
    public function __tostring()
    {
        return self::class . "La matricula " . $this->matricula . " " . "iba a una velovidad de ". $this->velocidad . "km/h";
    }
}
