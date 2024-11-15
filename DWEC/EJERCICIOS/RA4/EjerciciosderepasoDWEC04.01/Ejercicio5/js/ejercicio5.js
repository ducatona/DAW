window.onload = principal;

function principal() {
    document.getElementById("miBoton").onclick = manejadorClick;
}

function manejadorClick() {
    document.getElementById("salida").innerHTML = "Has escrito: " + document.getElementById("entrada").value;
}


let agenda5 = [
    {
        "nombre": "Antonio",
        "apellidos": "Sierra García",
        "teléfono fijo": 942111222,
        "teléfono móvil": 555222444,
        "teléfono de trabajo": 942888777,
        "dirección": "Calle la cosa nº2",
        "cumpleaños": new Date("07/14/1980")
    },
    {
        "nombre": "Beatriz",
        "apellidos": "López Martínez",
        "teléfono fijo": 943123456,
        "teléfono móvil": 666111222,
        "teléfono de trabajo": 944789101,
        "dirección": "Avenida del Sol 15",
        "cumpleaños": new Date("03/22/1990")
    }

];


function ordenarPorNombre(agenda) {

    agenda.sort(function (a, b) {
        return a["nombre"].localeCompare(b["nombre"]);
    });



}


function ordenarPorApellido(agenda) {

    agenda.sort(function (a, b) {
        return a["apellidos"].localeCompare(b["apellidos"])

    });
}

function ordenarPorTelefonoFijo(agenda) {

    agenda.sort(function (a, b) {


        return a["teléfono fijo"] - b["teléfono fijo"];
    })
}

function ordenarPorTelefonoMovil(agenda) {

    agenda.sort(function (a, b) {


        return a["teléfono móvil"] - b["teléfono móvil"];
    })
}


function ordenarPorTelefonoTrabajo(agenda) {

    agenda.sort(function (a, b) {


        return a["teléfono de trabajo"] - b["teléfono de trabajo"];
    })
}
function ordenarPorCumpleanos(agenda) {
    agenda.sort(function (a, b) {
        return a["cumpleaños"] - b["cumpleaños"];
    });
}
function ordenarPorDireccion(agenda) {
    agenda.sort(function (a, b) {
        return a["dirección"].localeCompare(b["dirección"]);
    });
}



ordenarPorNombre(agenda5);
console.log("ordenado por nombre", agenda5);

ordenarPorApellido(agenda5);
console.log("ordenado por apellidos y nombre", agenda5);

ordenarPorTelefonoFijo(agenda5);
console.log("ordenado por telefono fijo", agenda5);

ordenarPorTelefonoMovil(agenda5);
console.log("ordenado por telefono movil", agenda5);

ordenarPorTelefonoTrabajo(agenda5);
console.log("ordenar por telefono de trabajo", agenda5);
ordenarPorDireccion(agenda5);
console.log("ordenado por dirección", agenda5);

ordenarPorCumpleanos(agenda5);
console.log("ordenado por cumpleaños", agenda5);
