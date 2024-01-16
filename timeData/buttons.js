
//voir le temps en minutes
let minuteS = document.getElementById("timeS");


//chiffre de départ 
minuteS.innerHTML = "1";


//value de départ
minuteS.value = 1;


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
