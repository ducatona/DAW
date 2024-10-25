window.onload = principal;

let miVentana;
let miIntervalo;

function principal(){
    miVentana = window.open('./241014_propuesta_69_reloj.html','','width=200,height=200');
    miIntervalo = setInterval(manejadorIntervalo,100);
}



function manejadorIntervalo(){

 miVentana.moveBy(10,10);




}