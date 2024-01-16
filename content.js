// Attend que la fenêtre soit entièrement chargée
window.onload = function() {
  // Utilise l'API de stockage synchronisé de Chrome pour récupérer des données
  chrome.storage.sync.get({ isEnabled: false }, function (data) {
      // Récupère la valeur stockée pour la clé 'isEnabled'
      let isEnabled = data.isEnabled;

      // Envoie un message à l'arrière-plan de l'extension avec la valeur de 'isEnabled'
      chrome.runtime.sendMessage({ isEnabled: isEnabled });
  });
}



  








  