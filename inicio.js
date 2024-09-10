// Variables para el usuario y la contraseña correctos
const correctUsername = "usercolegio1";
const correctPassword = "colegio123";

// Capturar el formulario y el mensaje de error
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

// Validación del formulario de inicio de sesión
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación de credenciales
    if (username === correctUsername && password === correctPassword) {
        loginMessage.style.color = "green";
        loginMessage.innerHTML = "Inicio de sesión exitoso. Redirigiendo...";
        loginMessage.style.display = "block";
        
        // Redirigir después de 1 segundo
        setTimeout(() => {
            window.location.href = "cursos.html"; // Aquí rediriges a la página principal
        }, 1000);
    } else {
        loginMessage.style.color = "#ff4d4d";
        loginMessage.innerHTML = "Usuario o contraseña incorrectos.";
        loginMessage.style.display = "block";
    }
});