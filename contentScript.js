chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('Received message:', request);

// contentScript.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'applyFont') {
    document.body.style.fontFamily = request.font;
  }
  else if (request.action === 'applyColor') {
    document.body.style.color = request.color;
  }
  else if (request.action === 'deleteElements') {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].remove();
    }
  }
});
