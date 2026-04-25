// Rock > scissors;
// Paper > Rock;
// Scissors >Paper;

// Player Choose Between Rock, Paper, Scissors
// Computer Randomly Chooses Between Rock, Paper, Scissors
// Compare the Two Choices and Declare a Winner




const choices = ["Rock", "Paper", "Scissors"];

// Create a Function that automate the Computer Answer,
// and return the choice.

function getComputerAnswer(answer){
    for (let i = 0; i < choices.length; i++) {

        let computerChoice = choices[i];
        console.log(computerChoice);
    }
    };
 
getComputerAnswer();