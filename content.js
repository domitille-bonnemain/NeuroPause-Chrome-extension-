window.onload = function() {
    chrome.storage.sync.get({ isEnabled: false }, function (data) {
        let isEnabled = data.isEnabled;
        chrome.runtime.sendMessage({ isEnabled: isEnabled});
      });
}


  








  