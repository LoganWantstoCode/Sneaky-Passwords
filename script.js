// Assignment Code
const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener ("click", writePassword);

console.log(generateBtn);

//Data variable functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbol ='!@#$%^&*(){}[]=<>/,.';
  return symbol[Math.floor(Math.random() * symbol.length)];
}
var USelection = '';
var newPassword = '';




function generatePassword() {
  USelection = '';
  var Choice = +window.prompt("8-128?");
  console.log(Choice);
  console.log(typeof Choice);
  Choice = parseInt(Choice);
    if (typeof Choice === 'number') {
      if (+Choice <= 128 && Choice >= 8) {}
          else if (Object.is(Choice, NaN)) {
          alert("Nice going, not a number so not going to work");
          console.log("failure, not a number");
          }
          else {
            window.prompt("Try again, 8-128 please");
            console.log('number not in specified range')
              }
                }
//selection
const lower = window.confirm("Include Lowercase OK=Y or Cancel=N");
const upper = window.confirm("Include Uppercase OK=Y or Cancel=N");
const nums = window.confirm("Include numbers OK=Y or Cancel=N");
const symbols = window.confirm("Include Symbols OK=Y or Cancel=N");

if (lower) {
  USelection = USelection + getRandomLower;
}
if (upper) {
  USelection = USelection + getRandomUpper;
}
if (nums) {
  USelection = USelection + getRandomNumber;
}
if (symbols) {
  USelection = USelection + getRandomSymbol;
}

var length = Choice;
for (var i = 1; i <= length; i++) {
  var generatePassword = Math.floor(Math.random() * USelection.length);
  newPassword = newPassword + USelection[generatePassword];
  console.log(newPassword);
}
return newPassword;
} 
 


function writePassword() {
  newPassword = "";
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}
