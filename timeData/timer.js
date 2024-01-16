const timeScreen = document.getElementById("timeS");

//sauvegarde des données
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timer: 0,
    timeScreen: timeScreen.value,
    isRunning: false,
  });
});

//transformation des données en réponse (ds storage)
chrome.storage.local.get(["timeScreen"], (res) => {
  timeScreen.value = res.timeScreen
});
