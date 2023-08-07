// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialchar = [
"!",
"@",
"#",
"$",
"%",
"^",
"&",
"*",
"(",
")",
"_",
"+",
"`",
"-",
"=",
"[",
"]",
"{",
"}",
"|",
"<",
",",
".",
">",
"?",
"/",
";",
"'"  
]

var num = [
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9"
]

var lowercase = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]

var uppercase = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]

// Write password to the #password input
function generatePassword() {
 
  var password = "";
  var passwordChar = "";
  var passwordLengthUser = prompt("How many characters would you like your password to be? Must be between 8 and 128 characters.");
  passwordLengthUser = parseInt(passwordLengthUser);

  if (passwordLengthUser < 8) {
      alert("Password must have more than 7 characters!")
      return "";
  }

  if (passwordLengthUser > 128) {
      alert("Password must have less than 129 characters!")
      return "";
  }

  var lowercaseCharChoice = confirm("Would you like to add lowercase characters to the password?");

  if (lowercaseCharChoice) {
      passwordChar += lowercase;
  }
  
  var uppercaseCharChoice = confirm("How about some uppercase letters?");

  if (uppercaseCharChoice) {
      passwordChar += uppercase;
  }

  var specialcharactersCharChoice = confirm("Next, would you like to see some special symbols in there?");

  if (specialcharactersCharChoice) {
      passwordChar += specialchar;
  }

  var numericalCharChoice = confirm("And finally, how about numbers?");

  if (numericalCharChoice) {
      passwordChar += num;
  }

  for (var i = 0; i < passwordLengthUser; i++) {
      password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }


function writePassword() {
  var password = generatePassword();
  var pwTextArea = document.getElementById("password");
  pwTextArea.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}


