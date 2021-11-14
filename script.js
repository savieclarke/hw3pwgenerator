// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("you clicked the button")

  var length = parseInt(window.prompt("How long do you want your password? Characters 8-128"));
  if (!length) {
    alert("error", "Needs a length")


  }

  var lowercase = confirm("Do you want lowercase?");

  if (!lowercase) {
    alert("error", "Needs a length")


  }


  var uppercase = confirm("Do you want uppercase?");

  var numbers = confirm("Do you want numbers?");

  var characters = confirm("Do you want special characters?");

  

  return "the generated password"

};






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);