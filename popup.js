document.addEventListener('DOMContentLoaded', function() {
  var fontSelector = document.getElementById('fontSelector');
  var colorSelector = document.getElementById('colorSelector');
  var deleteButton = document.getElementById('deleteButton');

  // Listen for changes in font selection
  fontSelector.addEventListener('change', function() {
    var selectedFont = fontSelector.value;
    applyFont(selectedFont);
  });

  // Listen for changes in color selection
  colorSelector.addEventListener('change', function() {
    var selectedColor = colorSelector.value;
    applyColor(selectedColor);
  });

  // Listen for the delete button click
  deleteButton.addEventListener('click', function() {
    deleteElements();
  });

  // Function to apply font to the active tab
  function applyFont(font) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'applyFont', font: font });
  });
}
  
      { action: 'applyFont', font: font });
    });
  }
  
  
  // Function to apply color to the active tab
  function applyColor(color) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id,
        { action: 'applyColor', color: color });
    });
  }

  // Function to delete elements on the active tab
  function deleteElements() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id,
        { action: 'deleteElements' });
    });
  }
});
