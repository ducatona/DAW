<?php


class Monedero{

    private $dinero;
    private static $numero_monederos = 0;


    public function __construct($dineroInicial){

     $this->dinero = $dineroInicial;
     self::$numero_monederos++;

    }


    public function __destruct(){
      self::$numero_monederos--;
    }


    public function meterDinero($dinero){

        $this->dinero += $dinero;

    }

    public function sacarDinero($dinero){

        if($this->dinero > 0){

            $this->dinero -= $dinero;


        }else{
             echo "no tienes demasiado dinero";
        }


    }

    public function consultarSaldo ($numero_monederos){

        return self::$numero_monederos;

    }



}















?>