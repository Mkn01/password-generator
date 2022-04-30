// Assignment Code
const generateBtn = document.querySelector("#generate");
const upperCase = [
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
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
const getPasswordLength = () => {
  const passwordLength = parseInt(prompt("Enter password length"), 10);

  return passwordLength;
};

const getPasswordCriteria = () => {
  let passwordCriteria = [];
  const passwordCriteriaLowerCase = confirm(
    "Would you like lowercase letters in your password?"
  );
  // If the user presses ok (true) an array of lowercase letters is created.
  if (passwordCriteriaLowerCase) {
    passwordCriteria = [...passwordCriteria, ...lowerCase];
  }

  const passwordCriteriaUpperCase = confirm(
    "would you like Uppercase letters in your password?"
  );
  // If the user presses ok (true) an array of uppercase letters is created.
  if (passwordCriteriaUpperCase) {
    passwordCriteria = [...passwordCriteria, ...upperCase];
  }

  const passwordCriteriaNumbers = confirm(
    "would you like numbers is your password?"
  );
  // If the user presses ok (true) an array of lowercase letters is created.);

  if (passwordCriteriaNumbers) {
    passwordCriteria = [...passwordCriteria, ...numbers];
  }

  // If the user presses ok (true) an array of special characters is created.
  const passwordCriteriaSpecialCharacter = confirm(
    "Would you like any special characters in your password?"
  );
  if (passwordCriteriaSpecialCharacter) {
    passwordCriteria = [...passwordCriteria, ...specialCharacters];
  }
  return passwordCriteria;
};

//incomplete
const createRandomPassword = (passwordLength, passwordCriteria) => {
  console.log(passwordCriteria);
  const password = [];
  // for the password have a for loop
  for (let i = 0; i < passwordLength; i++) {
    // generate  the random index
    passwordCriteria = [Math.floor(Math.random())];
    //pick a random value from the array and push on the password array
    password.push;
    password;
  }
  // password to be returned when button is clicked
  return password.join("");
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();
  if (passwordLength > 8 && passwordLength < 128) {
    // get the password criteria
    const passwordCriteria = getPasswordCriteria();

    // create random password
    const password = createRandomPassword(passwordLength, passwordCriteria);

    return password;
  } else {
    alert("please provide valid password length");
  }
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword() || "";
  if (password === null) {
    return;
  }
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
