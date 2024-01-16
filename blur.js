// Écouteur d'événement pour les messages provenant de l'extension
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Vérifie si le basculement (toggle) est activé
  const isEnabled = message.toggleState;

  // Si le basculement est activé
  if (isEnabled) {
    // Récupère tous les onglets du navigateur
    chrome.tabs.query({}, function (tabs) {
      // Gère les erreurs éventuelles
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return; // Gère l'erreur ici
      }

      // Affiche les informations sur les onglets dans la console
      console.log(tabs);

      // Applique un filtre de luminosité à chaque onglet
      tabs.forEach(tab => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: function () {
            document.documentElement.style.filter = "blur(5px)";
          }
        });
      });
    });
  } else { // Si le basculement est désactivé
    // Récupère tous les onglets du navigateur
    chrome.tabs.query({}, function (tabs) {
      // Gère les erreurs éventuelles
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return; // Gère l'erreur ici
      }

      // Applique le filtre "none" pour réinitialiser la luminosité sur chaque onglet
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

// Écouteur d'événement pour la création d'un nouvel onglet
chrome.tabs.onCreated.addListener(function (tab) {
  // Affiche les informations sur le nouvel onglet dans la console
  console.log(tab);
});










