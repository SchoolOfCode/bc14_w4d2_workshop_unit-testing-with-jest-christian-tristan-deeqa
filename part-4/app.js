// Do not read me until writing your tests!

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const DRAW = "draw";
const WIN = "win";
const LOSS = "loss";

export function calculateRoundResult(playerMove, computerMove) {
  if (ROCK === playerMove && ROCK === computerMove) {
    return {
      outcome: DRAW,
      message: "Both players chose rock. It's a draw.",
    };
  }
  if (playerMove === ROCK && computerMove === PAPER) {
    return {
      outcome: LOSS,
      message: "Player chose rock and computer chose paper. Computer wins.",
    };
  }
  if (playerMove === ROCK && computerMove === SCISSORS) {
    return {
      outcome: WIN,
      message: "Player chose rock and computer chose scissors. Player wins.",
    };
  }
  if ((playerMove === PAPER && computerMove === ROCK)) {
    return {
      outcome: WIN,
      message: "Player chose paper and computer chose rock. Player wins.",
    };
  }
  if (playerMove === PAPER && computerMove === PAPER) {
    return {
      outcome: DRAW,
      message: "Both players chose paper. It's a draw.",
    };
  }
  if (playerMove === PAPER && computerMove === SCISSORS) {
    return {
      outcome: LOSS,
      message: "Player chose paper and computer chose scissors. Computer wins.",
    };
  }
  if (playerMove === SCISSORS && computerMove === ROCK) {
    return {
      outcome: LOSS,
      message: "Player chose scissors and computer chose rock. Computer wins.",
    };
  }
  if (playerMove === SCISSORS && computerMove ===  PAPER) {
    return {
      outcome: WIN,
      message: "Player chose paper and computer chose paper. Player wins.",
    };
  }
  if (playerMove === SCISSORS && computerMove === SCISSORS) {
    return {
      outcome: DRAW,
      message: "Both players chose scissors. It's a draw.",
    };
  }
}

export function generateComputerMove() {
  const possibleMoves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 2);
  const randomMove = possibleMoves[randomIndex];
  return randomMove;
}

export function calculateNewScores({ ...scores }, newResult) {
  if (DRAW === newResult) {
    scores.drawCounter++;
  } else if (WIN === newResult) {
    scores.playerScoreCounter++;
  } else if (LOSS === newResult) {
    scores.computerScoreCounter++;
  }
  return scores;
}

function gameLoop() {
  let shouldPlayAgain;

  let scores = {
    playerScoreCounter: 0,
    computerScoreCounter: 0,
    drawCounter: 0,
  };

  do {
    const playerMove = prompt(`Enter either 'rock', 'paper' or 'scissors'`)
      ?.toLowerCase()
      .trim();

    if (undefined === playerMove) {
      return;
    }

    const computerMove = generateComputerMove();
    const round = calculateRoundResult(playerMove, computerMove);
    scores = calculateNewScores(scores, round);

    shouldPlayAgain = confirm(
      `${round.message} The scores are: Player: ${scores.playerScoreCounter}, Computer: ${scores.computerScoreCounter}, Draws: ${scores.drawCounter}. Do you want to play again?`
    );
  } while (shouldPlayAgain);

  alert("Thanks for playing!");
}
