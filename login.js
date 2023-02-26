const h2TextOptions = ["Hey stupid 😅", "Welcome Bhains 🥱", "Hi 💖", "Bhains loging in 🐄","Lallan is here🙄","Gainda welcomes you 🦏",
"Chai peene chalain? ☕", "Cassata khaayegi bhains? 🍨" ];

const h3TextOptions = ["hint: First hug date eg 31st dec - 3112" , "hint: What do you call me?" ,"hint: Which chai i prefer","hint: First sober kiss date eg 1st june - 0106" ];

let currentTextIndex1 = 0;
let currentTextIndex = 0;

function updateH2Text() {
  const h2Element = document.getElementById("random-text");
  h2Element.textContent = h2TextOptions[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % h2TextOptions.length;
}

function updateH3Text() {
  const h3Element = document.getElementById("random-text-hint");
  h3Element.textContent = h3TextOptions[currentTextIndex1];
  currentTextIndex1 = (currentTextIndex1 + 1) % h3TextOptions.length;
}

updateH3Text();
setInterval(updateH3Text,15000);

updateH2Text();
setInterval(updateH2Text,2500); // Call the function every 10 seconds to update the text

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


 // Call the function every 10 seconds to update the text
