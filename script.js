function getComputerChoice() {
  let x = Math.floor(Math.random() * 3 + 1);
  switch (x) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function playRound(playerSelection1, computerSelection1) {
  // your code here!
  if (playerSelection1 == computerSelection1) {
    return "it's a tie";
  } else if (playerSelection1 === "rock" && computerSelection1 === "paper") {
    return "You lose, paper beats rock";
  } else if (playerSelection1 == "rock" && computerSelection1 == "scissors") {
    return "You win, rock beats scissors";
  } else if (playerSelection1 == "paper" && computerSelection1 == "rock") {
    return "You win, paper beats rock";
  } else if (playerSelection1 == "paper" && computerSelection1 == "scissors") {
    return "You lose, scissors beats paper";
  } else if (playerSelection1 == "scissors" && computerSelection1 == "paper") {
    return "You win, scissors beats paper";
  } else if (playerSelection1 == "scissors" && computerSelection1 == "rock") {
    return "You lose, rock beats scissors";
  }
}

function playerRoundscore(playerSelection1, computerSelection1) {
  if (playerSelection1 == computerSelection1) {
    return 0;
  } else if (playerSelection1 === "rock" && computerSelection1 === "paper") {
    return 0;
  } else if (playerSelection1 == "rock" && computerSelection1 == "scissors") {
    return 1;
  } else if (playerSelection1 == "paper" && computerSelection1 == "rock") {
    return 1;
  } else if (playerSelection1 == "paper" && computerSelection1 == "scissors") {
    return 0;
  } else if (playerSelection1 == "scissors" && computerSelection1 == "paper") {
    return 1;
  } else if (playerSelection1 == "scissors" && computerSelection1 == "rock") {
    return 0;
  }
}

function computerRoundscore(playerSelection1, computerSelection1) {
  if (playerSelection1 == computerSelection1) {
    return 0;
  } else if (playerSelection1 === "rock" && computerSelection1 === "paper") {
    return 1;
  } else if (playerSelection1 == "rock" && computerSelection1 == "scissors") {
    return 0;
  } else if (playerSelection1 == "paper" && computerSelection1 == "rock") {
    return 0;
  } else if (playerSelection1 == "paper" && computerSelection1 == "scissors") {
    return 1;
  } else if (playerSelection1 == "scissors" && computerSelection1 == "paper") {
    return 0;
  } else if (playerSelection1 == "scissors" && computerSelection1 == "rock") {
    return 1;
  }
}

const playerSelection1 = prompt("Choose your weapon: rock, paper or scissors?");
const computerSelection1 = getComputerChoice();
alert(playRound(playerSelection1, computerSelection1));
let playerRound1 = playerRoundscore(playerSelection1, computerSelection1);
let computerRound1 = computerRoundscore(playerSelection1, computerSelection1);

console.log(playerRound1);
console.log(computerRound1);

const playerSelection2 = prompt("Choose your weapon: rock, paper or scissors?");
const computerSelection2 = getComputerChoice();
alert(playRound(playerSelection2, computerSelection2));
let playerRound2 = playerRoundscore(playerSelection2, computerSelection2);
let computerRound2 = computerRoundscore(playerSelection2, computerSelection2);

console.log(playerRound2);
console.log(computerRound2);

const playerSelection3 = prompt("Choose your weapon: rock, paper or scissors?");
const computerSelection3 = getComputerChoice();
alert(playRound(playerSelection3, computerSelection3));
let playerRound3 = playerRoundscore(playerSelection3, computerSelection3);
let computerRound3 = computerRoundscore(playerSelection3, computerSelection3);

console.log(playerRound3);
console.log(computerRound3);

const playerSelection4 = prompt("Choose your weapon: rock, paper or scissors?");
const computerSelection4 = getComputerChoice();
alert(playRound(playerSelection4, computerSelection4));
let playerRound4 = playerRoundscore(playerSelection4, computerSelection4);
let computerRound4 = computerRoundscore(playerSelection4, computerSelection4);

console.log(playerRound4);
console.log(computerRound4);

const playerSelection5 = prompt("Choose your weapon: rock, paper or scissors?");
const computerSelection5 = getComputerChoice();
alert(playRound(playerSelection5, computerSelection5));
let playerRound5 = playerRoundscore(playerSelection5, computerSelection5);
let computerRound5 = computerRoundscore(playerSelection5, computerSelection5);
console.log(playerRound5);
console.log(computerRound5);

let playerTotalScore =
  playerRound1 + playerRound2 + playerRound3 + playerRound4 + playerRound5;
let computerTotalScore =
  computerRound1 +
  computerRound2 +
  computerRound3 +
  computerRound4 +
  computerRound5;
console.log(playerTotalScore);
console.log(computerTotalScore);

function finalround() {
  if (playerTotalScore > computerTotalScore) {
    return (
      "You win, the total score is " +
      playerTotalScore +
      " - " +
      computerTotalScore
    );
  } else if (playerTotalScore < computerTotalScore) {
    return (
      "You lose, the total score is " +
      playerTotalScore +
      " - " +
      computerTotalScore
    );
  } else {
    return "Its a tie";
  }
}
alert(finalround());

// function game() {}
