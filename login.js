const h2TextOptions = ["Hey stupid 😅", "Welcome Bhains 🥱", "Hi 💖", "Bhains loging in 🐄","Lallan is here🙄","Gainda welcomes you 🦏",
"Chai peene chalain? ☕", "Cassata khaayegi bhains? 🍨" ];

const h3TextOptions = ["hint: First hug date eg 31st dec - 3112 🤗" , "hint: What do you call me that i am not 😏" ,"hint: Which chai i prefer ☕","hint: First SOBER kiss date eg 1st june - 0106 " ];
const Passwords_array = ["0307" , "gainda" ,"adrak","0507" ];


let correct_pass_index = 0;
let currentTextIndex1 = 0;
let currentTextIndex = 0;

const submitButton = document.getElementById("submit-button");

function updateH2Text() {
  const h2Element = document.getElementById("random-text");
  h2Element.textContent = h2TextOptions[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % h2TextOptions.length;
}


function updateH3Text() {
  const h3Element = document.getElementById("random-text-hint");
  const currentTextIndex1 = Math.floor(Math.random() * h3TextOptions.length);
  correct_pass_index=currentTextIndex1;
  h3Element.textContent = h3TextOptions[currentTextIndex1];
}

function checkPass()
{

return Password;
}

updateH2Text();
setInterval(updateH2Text,2500);

updateH3Text();
window.addEventListener("load", updateH3Text );


function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
