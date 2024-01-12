// script de contenu
const startBtn1 = document.getElementById("start")

startBtn1.addEventListener("click", () => {
  console.log("start")
    chrome.runtime.sendMessage("", {
      type: "notification",
      options: {
        title: "Petit rappel",
        message: "C'est bientôt la pause !",
        iconUrl: "/icon.png",
        type: "basic"
      }
    });
  });

/*let time = 5
si time = 5 alors affichage de la notification*/

//ajouter fonction qui prend en compte la date et l'heure du jour

  