// Fonction pour ajuster la luminosité au début du timer
function adjustBrightnessAtTimerStart() {
    // Définir la luminosité à 0.4
    document.body.style.filter = "brightness(0.4)";
}

// Fonction pour réinitialiser la luminosité à sa valeur normale
function resetBrightness() {
    // Réinitialiser la luminosité à la normale (1)
    document.body.style.filter = "brightness(1)";
}

// Récupérer le timer
const timer = document.getElementById("timer");
const timerPage = document.getElementById("timerPage");
const timeChoice = document.getElementById("timeChoice");

// Création de variables pour stocker les minutes (en secondes)
let timeSeconds = 600;
let breakSeconds = 600;

// Création d'un intervalle (qui sera modifiable)
let intervalX;

// Fonction qui lance le timer
const startBtn = document.getElementById("start");

const start = () => {
    // Appeler la fonction pour ajuster la luminosité au début du timer
    adjustBrightnessAtTimerStart();

    timeSeconds = parseInt(document.getElementById("timeS").innerHTML) * 60;
    breakSeconds = parseInt(document.getElementById("timeB").innerHTML) * 60;

    // Déclencher l'événement "timerStart" au bon moment
    // timerElement.dispatchEvent(new Event("timerStart"));

    // Toutes les secondes, lance la fonction time et change l'interval
    intervalX = setInterval(screenTime, 1000);

    timerPage.style.display = 'flex';
    timeChoice.style.display = "none";
};

startBtn.addEventListener("click", start);

// Fonction qui arrête le timer
const stopBtn = document.getElementById("stop");
const stop = () => {
    clearInterval(intervalX);
// Reset la couleur de base en cliquant sur stop
    resetBrightness();
    console.log("stop");
};

stopBtn.addEventListener("click", stop);

// Fonction qui remet à 0
const resetBtn = document.getElementById("reset");
const reset = () => {
    clearInterval(intervalX);
// Appeler la fonction pour réinitialiser la luminosité
    resetBrightness(); 
    timer.innerText = "00:00";
    timeChoice.style.display = 'flex';
    timerPage.style.display = "none";
};

resetBtn.addEventListener("click", reset);

// Countdown écran
const screenTime = () => {
    // Countdown de secondes
    timeSeconds--;

    // Timer affiché
    timer.innerText = Math.floor((timeSeconds / 60)).toString() + ":" + (timeSeconds % 60).toString();
    if (timeSeconds === 0) {
        clearInterval(intervalX);
        intervalX = setInterval(breakCountdown, 1000);
    }
};

// Countdown break
const breakCountdown = () => {
    breakSeconds--;

    timer.innerText = Math.floor((breakSeconds / 60)).toString() + ":" + (breakSeconds % 60).toString();
    if (breakSeconds === 0) {
        reset();
        alert("C'est reparti :)");
    }
};







