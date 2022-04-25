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
    alert("Please provide a password between 8 and 128 characters!");
    return null;
  }
  return passwordLength;
};

const getPasswordCriteria = () => {
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
