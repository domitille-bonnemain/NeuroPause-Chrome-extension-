
// Écoute les messages envoyés par d'autres parties de l'extension
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // Récupère l'état actuel (activé ou désactivé) à partir du message
    const isEnabled = message.toggleState;
  
    // Si l'extension est activée
    if (isEnabled) {
      // Récupère tous les onglets ouverts dans le navigateur
      chrome.tabs.query({}, function (tabs) {
        // Gère les erreurs s'il y en a
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          return; // Gère l'erreur ici
        }
  
        // Affiche les onglets dans la console (peut être utile pour le débogage)
        console.log(tabs);
  
        // Pour chaque onglet, applique un flou à la page
        tabs.forEach(tab => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: function () {
              // Applique un flou à la page
              document.documentElement.style.filter = "blur(5px)";
            }
          });
        });
      });
    } else {
      // Si l'extension est désactivée
      chrome.tabs.query({}, function (tabs) {
        // Gère les erreurs s'il y en a
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          return; // Gère l'erreur ici
        }
  
        // Pour chaque onglet, supprime le flou de la page
        tabs.forEach(tab => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: function () {
              // Supprime le flou de la page
              document.documentElement.style.filter = "none";
            }
          });
        });
      });
    }
  });
  
  // Ajoute un écouteur pour les onglets nouvellement créés
  chrome.tabs.onCreated.addListener(function (tab) {
    // Affiche les informations sur le nouvel onglet dans la console
    console.log(tab);
  });
  