// Assignment Code
var generateBtn = document.querySelector("#generate");

securePassword = "";
// Write password to the #password input
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "~!@#$%^&*+|\/";

function generatePassword(){
    
  var passwordLength = "";
  var password = "";
  // while (passwordLength <8 || passwordLength > 128 || isNaN(passwordLength))
  // {
    prompt ("Select a password length between 8 and 128 characters");
  // }
  // alert("Your secure password will be " = passwordLength + "characters long");

  upperCaseChoice = confirm("Do you want uppercase characters?")
  if (upperCaseChoice == true){
    alert("Your password will have uppercase")
    securePassword += upperCase
  }else {alert("No uppercase letters")};

  lowerCaseChoice = confirm("Do you want lowercase characters?")
  if (lowerCaseChoice == true){
    alert("Your password will have lowercase")
    securePassword += lowerCase
  }else {alert("No lowercase letters")};

  numericChoice = confirm("Do you want numeric characters?")
  if (numericChoice == true){
    alert("Your password will have numbers")
    securePassword += number
  }else {alert("No numbers")};
  
  specialChoice = confirm("Do you want special characters?");
  
};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
