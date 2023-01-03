console.log("HI, let's play Rock, Paper, or Scissors!");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("This " + userInput + " is not correct choices to play!");
  }
};

console.log(getUserChoice("ROCK")); // Check if the function above works correctly!
console.log(getUserChoice("Linh Chi")); // Check if the function above works correctly!

function getComputerChoice() {
  const random_number = Math.floor(Math.random() * 3);
  if (random_number === 0) {
    return "rock";
  } else if (random_number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice()); // Check if the function above works correctly!
console.log(getComputerChoice()); // Check if the function above works correctly!

function determineWinner(userChoice, computerChoice) {
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "The User Wins! The Computer Loses!";
  } else if (
    (userChoice === "scissors" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors")
  ) {
    return "The Computer Wins! The User Loses!";
  } else if (userChoice === "bomb") {
    return "Detected Cheat Code! Then the user wins!"
  } 
  else {
    return "Draw Match!";
  }
}

console.log(determineWinner("rock", "rock")); // Check if the function above works correctly!
console.log(determineWinner("paper", "scissors")); // Check if the function above works correctly!

function playGame() {
  userChoice = getUserChoice("PaPeR");
  console.log("The User choice: " + userChoice);

  computerChoice = getComputerChoice();
  console.log("The Computer choice: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();