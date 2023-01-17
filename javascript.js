// This function return the computer choice by a selection of random number from 1-3.

function getComputerChoice() {
    let computerChoice = 0;
    computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        computerChoice = "rock";      
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
        return computerChoice;
};
function getPlayerChoice() {
    let playerChoice = 0;
    playerChoice = Math.floor(Math.random() * 3) + 1;
    if (playerChoice === 1) {
        playerChoice = "rock";      
    } else if (playerChoice === 2) {
        playerChoice = "paper";
    } else {
        playerChoice = "scissors";
    }
        return playerChoice;
};


function playRound(playerSelection, computerSelection) {
    if (playerSelection ===  computerSelection) {
        return("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        return("You lose! " + computerSelection + " beats " + playerSelection);
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return("You win! " + playerSelection + " beats " + computerSelection);
    }
};
playerSelection = getPlayerChoice();
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));