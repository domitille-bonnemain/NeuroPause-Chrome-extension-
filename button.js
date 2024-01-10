
//voir le temps en minutes
let timeS = document.getElementById("timeS");
let timeB = document.getElementById("timeB");

//fonction qui affiche un chiffre de départ 
timeS.innerHTML = "1";
timeB.innerHTML = "10";

//fonction qui augmente les minutes pour le temps écran
const buttonUpS = document.getElementById("upS");

const upT = () => {
    let calcul = parseInt(timeS.innerHTML) + 5;
    timeS.innerHTML = `${calcul}`
}
buttonUpS.addEventListener("click", upT)

//fonction qui baisse les minutes pour le temps écran
const buttonDownS = document.getElementById("downS");

const downT = () => {
    let calcul = parseInt(timeS.innerHTML) - 5;
    timeS.innerHTML = `${calcul}`

//bloquer le timer à 0
    if(parseInt(timeS.innerHTML) <= 0){
        timeS.innerHTML = "0"
    }
}
buttonDownS.addEventListener("click", downT)

//fonction qui augmente les minutes pour le temps pause
const buttonUpB = document.getElementById("upB");
const upB = () => {
    let calcul = parseInt(timeB.innerHTML) + 5;
    timeB.innerHTML = `${calcul}`
}
buttonUpB.addEventListener("click", upB)

//fonction qui baisse les minutes pour le temps pause
const buttonDownB = document.getElementById("downB");
const downB = () => {
    let calcul = parseInt(timeB.innerHTML) - 5;
    timeB.innerHTML = `${calcul}`

    //bloquer le timer à 0
    if(parseInt(timeB.innerHTML) <= 0){
        timeB.innerHTML = "0"
    }
}
buttonDownB.addEventListener("click", downB)