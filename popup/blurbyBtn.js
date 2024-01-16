// Load the saved state from chrome.storage
const button = document.getElementById("stopBlur")
/*
chrome.storage.sync.get({ isEnabled: false }, function (data) {
 data.toggle = data.isEnabled;
});


// Save the toggle state to chrome.storage when it changes
button.addEventListener("click", () => {
const isEnabled = button.toggle;
  chrome.storage.sync.set({ isEnabled: isEnabled }, function () {
    // Send a message to the background script to apply 
    console.log("button clicked")
    chrome.runtime.sendMessage({toggleState: isEnabled});
  });
});
*/

//Arrêter le  floutage 
const buttonS = document.getElementById("stopBlur");
buttonS.addEventListener("click", function () {
  console.log("button clicked")
  const isEnabled = button.toggle;
    chrome.storage.sync.set({ isEnabled: isEnabled }, function () {
      // Send a message to the background script to remove the blur effect
      chrome.runtime.sendMessage({toggleState: !isEnabled});
    });
  });










