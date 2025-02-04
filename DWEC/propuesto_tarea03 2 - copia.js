document.getElementById('enviar').addEventListener('click', validarFormulario);

function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    let favorito = document.getElementById('favorito').value;
    let intentosElem = document.querySelector('.intentos');

    let intentos = parseInt(intentosElem.textContent.match(/\d+/)) || 1;

    let hayError = false;

    // Reseteamos mensajes de error
    document.querySelectorAll('.salidaError').forEach(elem => elem.textContent = '');

    if (!nombre) {
        document.getElementById('error_nombre').textContent = 'El campo Nombre es obligatorio.';
        hayError = true;
    }
    if (!apellidos) {
        document.getElementById('error_apellidos').textContent = 'El campo Apellidos es obligatorio.';
        hayError = true;
    }
    if (!email) {
        document.getElementById('error_email').textContent = 'El campo Email es obligatorio.';
        hayError = true;
    }
    if (!password) {
        document.getElementById('error_password').textContent = 'El campo Contraseña es obligatorio.';
        hayError = true;
    }
    if (!password2) {
        document.getElementById('error_password2').textContent = 'El campo Repetir Contraseña es obligatorio.';
        hayError = true;
    }
    if (!favorito) {
        document.getElementById('error_favorito').textContent = 'El campo Producto favorito es obligatorio.';
        hayError = true;
    }

    if (hayError) {
        intentosElem.textContent = `Este es tu intento número ${++intentos}`;
        return;
    }

    if (password !== password2 || password.length <= 6) {
        document.getElementById('error_password').textContent = 'Las contraseñas deben ser idénticas y mayores de 6 caracteres.';
        hayError = true;
    }

    let nombreRegex = /^[A-Z][a-z]+( [A-Z][a-z]+)?$/;
    if (!nombreRegex.test(nombre) || !nombreRegex.test(apellidos)) {
        document.getElementById('error_nombre').textContent = 'Nombre y Apellidos deben tener la primera letra en mayúscula y estar formadas solo por letras.';
        hayError = true;
    }

    if (hayError) {
        intentosElem.textContent = `Este es tu intento número ${++intentos}`;
        return;
    }

    let datos = {
        nombre,
        apellidos,
        email,
        password,
        favorito
    };
    
    sessionStorage.setItem('formularioDatos', JSON.stringify(datos));
    document.querySelector('.intentos').textContent = 'Formulario enviado correctamente';
}
