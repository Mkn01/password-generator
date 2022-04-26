// Assignment Code
const generateBtn = document.querySelector("#generate");

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
  // If the user presses ok (true) an array of lowercase letters is created.
  if (true) {
    const lowerCase = [
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
  }

  const passwordCriteriaUpperCase = confirm(
    "would you like Uppercase letters in your password?"
  );
  // If the user presses ok (true) an array of uppercase letters is created.
  if (true) {
    const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const passwordCriteriaNumbers = confirm(
    "would you like numbers is your password?"
  );
  // If the user presses ok (true) an array of lowercase letters is created.
  if (true) {
    const numbers = ["0","1","2","3","4","5","6","7","8","9"]

  const passwordCriteriaSpecialCharacter = confirm(
    "Would you like any special characters in your password?"
  );


  passwordCriteria = math.floor(math.random() * passwordLength);

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
