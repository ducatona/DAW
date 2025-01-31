document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    let intentosFallidos = 0;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevenir envío del formulario
      let errores = 0;
  
      // Validar nombre
      const nombre = document.getElementById("nombre").value.trim();
      const errorNombre = document.getElementById("error_nombre");
      const nombreRegex = /^[A-Z][a-z]+( [A-Z][a-z]+)?$/; // Expresión regular para 1 o 2 palabras con la primera letra en mayúscula
      if (!nombre || !nombreRegex.test(nombre)) {
        errores++;
        errorNombre.textContent = "El nombre es obligatorio y debe tener 1 o 2 palabras, con mayúscula inicial.";
      } else {
        errorNombre.textContent = "";
      }
  
      // Validar apellidos
      const apellidos = document.getElementById("apellidos").value.trim();
      const errorApellidos = document.getElementById("error_apelidos");
      if (!apellidos || !nombreRegex.test(apellidos)) {
        errores++;
        errorApellidos.textContent = "Los apellidos son obligatorios y deben tener 1 o 2 palabras, con mayúscula inicial.";
      } else {
        errorApellidos.textContent = "";
      }
  
      // Validar email
      const email = document.getElementById("email").value.trim();
      const errorEmail = document.getElementById("error_email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para formato de email
      if (!email || !emailRegex.test(email)) {
        errores++;
        errorEmail.textContent = "Introduce un email válido.";
      } else {
        errorEmail.textContent = "";
      }
  
      // Validar contraseñas
      const password = document.getElementById("password").value;
      const password2 = document.getElementById("password2").value;
      const errorPassword = document.getElementById("error_password");
      if (password.length < 6 || password !== password2) {
        errores++;
        errorPassword.textContent = "Las contraseñas deben coincidir y tener al menos 6 caracteres.";
      } else {
        errorPassword.textContent = "";
      }
  
      // Validar producto favorito
      const favorito = document.getElementById("favorito").value;
      const errorFavorito = document.getElementById("error_favorito");
      if (favorito === "none") {
        errores++;
        errorFavorito.textContent = "Debes elegir un producto favorito.";
      } else {
        errorFavorito.textContent = "";
      }
  
      // Manejo de errores
      const intentos = document.querySelector(".intentos");
      if (errores > 0) {
        intentosFallidos++;
        intentos.textContent = `Intentos fallidos: ${intentosFallidos}`;
      } else {
        // Si todo está correcto, guardar datos en sessionStorage
        const datosFormulario = {
          nombre,
          apellidos,
          email,
          genero: document.querySelector('input[name="genero"]:checked').value,
          favorito,
          comentario: document.getElementById("comentario").value.trim(),
        };
  
        sessionStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));
        alert("Formulario enviado correctamente.");
        form.reset();
      }
    });
  });
  