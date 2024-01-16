
//voir le temps en minutes
let minuteS = document.getElementById("timeS");
let minuteB = document.getElementById("timeB");

//chiffre de départ 
minuteS.innerHTML = "5";
minuteB.innerHTML = "5";

//value de départ
minuteS.value = 5;
minuteB.value = 5;

//fonction qui augmente les minutes pour le temps écran
const buttonUpS = document.getElementById("upS");
const upT = () => {
    let calcul = parseInt(minuteS.innerHTML) + 5;
    minuteS.value = calcul;
    console.log(minuteS.value)
    minuteS.innerHTML = `${calcul}`
}
buttonUpS.addEventListener("click", upT)

//fonction qui baisse les minutes pour le temps écran
const buttonDownS = document.getElementById("downS");

const downT = () => {
    let calcul = parseInt(minuteS.innerHTML) - 5;
    minuteS.value = calcul;
    minuteS.innerHTML = `${calcul}`

//bloquer le timer à 0
    if(parseInt(minuteS.innerHTML) <= 0){
        minuteS.value = 0;
        minuteS.innerHTML = "0"
    }
}
buttonDownS.addEventListener("click", downT)

//fonction qui augmente les minutes pour le temps pause
const buttonUpB = document.getElementById("upB");
const upB = () => {
    let calcul = parseInt(minuteB.innerHTML) + 5;
    minuteB.value = calcul;
    minuteB.innerHTML = `${calcul}`
}
buttonUpB.addEventListener("click", upB)

//fonction qui baisse les minutes pour le temps pause
const buttonDownB = document.getElementById("downB");
const downB = () => {
    let calcul = parseInt(minuteB.innerHTML) - 5;
    minuteB.value = calcul;
    minuteB.innerHTML = `${calcul}`

    //bloquer le timer à 0
    if(parseInt(minuteB.innerHTML) <= 0){
        minuteB.value = 0;
        minuteB.innerHTML = "0"
    }
}
buttonDownB.addEventListener("click", downB)