// Function to prompt the user for the password length
function promptPasswordLength() {
  // Prompt user for password length
  var passwordLen = prompt(
    "How many characters would you like your password to contain?"
  );

  // Must be a valid number
  if (isNaN(passwordLen)) {
    alert("Password length must be provided as a number.");
    promptPasswordLength();
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

// Function to prompt user for character types
function promptCharacterTypes() {
  // Prompt user for lowercase, uppercase, numeric, and/or special characters
  var hasLower = confirm("Click OK to confirm including lowercase characters.");
  var hasUpper = confirm("Click OK to confirm including uppercase characters.");
  var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  var hasSpecial = confirm("Click OK to confirm including special characters.");

  // Must select at least one of the character types
  if (!hasLower && !hasUpper && !hasNumeric && !hasSpecial) {
    alert("Must select at least one character type.");
    promptCharacterTypes();
  }

  // Return character type user inputs
  return {
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNumeric: hasNumeric,
    hasSpecial: hasSpecial,
  };
}

function generatePassword() {
  // Prompt user for number of characters in the password and store in variable passwordLen
  var passwordLen = promptPasswordLength();

  // Prompt user for character types
  var charTypes = promptCharacterTypes();
  console.log(charTypes);
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
