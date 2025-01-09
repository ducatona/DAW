//Author: Adrián Peña Carnero 16/12/2024 

function calculosMultiples(...args) {
  let resultado = "";

  if (args.length === 0) {
    resultado = "No existen parámetros disponibles";

  }

  const tipoCalculo = args[0];
  if (tipoCalculo !== "E" && tipoCalculo !== "L") {
    resultado = "El tipo de calculo no es valido (E,L)";

  }


  if (tipoCalculo === "E") {
    if (args.length !== 3) {
      resultado = "No se ha introducido bien el parametro";

    }

    let base = args[1];
    let exponente = args[2];
    let resultado = Math.pow(base, exponente);
    resultado = `El resultado de elevar ${base} a la potencia ${exponente} es: ${resultado}`;

  }


  if (tipoCalculo === "L") {
    if (args.length < 2) {
      resultado = "No se ha introducido bien el parametro";

    }

    let numeros = args.slice(1);
    let ordenados = numeros.sort((a, b) => b - a);
    resultado = "Números ordenados de mayor a menor:", ordenados;

  }

  return resultado;
}

