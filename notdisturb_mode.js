
// Déclaration d'une variable pour suivre l'état du mode "Ne pas déranger"
let isDndMode = false;

// Fonction pour basculer entre les états actif et désactivé du mode "Ne pas déranger"
function toggleDndMode() {
  // Inversion de la valeur actuelle du mode "Ne pas déranger"
  isDndMode = !isDndMode;

  // Logique spécifique au mode "Ne pas déranger" lors de son activation ou désactivation
  if (isDndMode) {
    // À faire lorsque le mode est activé (par exemple, désactiver certaines fonctionnalités)
    console.log("Mode Ne pas déranger activé");
  } else {
    // À faire lorsque le mode est désactivé (par exemple, réactiver les fonctionnalités)
    console.log("Mode Ne pas déranger désactivé");
  }

  // Mise à jour de l'interface utilisateur pour refléter le nouvel état
  updateDndUI();
}

// Fonction pour mettre à jour l'interface utilisateur en fonction de l'état du mode "Ne pas déranger"
function updateDndUI() {
  // Récupération de l'élément HTML qui affiche l'état du mode "Ne pas déranger"
  const dndStatusElement = document.getElementById("dndStatus");

  // Mise à jour du texte pour indiquer si le mode "Ne pas déranger" est activé ou désactivé
  dndStatusElement.textContent = isDndMode ? "Mode Ne pas déranger activé" : "Mode Ne pas déranger désactivé";
}
