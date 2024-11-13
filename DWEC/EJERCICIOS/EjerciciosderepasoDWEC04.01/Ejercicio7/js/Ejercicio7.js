window.onload = principal;

//creacion de un mapa (clave, valor)
let usuarios = new Map();


function principal() {
    document.getElementById("registroUsuario").onclick = manejadorPulsar;
    document.getElementById("buscador").onclick = manejadorBuscar;
    document.getElementById("eliminar").onclick = manejadorEliminar;
    document.getElementById("muestra").onclick = manejadorMuestra
}



function manejadorMuestra(){

mostrarMapa(usuarios); 


}
function manejadorPulsar() {

let usuario = document.getElementById("usuario").value;
let contrasena = document.getElementById("contrasena").value;

verificarUsuario(usuario,contrasena);
}

function manejadorBuscar(){


    let usuario = document.getElementById("buscadorC").value;

    obtenerContrasenaUsuario(usuario);

}


function manejadorEliminar(){



    let eU= document.getElementById("eliminarUsuario").value;

    eliminarUsuario(eU);

}



function obtenerContrasenaUsuario(usuario3){

    if(usuarios.has(usuario3)){
        alert(usuarios.get(usuario3));
    }

}



function mostrarMapa(usuarios1){


    for (const [usuario,contrasena] of usuarios1){

        alert(`${usuario} , ${contrasena}`);

    }

}

function eliminarUsuario(usuario2){

    usuarios.delete(usuario2);
    alert("Usuario eliminado correctamente");

    
}


function verificarUsuario(usuario1, contrasena1) {

    if (usuarios.has(usuario1)) {


        if (usuarios.get(usuario1) === contrasena1) {
           alert("Acceso concedido");
        } else {
            alert("Acceso denegado");
        }


    } else {

        usuarios.set(usuario1, contrasena1);
        alert("Usuario añadido al mapa correctamente");
    }


}


