let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  const randomNumberTarget = Math.floor(Math.random() * 9);
  return randomNumberTarget;
};

const compareGuesses = (humanGuess, computerGuess, target) => {
  const humanDifference = Math.abs(humanGuess - target);
  const computerDifference = Math.abs(computerGuess - target);

  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
