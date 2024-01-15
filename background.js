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

        // Exécute un script dans l'onglet actif pour ajuster la luminosité
        chrome.tabs.executeScript(activeTab.id, { code: 'document.body.style.filter = "brightness(50%)"' });

        // Marque le timer comme démarré
        timerStarted = true;
      });
    }
  }
});
