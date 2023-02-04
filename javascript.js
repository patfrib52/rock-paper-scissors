let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const btn = document.querySelector('#btn');
const btns = document.querySelectorAll('button');
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const player_score = document.querySelector('.player_score');
const computer_score = document.querySelector('.computer_score');

const winner = document.querySelector('.winner');

// get player choice and computer choice
for (let i = 0; i < btns.length; i ++){
    btns[i].addEventListener('click', 
    function playersChoice() {
        
            
                       
        
        if (btnRock == btns[i]){
            playerSelection = 'rock' 
            playRound(playerSelection, computerSelection = getComputerChoice());
        }
        else if (btnPaper == btns[i]){             
            playerSelection = 'paper';
            playRound(playerSelection, computerSelection = getComputerChoice());            
        }
        else if (btnScissors == btns[i]){
            playerSelection = 'scissors';
            playRound(playerSelection, computerSelection = getComputerChoice());
        }        
    });
}
// button display text 
btnRock.textContent = 'ROCK';
btnPaper.textContent = 'PAPER';
btnScissors.textContent = 'SCISSORS';

//  Get computer choices
const computerChoice = ['rock', 'paper', 'scissors'];
function getComputerChoice(){        
    return computerChoice[~~(Math.floor(Math.random() * computerChoice.length))]; 
}

// Play next round
function playRound(playerSelection, computerSelection){      
    
   if (
        (computerSelection == 'rock' && playerSelection == 'scissors') || 
        (computerSelection == 'paper' && playerSelection == 'rock') || 
        (computerSelection == 'scissors' && playerSelection == 'paper')
    ){
        computerScore  += 1;
        computer_score.textContent = computerScore; 
        winner.textContent = (`Computer win! ${computerSelection} beats ${playerSelection} ` );
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        playerScore += 1;
        player_score.textContent = playerScore; 
        winner.textContent = (`Player win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == computerSelection){  
        winner.textContent = (`It's a tie! player: ${playerSelection} computer: ${computerSelection}`);   
    }
    //  Declare a winner
    if (playerScore === 5) {
        winner.textContent = 'Player win this round';
        btn.parentElement.removeChild(btn)
    }
    else if (computerScore === 5) {
        winner.textContent = 'Computer win this round'; 
        btn.parentElement.removeChild(btn);
    }  
    
};


