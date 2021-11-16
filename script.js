// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("you clicked the button")

  var numberchar = "1234567890";
  var upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerchar = "abcdefghijklmnopqrustvwxyz";
  var specialchar = "~!@#$%^&*()_+[]|/?.<>,:";

  var length = parseInt(window.prompt("How long do you want your password? Characters 8-128"));
  if (!length) {
    alert("error - Needs a length")
return;
  }


  var lowercase = confirm("Do you want lowercase?");

  if (!lowercase) {
    alert("error - wee need to know if you want lowercase")
return;

  }


  var uppercase = confirm("Do you want uppercase?");

  if (!uppercase) {
    alert("error - we need to know if you want uppercase")
    return;

  }

  var numbers = confirm("Do you want numbers?");

  if (!numbers) {
    alert("error - we need to know if you want numbers")
    return;


  }

  var characters = confirm("Do you want special characters?");

  if (!characters) {
    alert("error - we need to know if you want numbers")
    return;


  }

  if (promptLength, confirmUppercase, confirmNumbers, confirmCharacters) {

    choices = character.concat (lowerchar,upperchar,numberchar,specialchar);
  }

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