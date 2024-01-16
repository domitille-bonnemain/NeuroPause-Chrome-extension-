//création d'un minuteur de 60 secondes pour 1 minute
chrome.alarms.create("NeuroPause", {
    periodInMinutes: 1 / 60,
});

//faire fonctionner l'aplication en fond
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "NeuroPause") {
        //on récupère les données choisi par l'utilisateur dans options
        chrome.storage.local.get(["timer", "isRunning", "timeScreen"], (res) => {
            if (res.isRunning) {
                // VARIABLES Countdown et lancement en fond
                let timer = res.timer + 1;
                let isRunning = true;

                // Verifie si le timer d'écran est fini
                if (timer === 60 * res.timeScreen) {
                    //le timer est à 0
                    timer = 0;
                    isRunning = false;

                    //lance notification
                    chrome.notifications.create("ScreenTimer", {
                        type: "basic",
                        title: "ScreenTimer",
                        message: `Ok for a break?`,
                        iconUrl: "icon.png",
                    });

                    ///lancer le blur
                    chrome.tabs.query({}, function (tabs) {
                        if (chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError);
                            return; // Handle the error here
                        }

                        tabs.forEach(tab => {
                            chrome.scripting.executeScript({
                                target: { tabId: tab.id },
                                function: function () {
                                    document.documentElement.style.filter = "blur(5px)";
                                }
                            });
                        });
                    });
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



chrome.storage.local.get(["timer", "isRunning", "timeScreen"], (res) => {
    chrome.storage.local.set({
        timer: "timer" in res ? res.timer : 0,
        timeScreen: "timeScreen" in res ? res.timeScreen : 1,
        isRunning: "isRunning" in res ? res.isRunning : false,
    });
});


//BLUR
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    const isEnabled = message.toggleState;
    if (isEnabled) {
        chrome.tabs.query({}, function (tabs) {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                return; // Handle the error here
            }

            console.log(tabs);
            tabs.forEach(tab => {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    function: function () {
                        document.documentElement.style.filter = "blur(5px)";
                    }
                });
            });
        });
    } else {
        chrome.tabs.query({}, function (tabs) {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                return; // Handle the error here
            }

            tabs.forEach(tab => {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    function: function () {
                        document.documentElement.style.filter = "none";
                    }
                });
            });
        });
    }
});


chrome.tabs.onCreated.addListener(function (tab) {
    console.log(tab);
});







      
      
      
      
      