// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function generatepassword() {
  var Characteramount = prompt("how many characters for your password?")
  var hasUppercase = confirm("do you want it to contain uppercase letters");
  var hasLowercase = confirm("how about lowercase?")
  var specialcharacter = confirm("special characters?")
  var numeric = confirm("maybe some numbers?")
  var passwordOptions = ""
  var result = ""

  var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseletters = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "1234567890"
  var symbols = "!@#$%^&*()[]}{?><=+~`|/"

  if (hasUppercase === false && hasLowercase === false && specialcharacter === false && numeric === false) {
    alert("not a valid entry")
    return
  }


  if (hasUppercase) {
    passwordOptions += uppercaseletters
  }

  if (hasLowercase) {
    passwordOptions += lowercaseletters
  }

  if (numeric) {
    passwordOptions += numbers
  }

  if (specialcharacter) {
    passwordOptions += symbols
  }
  for (var i = 0; i < parseInt(Characteramount); i++) {
    result += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));

  }
  return result

}



function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
