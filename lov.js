let password = "";

function addDigit(digit) {
    if (password.length < 6) {
        password += digit;
        document.getElementById("password").value = password;
    }
}

function clearPassword() {
    password = "";
    document.getElementById("password").value = password;
}

function checkPassword() {
    const correctPassword = "011224"; // Cambia esta contraseña
    if (password === correctPassword) {
        alert("¡Contraseña correcta!");
        window.location.href = "pagina2.html"; // Redirigir a otra página
    } else {
        alert("Contraseña incorrecta");
        clearPassword();
    }
}

/*pagina 2**/ 


const envelope = document.getElementById("envelope");
const buttonContainer = document.getElementById("button-container");

envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");

    // Verificar si el botón ya existe
    let continueButton = document.getElementById("continue-button");
    if (!continueButton) {
        // Crear el botón dinámicamente
        continueButton = document.createElement("button");
        continueButton.id = "continue-button";
        continueButton.textContent = "Continue";
        continueButton.onclick = () => {
            window.location.href = "pagina4.html"; // Redirige a la página3
        };
        buttonContainer.appendChild(continueButton);
    }

    // Mostrar el botón al abrir el sobre
    if (envelope.classList.contains("open")) {
        continueButton.style.display = "block";
    } else {
        continueButton.style.display = "none";
    }
});

/** pagina 3 */
function toggleText(globo) {
    globo.classList.toggle('clicked');
}

/*pagina4*/ 

