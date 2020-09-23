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

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numChar = "0123456789";
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_{}~";

function generatePassword() {

  document.querySelector("#password").textContent = "";

  var length = prompt("Enter the length you wish for your password. (Between 8 - 128 characters)");
  if (length < 8 || length > 128 || length === " ") {
    alert("Please choose a password length between 8 and 128.");
  }

  var uppercase = confirm("Would you like to include uppercase letters?");
  var lowercase = confirm("Would you like to include lowercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var special = confirm("Would you like to include special characters?");

  if (uppercase === false && lowercase === false && numbers === false && special === false) {
    alert("Please select at least one criteria.");
  }

  var pool = [];

  if (uppercase) pool.push("uppercase");
  if (lowercase) pool.push("lowercase");
  if (numbers) pool.push("numbers");
  if (special) pool.push("special");

  var password = "";

  for (var i = 0; i <= length; i++) {
    var groupIndex = Math.floor(Math.random * pool.length)
    var group = null;

    if (pool[groupIndex] === "uppercase") {
      group = uppercase;
    }
    if (pool[groupIndex] === "lowercase") {
      group = lowercase;
    }
    if (pool[groupIndex] === "numbers") {
      group = numbers;
    }
    if (pool[groupIndex] === "special") {
      group = special;
    }


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