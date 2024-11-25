/**
 * 
 * 
 * Ejercicio 8
 * Desarrolla un script con una función crearPersona que pueda recibir los siguientes datos:
• Nombre y apellidos
• Nombre, apellidos y teléfono
• Nombre, apellidos, teléfono y edad
De no recibir el teléfono éste tendrá por defecto el valor 555, y la edad el valor 0.
Crea una estructura de datos mediante un objeto literal que almacene dichos datos y devuelva
dicho objeto mediante return.
Prueba a llamar esta función con distintos datos y combinaciones de estos.

 */




function crearPersona(nombre, apellidos, teléfono = 555, edad = 0) {

    const persona = {

        nombre: nombre,
        apellidos: apellidos,
        teléfono: teléfono,
        edad: edad



    };

    return persona;

}



const persona1 = crearPersona("adrian", "peña");
const persona2 = crearPersona("alejandro", "pila", 610567733, 18);


console.log(persona1);

console.log(persona2);


//Ejercicio 9 

/**
 * Desarrolla un script con una función crearMuchasPersonas que, haciendo uso de la desarrollada
en el ejercicio anterior, pueda recibir un número indeterminado de argumentos y que genere
tantas personas como las combinaciones de datos que reciba, almacenando todas ellas en una
colección.
Por poner un ejemplo, aunque puedes desarrollarlo como quieras, pueda ser llamada tal que:
crearMuchasPersonas([“Antonio”, “Sierra García],[“Elisa”, “García Lastra”,
“942778899”],[“Carlos”,”Montes Velasco”, ”666112233”, 25]);
y genere las tres personas mediante la función crearPersona.

 */

function crearMuchasPersonas(...datoDePersonas) {


    const personas = [];

    for (const datos of datoDePersonas) {
        const [nombre, apellidos, telefono = 555, edad = 0] = datos;
        const persona = crearPersona(nombre, apellidos, telefono, edad);
        personas.push(persona);


    }

    return persona;
}


/**Ejercicio 11
Crea un script con una función separaNumeros en la que no se especifiquen parámetros de
entrada concretos. Esta función se tendrá que preocupar de comprobar los argumentos que
reciba e indicar cuáles son números enteros mediante un mensaje de consola.
Prueba a llamar esta función con distintas combinaciones de datos, textos y números.
 */



function separaNumeros(...datos) {

    let enteros = [];

    for (let i = 0; i < datos.length; i++) {

        if (esEntero(datos[i])) {

            console.log(`${datos[i]}  es un número entero`);
            enteros.push(datos[i]);
        } else {

            console.log(`${datos[i]}  no es un número entero`);
        }




    }
    salida = console.log(enteros);

    return salida;
}


let resultado = separaNumeros(2, 5, 6, 7, 7.5, 8.1, "a");

// for (let a = 0; a < resultado.length; a++) {
//    console.log("Lista de enteros" + " " + resultado[a]);

// }



/**
 * esEntero
 * Función que comprueba si el string recibido como entrada es un número entero o no, devolviendo true o false
 * @param number
 * @returns {boolean}
 */
function esEntero(number) {
    let resultado = false;
    if (number % 1 === 0) {
        resultado = true;
    }
    return resultado;
}