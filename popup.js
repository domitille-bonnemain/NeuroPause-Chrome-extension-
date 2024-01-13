/* script de contenu
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

let time = 5
si time = 5 alors affichage de la notification

//ajouter fonction qui prend en compte la date et l'heure du jour

  // popup.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the countdown element
  const countdownElement = document.getElementById("countdown");

  // Update the countdown every second
  const updateCountdown = () => {
    chrome.runtime.sendMessage({ action: "getTimer" }, function (response) {
      const timerValue = response.timer;
      const minutes = Math.floor(timerValue / 60);
      const seconds = timerValue % 60;

      // Display the countdown in the popup
      countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    });
  };

  // Update the countdown when the popup is opened
  updateCountdown();

  // Set up an interval to update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);

  // Gérer le bouton de pause
  document.getElementById("pauseButton").addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "pauseTimer" });
  });

  // Gérer le bouton de reprise
  document.getElementById("resumeButton").addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "resumeTimer" });
  });
});
*/


/* Dark mode 

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);




