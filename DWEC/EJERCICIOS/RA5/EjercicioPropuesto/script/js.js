/*Desarrolla un único manejador que permita que el color de la celda "td_1_1" se ponga de color XXX cuando se pase el ratón por encima y vuelva a ser
blanco cuando se salga el ratón de dicha celda*/

window.onload = principal;


function principal() {

    let elemento = document.getElementById("td_1_1");

    elemento.addEventListener("mouseover", manejadorCelda);
    elemento.addEventListener("mouseleave", manejadorCelda);
    elemento.addEventListener("click", manejadorCelda);



    let elementos = document.getElementsByTagName("td");

    for (let i = 0; i < elementos.length; i++) {

        elementos[i].addEventListener("mouseover", manejadorCelda);
        elementos[i].addEventListener("mouseleave", manejadorCelda);
        elementos[i].addEventListener("click", manejadorCelda);


    }


}


function manejadorCelda(e) {

    if (e.type === "mouseover") {
        this.className = "ratonEncima";
    } else if (e.type === "mouseleave") {
        this.className = "ratonFuera";
    } else if (e.type === "click") {
        this.className = "ratonPulsado";
    }





}