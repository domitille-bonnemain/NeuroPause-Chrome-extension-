
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  const isEnabled = message.toggleState;
  if (isEnabled) {
    chrome.tabs.query({}, function (tabs) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return; // Handle the error here
      }

      console.log(tabs);
      tabs.forEach(tab => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: function () {
            document.documentElement.style.filter = "brightness(0.4)";
          }
        });
      });
    }); 
  } else {
    chrome.tabs.query({ }, function (tabs) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return; // Handle the error here
      }

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


chrome.tabs.onCreated.addListener(function (tab) {
  console.log(tab);
});











