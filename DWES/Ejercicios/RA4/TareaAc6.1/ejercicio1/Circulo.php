<?php

class Circulo{


    private $radio;




    public function __construct($radio){
        $this->radio= $radio;
    }


    public function setRadio($radio){
        $this->radio = $radio;
    }


    public function getRadio(){

       return $this->radio;
    }


    public function __get($name){
       return  $this->$name;
    }

    public function __set($name, $value){
        $this->$name = $value;
    }



}



?>