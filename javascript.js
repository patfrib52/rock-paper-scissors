let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
const computerChoice = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    
    return result = computerChoice[Math.floor(Math.random() * computerChoice.length)];   
}

function playRound(playerSelection, computerSelection){  
    if (playerSelection == computerSelection) {       
        return 'tie';
    } else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') || 
        (computerSelection == 'paper' && playerSelection == 'rock') || 
        (computerSelection == 'scissors' && playerSelection == 'paper')
    ){
        computerScore++;
        return console.log(`computer win! ${computerSelection} beats ${playerSelection}`);
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        playerScore++;
        return console.log(`player win! ${playerSelection} beats ${computerSelection}`);
    }    
}

function game(){   

    for (let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();         
        playerSelection = window.prompt('rock, paper or scissors?');
        playerSelection.toLowerCase;
        playRound(playerSelection, computerSelection);
        console.log(playerScore, computerScore);
    }
    if (playerScore > computerScore){
        console.log('player win this round');
    } else if (computerScore > playerScore){
        console.log('computer win this round');
    }else {
        console.log('its a tie')
    }
}

game();