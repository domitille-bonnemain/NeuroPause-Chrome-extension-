const timeScreen = document.getElementById("timeS");
const timeBreak = document.getElementById("timeB");

//sauvegarde des données
const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timer: 0,
    timeScreen: timeScreen.value,
    timeBreak: timeBreak.value,
    isRunning: false,
  });
});

//transformation des données en réponse (ds storage)
chrome.storage.local.get(["timeScreen", "timeBreak"], (res) => {
  timeScreen.value = res.timeScreen
  timeBreak.value = res.timeBreak;
});
