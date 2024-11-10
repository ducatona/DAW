window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    document.getElementById("salida").innerHTML = "Has escrito: " + document.getElementById("entrada").value;
}

let notas = [
    ["Antonio", [7.4, 5.5, 6.8, 7.2, 8.1]],
    ["María", [8.0, 7.3, 9.1, 6.5, 7.8]],
    ["Luis", [5.3, 6.7, 4.9, 5.8, 7.0]],
    ["Carmen", [6.5, 7.8, 8.2, 9.1, 6.3]],
    ["Pedro", [4.9, 5.5, 6.7, 7.3, 8.0]],
    ["Laura", [9.2, 8.4, 7.9, 6.8, 9.0]],
    ["Jorge", [6.0, 7.0, 6.5, 8.1, 7.2]],
    ["Ana", [7.9, 9.3, 8.6, 8.0, 9.1]],
    ["Sofía", [5.4, 6.2, 4.8, 7.5, 6.7]],
    ["Manuel", [8.5, 7.4, 8.1, 9.0, 7.9]]
];

let aprobados = [];
let suspensos = [];


verNotas();
mostrarAprobadosYsuspensos();

function verNotas() {


    for (let i = 0; i < notas.length; i++) {

        //Accedemos a los arrays
        let nombre = notas[i][0];
        let notasEstudiante = notas[i][1];

        //Mostramos las notas utilizando el indice de cada nota
        console.log(`Notas de ${nombre}`);
        console.log(`Matematicas ${notasEstudiante[0]}`);
        console.log(`Lengua ${notasEstudiante[1]}`);
        console.log(`Ingles ${notasEstudiante[2]}`);
        console.log(`Fisica ${notasEstudiante[3]}`);
        console.log(`Música ${notasEstudiante[4]}`);



    }


}

function mostrarAprobadosYsuspensos() {


    for (let i = 0; i < notas.length; i++) {

        let nombre = notas[i][0];
        let notasEstudiante = notas[i][1];
        let aprobado = true;


        for (let j = 0; j < notasEstudiante.length; j++) {
            if (notasEstudiante[j] < 5) {
                aprobado = false;
                break;
            }

        }


        if (aprobado) {
            aprobados.push(nombre);

        } else {
            suspensos.push(nombre);
        }


    }


    for (let z = 0; z < aprobados.length; z++) {
        console.log("Lista de alumnos aprobados" + aprobados[z] + "\n");

    }

    console.log("*********************************************************");

    for (let s = 0; s < suspensos.length; s++) {
        console.log("Lista de alumnos suspensos " + suspensos[s] + "\n");

    }


}

function mostrarNotaAlta() {

    let notaMayor;


    for (let m = 0; m < notas.length; m++) {


    }





}