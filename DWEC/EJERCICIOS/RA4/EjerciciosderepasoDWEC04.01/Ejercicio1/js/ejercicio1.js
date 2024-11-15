// window.onload = principal;

// function principal()
// {
//     document.getElementById("miBoton").onclick = manejadorClick;
// }

// function manejadorClick()
// {
//     document.getElementById("salida").innerHTML = "Has escrito: " + document.getElementById("entrada").value;
// }


// Ejercicio 1
// A partir del siguiente array:
// var palabras = [“botella”,”lata”,”seta”,”androide”,”minuto”];
// Ordena alfabéticamente sus elementos utilizando un método designado para ello, y muestra el
// resultado por pantalla.


//array
var palabras = ['botella', 'lata', 'seta', 'androide', 'minuto'];

//ordenamos con .sort()
palabras.sort();

//imprimimos con un for of de manera ordenada
for (const element of palabras) {

    console.log(element);

}
