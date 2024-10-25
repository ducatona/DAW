let cadena1 =  prompt("Introduce la primera cadena");
let cadena2 =  prompt("Introduce la segunda cadena");

let resultado = cadena1.concat(cadena2  );
console.log(resultado);

let resultado2 = cadena1.indexOf(cadena2);
console.log(resultado2);

let resultado4 = cadena1.replace(/a/g,'4');
let resultado5 =  cadena2.replace(/o/g,'0');

console.log(resultado4);
console.log(resultado5);