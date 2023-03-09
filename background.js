chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      chrome.tabs.executeScript(tabId, {file: 'content.js'}, function() {
        chrome.tabs.sendMessage(tabId, {message: 'blurDiv', selector: 'div.x6prxxf.x1fc57z9.x1yc453h.x126k92a.xzsf02u'});
      });
    }
  });
  