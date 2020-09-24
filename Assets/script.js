///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
var pwLength = "";

function generatePassword() {

  var pwLength = prompt("Enter the length you wish for your password. (Between 8 - 128 characters)");
  while (pwLength < 8 || pwLength > 128 || pwLength === " ") {
    alert("Please choose a password length between 8 and 128.");
    var pwLength = prompt("Enter the length you wish for your password. (Between 8 - 128 characters)");
  }

  var uppercase = confirm("Would you like to include uppercase letters?");
  var lowercase = confirm("Would you like to include lowercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var special = confirm("Would you like to include special characters?");

  if (uppercase === false && lowercase === false && numbers === false && special === false) {
    alert("Please select at least one criteria.");
  }

  var pwChar = [];

  if (uppercase) {
    pwChar = pwChar.concat(upperChar);
  }

  if (lowercase) {
    pwChar = pwChar.concat(lowerChar);
  }

  if (numbers) {
    pwChar = pwChar.concat(numChar);
  }

  if (special) {
    pwChar = pwChar.concat(specialChar);
  }

  var password = "";

  for (var i = 0; i < pwLength; i++) {
    password = password + pwChar[Math.floor(Math.random() * pwChar.length)];

    return password;
  }
}


///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////