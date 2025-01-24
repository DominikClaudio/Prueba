const heartFill = document.getElementById('heart-fill');
const message = document.getElementById('message');

let clicks = 0;
const maxClicks = 56; // Total de clics para llenar el corazón

document.getElementById('heart').addEventListener('click', () => {
    if (clicks < maxClicks) {
        clicks++;
        const fillHeight = (clicks / maxClicks) * 100; // Progreso en porcentaje
        heartFill.style.height = `${fillHeight}%`; // Ajusta la altura del relleno

        // Cambiar el mensaje según el progreso
        if (clicks < maxClicks / 2) {
            message.textContent = "Toca ese corazón"; // Mensaje inicial
        } else if (clicks >= maxClicks / 2 && clicks < maxClicks - 5) {
            message.textContent = "¡Ya falta poco, no te rindas!";
        } else if (clicks >= maxClicks - 5 && clicks < maxClicks) {
            message.textContent = "¡Estás muy cerca!";
        }

        if (clicks === maxClicks) {
            message.textContent = "¡Lo lograste!";
            setTimeout(() => {
                // Redirigir a la siguiente página después de un breve retraso
                window.location.href = 'pagina3.html';
            }, 2000);
        }
    }
});
