
// Afficher une notification

/*chrome.runtime.onMessage.addListener(data => {
    if (data.type === "notification") {
      //chrome.notifications.create("", data.options);
     
      //chrome.windows.getCurrent.data = null
    }
  });
  */

  // utiliser un eventlistener qui serait à l'écoute de $(document).ready si l'heure est dépassé

  // Demander à Chrome l'heure et lance le timer
  chrome.runtime.sendMessage({cmd: "GET_TIME"}, response => {
      if (response.time){
        const time = new Date(response.time);
      startTimer(time)
    }
    })

    // Commence le timer dans Chrome
    const startTimer=(time)=>{
      if (time.getTime()> Date.now){
        setInterval(()=> {},5000);
      }
    }

    //Envoie le message le Timer à commencé
    const startTime=(time)=>{
      chrome.runtime.sendMessage({cmd:"START_TIMER", when: time});
        startTimer(time)
    }

    console.log(startTime)
    chrome.runtime.sendMessage({cmd:"GIVE_TIME"}, response =>{
      response= console.log("Hello")
    });



  /*Dark mode 
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.darkMode) {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { darkMode: true });
      });
    }
  });

    




