//Author: Adrián Peña Carnero :)

//Hemos añadido defer por lo cual, no utilizaremos el window.onload


//cogemos el elemento y le ponemos nuestro nombre
document.getElementById('cambiaNombre').innerHTML = 'Adrian Peña Mola ;)';

//seleccion elementos 
let divs = document.querySelectorAll('div');
let btnReseteo = document.getElementById('btnResetear');
let salida = document.getElementById('div_salida');
btnReseteo.addEventListener('click', reseteoBtn)
//añadimos eventos
for (let i = 0; i < divs.length; i++) {

    if(divs[i].id !== "container" ){
        divs[i].addEventListener('click', manejadorClick);
        divs[i].addEventListener('mouseover', manejadorOver)
    }
 
}



/*

Funciones para cada evento asignado

*/

function manejadorClick(e) {
    e.stopPropagation();
    let color = document.getElementById('inColor').value;
    e.target.style.backgroundColor = color;



}
function reseteoBtn() {
    for (let i = 0; i < divs.length; i++) {
        let colordSerie = divs[i].id.split('_')[1];
        divs[i].style.backgroundColor = colordSerie;
    }
}
function manejadorOver(e) {
    e.stopPropagation();
    let colorP = e.target.id.split('_')[1];
    salida.style.backgroundColor = colorP;

}








