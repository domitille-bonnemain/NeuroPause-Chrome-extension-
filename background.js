// Variable pour stocker l'état du timer
let timerStarted = false;

// Écoute les messages provenant de la popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "startTimer") {
    // Vérifie si le timer est déjà démarré
    if (!timerStarted) {
      // Récupére l'onglet actif
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];

        // Exécute la fonction dans le contexte de la page
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: function() {
            // Appele votre fonction pour ajuster la luminosité
            adjustBrightnessAtTimerStart();
          }
        });

        // Marque le timer comme démarré
        timerStarted = true;
      });
    }
  }
});

