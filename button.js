
//voir le temps en minutes
let timeS = document.getElementById("timeS");
let timeB = document.getElementById("timeB");

//fonction qui affiche un chiffre de départ 
timeS.innerHTML = "10";
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






// Fonction déclenchée lorsque le bouton upS est cliqué
document.getElementById('upS').addEventListener('click', function() {
    // Obtenez la balise body
    let body = document.body;

    // Créez un élément div pour représenter le filtre foncé
    let darkOverlay = document.createElement('div');
    darkOverlay.style.position = 'fixed';
    darkOverlay.style.top = '0';
    darkOverlay.style.left = '0';
    darkOverlay.style.width = '100%';
    darkOverlay.style.height = '100%';
    darkOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // 0.5 correspond à l'opacité du filtre foncé

    // Ajoutez l'élément div à la page
    body.appendChild(darkOverlay);

    // Vous pouvez également ajouter d'autres styles à darkOverlay si nécessaire

    // Pour supprimer le filtre foncé après un certain temps (par exemple, après 5 secondes)
    setTimeout(() => {
        body.removeChild(darkOverlay);
    }, 5000);  // 5000 correspond à la durée en millisecondes avant de supprimer le filtre foncé
});





// Récupérer le bouton Start
const startButton = document.getElementById("start");

// Ajouter un écouteur d'événements sur le bouton Start
startButton.addEventListener("click", function () {
  // Récupérer le corps de la page
  const body = document.body;

  // Appliquer le flou au corps de la page
  //body.style.filter = "blur(5px)";
});
