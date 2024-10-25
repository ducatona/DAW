window.onload = principal;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    let entrada = document.getElementById("entrada").value;
    let salida = document.getElementById("salida");

    if(entrada.trim() ===''){
        salida.innerText = "Por favor introduce un valor";
        return;
    }

    if( esNumero(entrada)  ){
        if(esPositivo(entrada)){
            if(esEntero(entrada)){
                salida.innerText = `${entrada} es un número entero y positivo`;
            } else  {
                salida.innerText = `${entrada} es un número entero pero no positivo`;
            }

        } else {
            salida.innerText = `${entrada} es un número pero no es entero`;
            
        }
    }else{
        salida.innerText = `${entrada} no es un número es una cadena de texto`;
    }

}





function esNumero(valor){
    return !isNaN(valor);

}

function esEntero(valor){
    return Number.isInteger(parseFloat(valor));
}

function  esPositivo(n){
    return parseFloat(n)>0;

}