var charLength = 12;
var choice = [];
var symbols = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+','`','~','<','>','?','|'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var nums = ['1','2','3','4','5','6','7','8','9','0'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Assignment Code
const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener ("click", writePassword);

console.log(generateBtn);

function writePassword() {
  var CorrectAnswers = USelection();  //true or false? 
  var passwordText = document.querySelector("#password"); 
  
  if (CorrectAnswers) {
  var APassword = generatePassword();
  passwordText.value = APassword;
      } else {
        passwordText.value = '';
      }
        }
//Data variable functions
/*function getRandomLower() {
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
*/




function generatePassword() {
var password = "";
for(var i = 0; i < charLength; i++) {
  var randomChar = Math.floor(Math.random() * choice.length);
    password = password + choice[randomChar];
      }
      return password;
      }

function USelection() {
  choice = [];
  charLength = parseInt(prompt("How many characters 8-128?"));
  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Length must be integer in 8-128 range. GG try again noob.");
    return false;
  }
  if (confirm("Lowercase or nah?")) {
    choice = choice.concat(lower);
  }
  if (confirm("Uppercase or nah?")) {
    choice = choice.concat(upper);
  }
  if (confirm("Numbers or nah?")) {
    choice = choice.concat(nums);
  }
  if (confirm("Symbols or nah?")) {
    choice = choice.concat(symbols);
  }
  return true;
}
