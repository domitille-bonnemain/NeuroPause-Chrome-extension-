//recuperer le timer 
const timer = document.getElementById("timer");
const timerPage = document.getElementById("timerPage");
const timeChoice =  document.getElementById("timeChoice")

//création de variables pour stocker les minutes (en secondes)
let timeSeconds = 600; 
let breakSeconds = 600; 

//création d'un Interval (qui sera modifiable)
let intervalX; 

//fonction qui lance le timer
const startBtn = document.getElementById("start")

const start = () => {

//Aappeler la fonction pour ajuster la luminosité au début du timer
    adjustBrightnessAtTimerStart();

    timeSeconds = parseInt(document.getElementById("timeS").innerHTML)*60;
    breakSeconds = parseInt(document.getElementById("timeB").innerHTML)*60;

    //Déclencher l'vènement "timerStart" au bon moment 
    timerElement.dispatchEvent(new Event("timerStart"));
    
//toute les secondes, lance la fonction time et change l'interval
    intervalX = setInterval(screenTime, 1000); 

    timerPage.style.display = 'flex';
    timeChoice.style.display = "none";
}
startBtn.addEventListener("click", start)


//function qui arrête le timer
const stopBtn = document.getElementById("stop")
const stop = () => {
    clearInterval(intervalX);
    console.log("stop")
}
stopBtn.addEventListener("click", stop)

//fonction qui remet à 0 
const resetBtn = document.getElementById("reset")
const reset = () => {
    clearInterval(intervalX);
    timer.innerText = "00:00"
    timeChoice.style.display = 'flex';
    timerPage.style.display = "none";
}
resetBtn.addEventListener("click", reset)

// countdown écran 
const screenTime = () => {
    //countdown de secondes
    timeSeconds--;

    //timer afficher
    timer.innerText = Math.floor((timeSeconds / 60)).toString() + ":" + (timeSeconds % 60).toString();
    if(timeSeconds === 0){
        clearInterval(intervalX);
        intervalX = setInterval(breakCountdown, 1000);
    }
}

//countdown break
const breakCountdown = () => {
    breakSeconds--;

    timer.innerText = Math.floor((breakSeconds / 60)).toString() + ":" + (breakSeconds % 60).toString();
    if(breakSeconds === 0){
        reset();
        alert("C'est reparti :)");
    }
}
