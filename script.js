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
  


function writePassword() {
  var password = generatePassword();
  var pwTextArea = document.getElementById("password");
  pwTextArea.value = password;
}

}

generateBtn.addEventListener("click", writePassword);
