window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {


    let paises = ["Afganistán",
        "Albania",
        "Alemania",
        "Andorra",
        "Angola",
        "Antigua",
        "Barbuda"];


       let salida = document.getElementById("salida");
       
       
       
       
       salida = recorrerPaises(paises);
        





}

function recorrerPaises(paises){

    for (let i = 0; i < paises.length; i++) {
        
        return paises[i];
        
    }


}