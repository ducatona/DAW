window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    document.getElementById("salida").innerHTML = "Has escrito: " + document.getElementById("entrada").value;
}



let notas = [
    {
        nombre: "Antonio",
        notas: {
            "matemáticas": 3.4,
            "lengua": 5,
            "inglés": 6.7,
            "física": 8.1,
            "música": 10
        }
    },
    {
        nombre: "María",
        notas: {
            "matemáticas": 8.5,
            "lengua": 9.2,
            "inglés": 7.8,
            "física": 8.9,
            "música": 9.5
        }
    },
    {
        nombre: "Carlos",
        notas: {
            "matemáticas": 6.3,
            "lengua": 7.0,
            "inglés": 5.4,
            "física": 7.2,
            "música": 8.3
        }
    },
    {
        nombre: "Sofía",
        notas: {
            "matemáticas": 9.1,
            "lengua": 8.7,
            "inglés": 9.5,
            "física": 9.0,
            "música": 7.8
        }
    },
    {
        nombre: "Luis",
        notas: {
            "matemáticas": 5.6,
            "lengua": 6.8,
            "inglés": 7.2,
            "física": 6.5,
            "música": 8.0
        }
    },
    {
        nombre: "Elena",
        notas: {
            "matemáticas": 7.4,
            "lengua": 8.3,
            "inglés": 8.1,
            "física": 8.7,
            "música": 9.0
        }
    },
    {
        nombre: "Miguel",
        notas: {
            "matemáticas": 4.9,
            "lengua": 5.7,
            "inglés": 6.0,
            "física": 5.8,
            "música": 6.5
        }
    },
    {
        nombre: "Ana",
        notas: {
            "matemáticas": 9.8,
            "lengua": 9.1,
            "inglés": 8.6,
            "física": 9.3,
            "música": 10
        }
    }
];

let aprobados = [];
let suspensos = [];
let mejoresNotas = [];

muestraDatos();
alumnosAprobados();
notaAlta();



function muestraDatos() {

    //Mostrar todos los elementos del json
    for (let i = 0; i < notas.length; i++) {

        let estudiante = notas[i];


        console.log(`Estudiante: ${estudiante["nombre"]}`);

        for (let asignatura in estudiante["notas"]) {

            console.log(`${asignatura}: ${estudiante["notas"][asignatura]}`);

        }
    }

}

//Mostrar todos los alumnos que hayan aprobado todo

function alumnosAprobados() {


    for (let i = 0; i < notas.length; i++) {

        let alumnos = notas[i];
        let nombre = notas[i]["nombre"];
        let notasClase = notas[i]["notas"];
        let suspendido = false;

        for (let asignatura in notasClase) {

            if (notasClase[asignatura] < 5) {
                suspendido = true;
                suspensos.push(`${asignatura} ${notasClase[asignatura]} ${nombre}`);
            }


        }
        if (!suspendido) {

            aprobados.push(`${nombre}`);

        }


    }
    for (const apro of aprobados) {
        console.log("****Alumnos aprobados*****");
        console.log(apro);

    }

    for (const susoensos of suspensos) {
        console.log("****Alumnos suspensos****");
        console.log(susoensos);

    }

}


function notaAlta() {



    for (let asignatura in notas[0]["notas"]){
        let mNota = 0;
        let mAsignatura = "";
        let nombre = "";
    for (let i = 0; i < notas.length; i++) {
        let estudiante = notas[i];
        let notasEstudiante = estudiante["notas"];
        let nombreEstudiante = estudiante["nombre"];


       

            if(notasEstudiante[asignatura]> mNota){

                mNota = notasEstudiante[asignatura];
                mAsignatura = asignatura;
                nombre = nombreEstudiante;


            }

        }
        
    

console.log(`El estudiante ${nombre} con mejor nota en: ${mAsignatura} con la nota ${mNota}`);


}

}