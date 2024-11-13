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
        "teléfonos": {
            "fijo": 942111222,
            "móvil": 555222444,
            "trabajo": 942888777
        },
        "direcciones": {
            "casa": "Calle la cosa nº2",
            "trabajo": "Empresa infernal 123"
        },
        "cumpleaños": new Date("07/14/1980")
    },
    {
        "nombre": "Beatriz",
        "apellidos": "López Martínez",
        "teléfonos": {
            "fijo": 943123456,
            "móvil": 666111222,
            "trabajo": 944789101
        },
        "direcciones": {
            "casa": "Avenida del Sol 15",
            "trabajo": "Oficina Central 456"
        },
        "cumpleaños": new Date("03/22/1990")
    },

    {
        "nombre": "Alex",
        "apellidos": "peña Martínez",
        "teléfonos": {
            "fijo": 943123456,
            "móvil": 666111222,
            "trabajo": 944789101
        },
        "direcciones": {
            "casa": "Avenida del Sol 15",
            "trabajo": "Oficina Central 456"
        },
        "cumpleaños": new Date("03/22/1990")
    }
];



function ordenarPorNombre(agenda) {

    agenda.sort(function (a, b) {
        return a["nombre"].localeCompare(b["nombre"]);
    });



}
function ordenarPorApellido(agenda){

agenda.sort(function(a,b){
    return a["apellidos"].localeCompare(b["apellidos"])

});
}







ordenarPorNombre(agenda5);
console.log("ordenado por nombre",agenda5);

ordenarPorApellido(agenda5);
console.log("ordenado por apellidos y nombre", agenda5);