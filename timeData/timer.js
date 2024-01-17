// Récupère l'élément d'affichage du temps dans la page HTML
const timeScreen = document.getElementById("timeS");

// Quand le bouton "saveBtn" est cliqué, enregistre certaines informations dans un espace de stockage spécial du navigateur
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
  // Enregistre le temps à zéro, la valeur de l'élément d'affichage du temps, et indique que le chronomètre ne fonctionne pas (false)
  chrome.storage.local.set({
    timer: 0,
    timeScreen: timeScreen.value,
    isRunning: false,
  });
});

// Lorsque la page est chargée, récupère la valeur enregistrée pour le temps d'écran depuis l'espace de stockage
chrome.storage.local.get(["timeScreen"], (res) => {
  // Met à jour l'affichage du temps avec la valeur récupérée
  timeScreen.value = res.timeScreen;
});

