window.onload = principal;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    //cogemos el ancho de la ventana actual
    const ancho = window.innerWidth;
    //cogemos el alto de la ventana actual
    const alto= window.innerHeight;
    //cogemos la salida
    let salida = document.getElementById("salida");

    //imprimimos los tamaños
    salida.innerText = `Tamaño de le ventana:${ancho} px de ancho ${alto} px de alto.`;




}