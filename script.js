// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword(){
    
  var passwordLength = "";
  while (passwordLength <8 || passwordLength > 128 || isNaN(passwordLength)){
    prompt ("Select a password length between 8 and 128 characters");
  }
  
};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
