let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
}

function compareGuesses(user_guess, comp_guess, secret_target) {
  distance_user = getAbsoluteDistance(user_guess, secret_target);
  distance_comp = getAbsoluteDistance(comp_guess, secret_target);

  if (distance_user > distance_comp) {
    return false;
  } else if (distance_comp > distance_user) {
    return true;
  } else {
    return true;
  }
}

function updateScore(winner_name) {
  switch (winner_name) {
    case "human":
      humanScore += 1;
      break;
    case "computer":
      computerScore += 1;
      break;
    default:
      console.log("Enter the other value of str");
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}

function checkUserGuess(user_guess) {
  if ((0 <= user_guess) && (user_guess <= 9)) {
    return true;
  }
  else {
    return false;
  }
}