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

const playerSelection1 = prompt("Choose your weapon: rock, paper or scissors?");
const computerSelection1 = getComputerChoice();
alert(playRound(playerSelection1, computerSelection1));

const playerSelection2 = prompt("Choose your weapon: rock, paper or scissors?");
const computerSelection2 = getComputerChoice();
alert(playRound(playerSelection2, computerSelection2));
