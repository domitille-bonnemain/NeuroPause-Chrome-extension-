// Fonction pour ajuster la luminosité
function adjustBrightnessAtTimerStart() {
    // Définir la luminosité à 0.8
    document.body.style.filter = "brightness(0.8)";
}

// Récupérer l'élément timer par son ID
const timerElement = document.getElementById("timer");

// Ajouter un gestionnaire d'événements pour le début du timer
timerElement.addEventListener("timerStart", () => {
    // Appeler la fonction lorsque le timer débute
    adjustBrightnessAtTimerStart();
});

