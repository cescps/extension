document.addEventListener('DOMContentLoaded', function() {
  var fontSelector = document.getElementById('fontSelector');
  var colorSelector = document.getElementById('colorSelector');
  var deleteButton = document.getElementById('deleteButton');
  var applyButton = document.getElementById('applyButton');

  // Listen for changes in font selection
  fontSelector.addEventListener('change', function() {
    applyFont(fontSelector.value);
  });

  // Listen for changes in color selection
  colorSelector.addEventListener('change', function() {
    applyColor(colorSelector.value);
  });

  // Listen for the delete button click
  deleteButton.addEventListener('click', function() {
    deleteElements();
  });

  // Listen for the apply button click
  applyButton.addEventListener('click', function() {
    applyChanges();
  });

  // Function to apply font to the active tab
  function applyFont(font) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'applyFont', font: font });
    });
  }

  // Function to apply color to the active tab
  function applyColor(color) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'applyColor', color: color });
    });
  }

  // Function to delete elements on the active tab
  function deleteElements() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'deleteElements' });
    });
  }

  // Function to apply all changes
  function applyChanges() {
    applyFont(fontSelector.value);
    applyColor(colorSelector.value);
    deleteElements();
  }
});
