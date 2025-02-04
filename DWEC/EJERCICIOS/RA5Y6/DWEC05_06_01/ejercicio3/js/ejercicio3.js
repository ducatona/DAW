document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefault();
    
    let intentosFallidos = parseInt(localStorage.getItem("intentosFallidos")) || 0;
    let errores = false;
    
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const favorito = document.getElementById("favorito").value;
    
    // Validar nombre y apellidos
    const regexNombreApellidos = /^[A-ZÁÉÍÓÚ][a-záéíóú]+(?:\s[A-ZÁÉÍÓÚ][a-záéíóú]+)?$/;
    if (!regexNombreApellidos.test(nombre) || !regexNombreApellidos.test(apellidos)) {
        document.getElementById("error_nombre").innerText = "Nombre o apellidos no válidos.";
        errores = true;
    } else {
        document.getElementById("error_nombre").innerText = "";
    }

    // Validar contraseñas
    if (password !== password2 || password.length < 6) {
        document.getElementById("error_password").innerText = "Las contraseñas deben ser iguales y tener al menos 6 caracteres.";
        errores = true;
    } else {
        document.getElementById("error_password").innerText = "";
    }

    // Validar producto favorito
    if (favorito === "none") {
        document.getElementById("error_favorito").innerText = "Debes elegir un producto.";
        errores = true;
    } else {
        document.getElementById("error_favorito").innerText = "";
    }

    // Validar campos obligatorios
    if (nombre === "" || apellidos === "" || email === "" || password === "" || password2 === "" || favorito === "none") {
        errores = true;
        document.getElementById("error_email").innerText = "Todos los campos obligatorios deben ser rellenados.";
    }

    if (errores) {
        intentosFallidos++;
        localStorage.setItem("intentosFallidos", intentosFallidos);
        document.querySelector(".intentos").innerText = `Has intentado ${intentosFallidos} veces.`;
    } else {
        // Crear el objeto con los datos del formulario
        const formData = {
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            password: password,
            genero: document.querySelector('input[name="genero"]:checked').value,
            boletin: document.getElementById("boletin").checked,
            ofertas: document.getElementById("ofertas").checked,
            favorito: favorito,
            comentario: document.getElementById("comentario").value
        };

        // Guardar en sessionStorage
        sessionStorage.setItem("formData", JSON.stringify(formData));
        alert("Formulario enviado con éxito");
        document.getElementById("formulario").reset();
        document.querySelector(".intentos").innerText = "Este es tu primer intento";
    }
});
