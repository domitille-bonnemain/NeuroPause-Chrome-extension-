//création d'un minuteur de 60 secondes pour 1 minute
chrome.alarms.create("NeuroPause", {
    periodInMinutes: 1/60,
  });
  
  //faire fonctionner l'aplication en fond
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "NeuroPause") {
      //on récupère les données choisi par l'utilisateur dans options
        chrome.storage.local.get(["timer", "isRunning", "timeScreen", "timeBreak"], (res) => {
          if (res.isRunning) {
            // VARIABLES Countdown et lancement en fond
            let timer = res.timer + 1;
            let isRunning = true;
    
            // Verifie si le timer d'écran est fini
            if (timer === 60 * res.timeScreen) {
              //lance notification
              chrome.notifications.create("ScreenTimer", {
                type: "basic",
                title: "ScreenTimer",
                message: `take a break !`,
                iconUrl: "icon.png",
              });
  
              //le timer est à 0
              timer = 0;
             isRunning = false;
    
              // commence le timer pause, commence le timer "timeBreak" et isRunning
              chrome.storage.local.set({
                timer: 0,
                timeBreak: res.timeBreak, 
                isRunning: true,
              });
  
              //sortie des conditions apres la fin du break 
              return; 
            }
    
            // vérifie si le timer pause est fini 
            if (timer === 60 * res.timeBreak) {
              chrome.notifications.create("Break", {
                type: "basic",
                title: "Break",
                message: ` you can start again :) `,
                iconUrl: "icon.png",
              });
              timer = 0;
              isRunning = false;
  
              //stop
              return;
            }
    
            //Actualise les variables
            chrome.storage.local.set({
              timer,
              isRunning,
            });
          }
        });
      }
  });
    
    chrome.storage.local.get(["timer", "isRunning", "timeScreen", "timeBreak"], (res) => {
      chrome.storage.local.set({
        timer: "timer" in res ? res.timer : 0,
        timeScreen: "timeScreen" in res ? res.timeScreen : 5,
        timeBreak: "timeBreak" in res ? res.timeBreak : 5,
        isRunning: "isRunning" in res ? res.isRunning : false,
      });
    });