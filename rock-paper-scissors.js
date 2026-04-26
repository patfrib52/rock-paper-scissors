// Rock > scissors.
// Paper > Rock.
// Scissors > Paper.
// Computer Randomly Chooses Between Rock, Paper, Scissors,
// Compare the Two Choices and Declare a Winner.

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// This function select random selection every time this function is call.

function getComputerChoice() {
    
    let computerChoice = Math.floor(Math.random()* choices.length);
    return computerAnswer = (choices[computerChoice]);
    
};


// This function get the player selection in lowercase.

function getHumanChoice(){
    // for (let i = 0; i < choices.length; i++) {
        let humanChoice = prompt("Rock, Paper, Scissors", );
        return answer = humanChoice.toLowerCase();
        
    // }
    
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// // This function get account the score and who win.

function playRound(humanChoice, computerChoice) {
   
    console.log(humanChoice, computerChoice);

 switch (humanChoice + computerChoice) {
     // you win.
     case "rockscissors":
         case "paperrock":
             case "scissorspaper":
                 console.log("you win!")
                 break;
                 // you loose.
                 case "scissorsrock":
                     case "rockpaper":
                         case "paperscissors":
                             console.log("you loose!")
                             break;
                             // its a tie.
                             default:
                                 console.log("its a tie!");
 }

}

playRound(humanSelection, computerSelection);
