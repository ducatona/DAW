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


//ordenAsignaturas
let asignaturas = ["matematicas", "lengua", "ingles", "fisica", "musica"];
//Array donde almacenaremos los aprobados
let aprobados = [];
//Array donde almacenaremos los suspensos
let suspensos = [];





//llamadas
mostrarInfo();
mostrarAprobadoSuspensos();
mostrarMayoresNotas();




/***
 * Funcion que devuelve toda la informacion del array notas
 */
function mostrarInfo() {

    for (let i = 0; i < notas.length; i++) {
        let nombre = notas[i][0];
        let notasEstudiantes = notas[i][1];

        console.log(`Notas de ${nombre}`);


        for (let j = 0; j < notasEstudiantes.length; j++) {
            console.log(`${asignaturas[j]}: ${notasEstudiantes[j]}`);

        }


    }
}

/**
 * Funcion que devuelve el nombre de los que han aprobado todo y de los que han suspendido alguna con el nombre de la asigntatura y la nota.
 */
function mostrarAprobadoSuspensos() {

    for (let c = 0; c < notas.length; c++) {

        let nombre = notas[c][0];
        let notasAlumnos = notas[c][1];
        let alumnoSuspenso = false;

        for (let j = 0; j < notasAlumnos.length; j++) {



            if (notasAlumnos[j] < 5) {

                alumnoSuspenso = true;
                suspensos.push(`${nombre} ${asignaturas[j]} ${notasAlumnos[j]}`)
            }



        }

        if (!alumnoSuspenso) {
            aprobados.push(nombre);
        }



    }

    console.log("Aprobados:", aprobados);

    for (let d = 0; d < suspensos.length; d++) {
        console.log(suspensos[d]);

    }

}


function mostrarMayoresNotas(){


for (let i = 0; i < asignaturas.length; i++) {


    let mejorAlumno = "";
    let mejorNota = 0;

    for (let j = 0; j < notas.length; j++) {
        
        let notaAlumno = notas[j][1][i];


        if(notaAlumno > mejorNota){

            mejorNota = notaAlumno;
            mejorAlumno = notas[j][0];
        }

        
    }

    console.log(`La mejor nota en ${asignaturas[i]} es para ${mejorAlumno} con un ${mejorNota}`);
}


}


