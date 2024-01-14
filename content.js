// Attendez que la fenêtre soit entièrement chargée avant d'exécuter le code suivant
window.onload = function() {
    // Récupérer la valeur de isEnabled du stockage synchronisé
    chrome.storage.sync.get({ isEnabled: false }, function (data) {
        // Extraire la valeur de isEnabled à partir des données récupérées
        let isEnabled = data.isEnabled;

        // Envoyer un message à l'arrière-plan avec l'état actuel
        chrome.runtime.sendMessage({ toggleState: isEnabled });
    });
}
