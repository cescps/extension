// This code will change the font and color of the text on the page.

var fonts = ["Arial", "Times New Roman", "Verdana"];
var colors = ["black", "red", "blue"];

var currentFont = fonts[0];
var currentColor = colors[0];

document.querySelectorAll("body").forEach(function(element) {
  element.style.fontFamily = currentFont;
  element.style.color = currentColor;
});

// This function will be called when the user clicks on the extension icon.

function changeFont() {
  var newFont = prompt("Select a font:", currentFont);
  if (newFont) {
    currentFont = newFont;
    updateFonts();
  }
}

// This function will be called when the user clicks on the extension icon.

function changeColor() {
  var newColor = prompt("Select a color:", currentColor);
  if (newColor) {
    currentColor = newColor;
    updateColors();
  }
}

// This function will update the fonts and colors on the page.

function updateFonts() {
  document.querySelectorAll("body").forEach(function(element) {
    element.style.fontFamily = currentFont;
  });
}

// This function will update the colors on the page.

function updateColors() {
  document.querySelectorAll("body").forEach(function(element) {
    element.style.color = currentColor;
  });
}
