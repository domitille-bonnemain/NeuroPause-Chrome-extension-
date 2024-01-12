// afficher une notification

chrome.runtime.onMessage.addListener(data => {
    if (data.type === "notification") {
      //chrome.notifications.create("", data.options);
     
      chrome.windows.getCurrent.data = null
    }
  });

  // utiliser un eventlistener qui serait à l'écoute de $(document).ready si l'heure est dépassé