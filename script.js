// Assignment Code
var generateBtn = document.querySelector("#generate");

// assigning character sets to variables. Strings to be specific. 
var specialchar = "!@#$%^&*()_+`-=[]{}|<.>?/;,"
var numbers = "0123456789"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Write password to the #password input
function generatePassword() {
// Created an empty string for password and passwordCharacter set to be run in writepassword function later. 
    console.log('running');
    var password = "";
    var passwordChar = "";
    var passwordLengthUser = prompt("How many characters would you like your password to be? Must be between 8 and 128 characters.");
    // parseInt turns the answer from the user from a string to a numerical variable. 
    passwordLengthUser = parseInt(passwordLengthUser);

    // if user presser cancel, ends the function.
    if (!passwordLengthUser) {
        return;
    }

    // if user enters a value under 8 or above 128, the function ends. 
    if (passwordLengthUser < 8) {
        alert("Password must have more than 7 characters!")
        return "";
    };

    if (passwordLengthUser > 128) {
        alert("Password must have less than 129 characters!")
        return "";
    };

    // window.confirm used to get true or false answer from user for each of the four character sets. 

    // CharChoice variables used for if statements. 
    var lowercaseCharChoice = confirm("Would you like to add lowercase characters to the password?");

    if (lowercaseCharChoice) {
        passwordChar += lowercase;
    };

    var uppercaseCharChoice = confirm("How about some uppercase letters?");

    if (uppercaseCharChoice) {
        passwordChar += uppercase;
    };

    var specialcharactersCharChoice = confirm("Next, would you like to see some special symbols in there?");

    if (specialcharactersCharChoice) {
        passwordChar += specialchar;
    };

    var numericalCharChoice = confirm("And finally, how about numbers?");

    if (numericalCharChoice) {
        passwordChar += numbers;
    };


    // Used the function charAt so it would return a specific character at the random index from a string.
    for (var i = 0; i < passwordLengthUser; i++) {
        password += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length))
    };

    return password
}

function writePassword() {
    var password = generatePassword();

    // querySelector grabs location in DOM where the password will be input. 
    var pwTextArea = document.querySelector("#password");
    pwTextArea.value = password;

}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);