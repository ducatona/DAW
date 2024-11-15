window.onload = principal;

function principal() {
    document.getElementById("sumarBtn").onclick = () => calcular('suma');
    document.getElementById("restarBtn").onclick = () => calcular('resta');
    document.getElementById("multiplicarBtn").onclick = () => calcular('multiplicacion');
    document.getElementById("dividirBtn").onclick = () => calcular('division');
    document.getElementById("factorialBtn").onclick = () => calcular('factorial');
    document.getElementById("sumatorioBtn").onclick = () => calcular('sumatorio');
}

function calcular(operacion) {


    //cogemos los valores
    let entrada1 = parseFloat(document.getElementById("entrada1").value);
    let entrada2 = parseFloat(document.getElementById("entrada2").value);
    let salida = document.getElementById("salida");


    //validacion de entradas


    if(isNaN(entrada1) && (operacion !== 'factorial' && isNaN(entrada2))){
        salida.innerText = "Introduce datos validos";
        return;
    }


    if(operacion === 'factorial' || operacion === 'sumatorio'){
        if(!Number.isInteger(entrada1) || entrada1 <0){
            salida.innerText = "El numero debe ser un entero positivo para hacer el sumatorio o el facotial";
            return;
        }
    }


    if(entrada2 === 0){

        salida.innerText = "No se puede dividir un numero entre 0";
return;
    }

    //logica calculadora

    
    let resultado;

    switch (operacion) {

        case 'suma':
            resultado = sumar(entrada1, entrada2);
            salida.innerText = `El resultado de la suma es: ${resultado}`;
            break;
        case 'resta':
            resultado = restar(entrada1, entrada2);
            salida.innerText = `El resultado de la resta es: ${resultado}`;
            break;
        case 'multiplicacion':
            resultado = multiplicar(entrada1, entrada2);
            salida.innerText = `El resultado de la multiplicación es: ${resultado}`;
            break;
        case 'division':
            resultado = dividir(entrada1, entrada2);
            salida.innerText = `El resultado de la división es: ${resultado}`;
            break;
        case 'factorial':
            resultado = factorial(entrada1);
            salida.innerText = `El resultado del factorial es: ${resultado}`;
            break;

        case 'sumatorio':
            resultado = sumatorio(entrada1);
            salida.innerText = `El resultado del sumatorio es: ${resultado}`;
            break;


    }



}






   




function sumar(n1, n2) {
    return n1 + n2;

}


function restar(n1, n2) {
    return n1 - n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}
function multiplicar(n1, n2) {
    return n1 * n2;

}

function factorial(n1) {
    let factorial = 1;
    for (let i = n1; i >= 1; i--) {
        factorial *= i;

    }
    return factorial;
}
function sumatorio(n) {

    if (n < 1 || !Number.isInteger(n)) {
        return "Introduce un numero positivo";

    }
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;

    }
    return suma;
}