window.onload = principal;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    document.getElementById("salida").innerHTML = "Has escrito: " + document.getElementById("entrada").value;
    muestraAlerts();
}

function muestraAlerts(){

    for (let i = 0; i < 10; i++) {
        alert("Mensaje" + i);
        
    }


}