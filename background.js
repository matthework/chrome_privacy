// keywords to speech

var active = false;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  if (!active) {
    chrome.browserAction.setIcon({path:"icon2.png"});
    chrome.tabs.executeScript(null, {
    file: "modifySource.js"
    }, function() {
      // If get an error
      if (chrome.runtime.lastError) {
        console.log('Error:' + chrome.runtime.lastError.message);
      }
    });
    active = true;
    
  } else {
    chrome.browserAction.setIcon({path:"icon1.png"});
    chrome.tabs.executeScript(null, {
    file: "myScript.js"
    }, function() {
      // If get an error
      if (chrome.runtime.lastError) {
        console.log('Error:' + chrome.runtime.lastError.message);
      }
    });
    active = false;
  }

});

