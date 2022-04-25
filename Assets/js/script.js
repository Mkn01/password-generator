// Assignment Code
const generateBtn = document.querySelector("#generate");

// a prompt box to get the number of characters needed for the password

// save the number of characters that was in the input in an array

// a confirm box to confirm with the user if they would like to include numeric characters

//if yes push to array

//if no move on to next confirm box

// a confirm box to confirm with the user if they would like to include lowercase characters

//if yes push to array

//if no move on to next confirm box

// a confirm box to confirm with the user if they would like to include uppercase characters

//if yes push to array

//if no move on to next confirm box

// a confirm box to confirm with the user if they would like to include special characters

//if yes push to array

//if no move on to next confirm box

const getPasswordLength = () => {
  const passwordLength = prompt("Enter password length");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please provide a number between 8 and 128 characters!");
    return null;
  }
  return passwordLength;
};

const getPasswordCriteria = () => {
  const passwordCriteriaLowerCase = confirm(
    "Would you like lowercase letters in your password?"
  );
  const passwordCriteriaUpperCase = confirm(
    "would you like Uppercase letters in your password?"
  );
  const passwordCriteriaNumbers = confirm(
    "would you like numbers is your password?"
  );
  const passwordCriteriaSpecialCharacter = confirm(
    "Would you like any special characters in your password?"
  );

  const lowerCaseLetters = [
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
    "z",
  ];
  const uppercaseLetters = [
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
    "Z",
  ];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialCharecters = [" ","!","\",""","#","$","%","&","'","(","")"","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
  return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
};

const createRandomPassword = () => {
  return "kdUE28(@d0";
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
  if (passwordLength === null) {
    return null;
  }
  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  if (password === null) {
    return;
  }
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
