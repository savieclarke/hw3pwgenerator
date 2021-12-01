// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("you clicked the button")

  // var numberchar = "1234567890";
  var numberchar = ["1", "2", "4", "5", "6", "7", "8", "9", "0"];
  var upperchar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerchar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "u", "s", "t", "v", "w", "x", "y", "z"];
  var specialchar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "[", "]", "|", "?", ".", "<", ">", ","];
  var choices = [];
  var actualchoices = [];

  var length = parseInt(window.prompt("How long do you want your password? Characters 8-128"));
  if (!length) {
    alert("error - Needs a length")
    return;
  }

  if (length > 128) {
    alert("error - Must be less than 128 characters")
    return;

  }

  var lowercase = confirm("Do you want lowercase?"); // true or false
  // falsey - false, 0, "", null, undefined
  if (lowercase) {
    choices = choices.concat(lowerchar)
  }

  var uppercase = confirm("Do you want uppercase?");

  if (uppercase) {
    choices = choices.concat(upperchar)
  }

  var numbers = confirm("Do you want numbers?");

  if (numbers) {
    choices = choices.concat(numberchar)
  }

  var specials = confirm("Do you want special characters?");

  if (specials) {
    choices = choices.concat(specialchar)
  }

  if (!lowercase && !uppercase && !numbers && !specials) {
    alert("You must choose at least one category of characters!");
    return;
  }
  // generate random password using choices array
  var password = "";

  for (var i = 0; i < length; i++) {
  
    password += choices[Math.floor(Math.random() * choices.length)]
  }

    
  return password

};
  







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);