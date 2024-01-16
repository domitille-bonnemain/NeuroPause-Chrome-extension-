function updateTime() {
    //récupère les données entrées
      chrome.storage.local.get(["timer", "timeScreen"], (res) => {
        //compte à rebours
        const time = document.getElementById("time");
        //temps écran
        const minuteS = `${res.timeScreen - Math.ceil(res.timer / 60)}`.padStart(
          2,
          "0"
        );
        let seconds = "00";
        //si la minute est fini, seconde à partir de 59
        if (res.timer % 60 != 0) {
          seconds = `${60 - (res.timer % 60)}`.padStart(2, "0");
        }
        
  //console.error("choix du text-content joue sur le message")
        //Countdown temps avant la pause 
        time.textContent = `${minuteS}:${seconds}`;
      });
    }
    
    updateTime();
    setInterval(updateTime, 1000);
    
    const startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", () => {
      chrome.storage.local.get(["isRunning"], (res) => {
        chrome.storage.local.set(
          {
            isRunning: !res.isRunning,
          },
          () => {
            startBtn.textContent = !res.isRunning
            //permet de changer le nom du bouton de pause à start
              ? "Pause Timer"
              : "Start Timer";
          }
        );
      });
    });
    
    const resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", () => {
      //si le timer ne tourne pas alors bouton : "start"
      chrome.storage.local.set(
        {
          timer: 0,
          isRunning: false,
        },
        () => {
          startBtn.textContent = "Start Timer";
        }
      );
    });
  