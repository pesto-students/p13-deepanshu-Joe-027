function isStrongPassword(password) {
  let uppercaseRegx = /[A-Z]/;
  let spaceRegex = /\s/;
  if (password === "" || spaceRegex.test(password)) {
    console.log("The password cannot be empty or spaces.");
    return false;
  } else if (password.length < 8) {
    console.log("The password should contain more than 8 characters.");
    return false;
  } else if (
    password.indexOf("password") === 0 ||
    password.indexOf("PASSWORD") === 0
  ) {
    console.log("The password should not contain the keyword password.");
    return false;
  } else if (!uppercaseRegx.test(password)) {
    console.log("The password should contain atleast one UPPERCASE.");
    return false;
  } else {
    console.log("The password is valid.");
    return true;
  }
}

isStrongPassword("Qwerty");
isStrongPassword("passwordQwerty");
