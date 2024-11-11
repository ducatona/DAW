window.onload = principal;

//creacion de un mapa (clave, valor)
let usuarios = new Map();


function principal() {
    document.getElementById("registroUsuario").onclick = manejadorClick;
}

function manejadorClick() {

let usuario = document.getElementById("usuario").value;
let contrasena = document.getElementById("contrasena").value;

verificarUsuario(usuario,contrasena);







}




function obtenerContrasenaUsuario(usuario3){

    if(usuarios.has(usuario3)){
        alert(usuarios.get(usuario3));
    }

}



function mostrarMapa(usuarios1){


    for (const [usuario,contrasena] in usuarios1){

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
    }


}


