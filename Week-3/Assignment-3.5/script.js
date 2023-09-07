function playGuessingGame(numToGuess, totalGusses = 10) {
  let countGuess = totalGusses;
  let userGuess;
  let flag = false;

  while (countGuess > 0 && !flag) {
    userGuess = prompt("Enter a number between 1 and 100.");
    if (
      userGuess === null ||
      userGuess === "" ||
      userGuess === "" ||
      isNaN(userGuess) ||
      /\s/.test(userGuess)
    ) {
      alert("Please enter a number");
      continue;
    }
    if (numToGuess < userGuess) {
      prompt(`${userGuess} is too large. Guess a smaller number.`);
    } else if (numToGuess > userGuess) {
      prompt(`${userGuess} is too small. Guess a larger number.`);
    } else {
      flag = true;
    }
    countGuess--;
  }
  if (flag) {
    return countGuess;
  } else {
    return 0;
  }
}

playGuessingGame(2);
