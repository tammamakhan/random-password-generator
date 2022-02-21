// Global variables
var specialCharacters = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Function to prompt the user for the password length
function promptPasswordLength() {
  // Prompt user for password length
  var passwordLen = prompt(
    "How many characters would you like your password to contain?"
  );

  // Must be a valid number
  if (!passwordLen.trim() || isNaN(passwordLen)) {
    alert("Password length must be provided as a number.");
    return promptPasswordLength();
  }

  passwordLen = parseInt(passwordLen);

  // Must be at least 8
  if (passwordLen < 8) {
    alert("Password must be at least 8 characters.");
    return promptPasswordLength();
  }

  // At most 128
  if (passwordLen > 128) {
    alert("Password must be at most 128 characters.");
    return promptPasswordLength();
  }

  // Return the valid password length
  return passwordLen;
}

// Function to prompt user for character types
function promptCharacterTypes() {
  // Prompt user for lowercase, uppercase, numeric, and/or special characters
  var confirmLower = confirm(
    "Click OK to confirm including lowercase characters."
  );
  var confirmUpper = confirm(
    "Click OK to confirm including uppercase characters."
  );
  var confirmNumeric = confirm(
    "Click OK to confirm including numeric characters."
  );
  var confirmSpecial = confirm(
    "Click OK to confirm including special characters."
  );

  // Must select at least one of the character types
  if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    alert("Must select at least one character type.");
    return promptCharacterTypes();
  }

  // Return character type user inputs
  return {
    hasLower: confirmLower,
    hasUpper: confirmUpper,
    hasNumeric: confirmNumeric,
    hasSpecial: confirmSpecial,
  };
}

// Function to generate all possible character options for the given user criteria
function generateOptions(charTypes) {
  var options = [];

  // Check for lowercase characters
  if (charTypes.hasLower) {
    for (let i = 97; i <= 122; i++) {
      options.push(String.fromCharCode(i));
    }
  }

  // Check for uppercase characters
  if (charTypes.hasUpper) {
    for (let i = 65; i <= 90; i++) {
      options.push(String.fromCharCode(i));
    }
  }

  // Check for numeric characters
  if (charTypes.hasNumeric) {
    for (let i = 48; i <= 57; i++) {
      options.push(String.fromCharCode(i));
    }
  }

  // Check for special characters
  if (charTypes.hasSpecial) {
    options = options.concat(specialCharacters);
  }

  return options;
}

// Function to prompt user for password criteria and generate a random password
function generatePassword() {
  // Prompt user for number of characters in the password and store in variable passwordLen
  var passwordLen = promptPasswordLength();

  // Prompt user for character types
  var charTypes = promptCharacterTypes();

  // Generate a randomized password matching the selected user criteria
  var options = generateOptions(charTypes);
  var password = [];
  for (let i = 0; i < passwordLen; i++) {
    password.push(options[Math.floor(Math.random() * options.length)]);
  }

  // Return the randomly generated password
  return password.join("");
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
