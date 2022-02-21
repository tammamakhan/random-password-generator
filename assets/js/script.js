// Assignment code here
function promptPasswordLength() {
  // Prompt user for password length
  var passwordLen = prompt(
    "How many characters would you like your password to contain?"
  );

  // Must be a valid number
  for (var c in passwordLen) {
    if (c < "0" || c > "9") {
      alert("Invalid password length.");
      promptPasswordLength();
    }
  }

  passwordLen = parseInt(passwordLen);

  // Must be at least 8
  if (passwordLen < 8) {
    alert("Password must be at least 8 characters.");
    promptPasswordLength();
  }

  // At most 128
  if (passwordLen > 128) {
    alert("Password must be at most 128 characters.");
    promptPasswordLength();
  }

  // Return the valid password length
  return passwordLen;
}

function generatePassword() {
  // Prompt user for number of characters in the password and store in variable passwordLen
  var passwordLen = promptPasswordLength();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
