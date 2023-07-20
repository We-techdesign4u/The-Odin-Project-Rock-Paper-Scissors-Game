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

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection == computerSelection) {
    return "it's a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose, paper beats rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win, rock beats scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win, paper beats rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose, scissors beats paper";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win, scissors beats paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose, rock beats scissors";
  }
}

const playerSelection = prompt("Choose your weapon: rock, paper or scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
