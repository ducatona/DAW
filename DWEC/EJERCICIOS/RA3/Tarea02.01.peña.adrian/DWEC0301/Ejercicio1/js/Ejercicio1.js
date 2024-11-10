window.onload = principal;

function principal()
{
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick()
{
    let texto = document.getElementById("entrada").value;

    let textoSeparado = separaPalabras(texto, " "); // Separar las palabras
    let cadenaAlreves = ''; // Variable para almacenar el resultado

    // Invertir cada palabra usando giraPalabras
    for (let i = 0; i < textoSeparado.length; i++) {
        cadenaAlreves += giraPalabras(textoSeparado[i]) + ' '; // Añadir cada palabra invertida
    }

    let resultadoPalindromo = esPalindromo(texto.toLowerCase()) ? "Es un palíndromo." : "No es un palíndromo."; // Verificar palíndromo

    // Mostrar resultado en el div
    document.getElementById("salida").innerHTML = `
        Texto codificado: ${cadenaAlreves.trim()}<br>
        ${resultadoPalindromo}
    `;


}
/**
 * 
 * @param {*} entrada 
 * @param {*} separador 
 * @returns returna las palabras separadas por un separador
 */
function separaPalabras(entrada,separador){
    return entrada.split(separador);

}
/**
 * 
 * @param {*} texto 
 * @returns retorna el texto dado la vuelta
 */
function giraPalabras(texto){
    return texto.split('').reverse().join('');
}


/**
 * 
 * @param {*} texto 
 * @returns retorna si es palindromo true comparando las cadenas .
 */
function esPalindromo(texto){
   let alreves = texto.split('').reverse().join('');
    return texto === alreves;

}
