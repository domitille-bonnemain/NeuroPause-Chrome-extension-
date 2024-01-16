
const button = document.getElementById("start");

// Load the saved state from chrome.storage
chrome.storage.sync.get({ isEnabled: false }, function (data) {
  button.toggle = data.isEnabled;
});

// Save the toggle state to chrome.storage when it changes
button.addEventListener("click", function () {
  
const isEnabled = button.toggle;
  chrome.storage.sync.set({ isEnabled: isEnabled }, function () {
    // Send a message to the background script to apply or remove the blur effect
    chrome.runtime.sendMessage({toggleState: isEnabled});
  });
});

//Arrêter le  floutage 
const buttonS = document.getElementById("stop");
buttonS.addEventListener("click", function () {
  
  const isEnabled = button.toggle;
    chrome.storage.sync.set({ isEnabled: isEnabled }, function () {
      // Send a message to the background script to apply or remove the blur effect
      chrome.runtime.sendMessage({toggleState: !isEnabled});
    });
  });










