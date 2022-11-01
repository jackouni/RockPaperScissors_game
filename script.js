/* Variables:
- userWin
- computerWin
- rounds
- computerSelection
- playerSelection */

const choices = ["rock", "paper", "scissors"];
let playerWin ;
let computerWin ;
let roundCount ;
const playerSelection = prompt(("Pick ---> Rock, Paper, or Scissors").toLowerCase);
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

// This function makes the computer choose 'rock', 'paper' or 'scissors' at random.
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

// This Function plays a full game of RPS consisting of 5 rounds (best of 5).
function game(){
    for (let roundCount = 0; roundCount < 5; roundCount++) {
        return 
    }
}


// This Function decides a winner for the round RPS
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "scissors" && computerSelection === "paper")
    || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log("PlayerWin") ; 
        return playerWin ;
    } else if 
       ((playerSelection === "rock" && computerSelection === "paper") 
    || (playerSelection === "scissors" && computerSelection === "rock")
    || (playerSelection === "paper" && computerSelection === "scissors")) {
        console.log("CompWin") ;
        return compWin 
    } else if (playerSelection === computerSelection){
        console.log("Tie") ;
        return tiedRound ;
    } 
}
   



