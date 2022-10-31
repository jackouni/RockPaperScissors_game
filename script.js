/* Variables:
- userWin
- computerWin
- rounds
- computerSelection
- playerSelection */

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

let playWin 



function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "scissors" && computerSelection === "paper")
    || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log("PlayerWin")
        return i++
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") 
    || (playerSelection === "scissors" && computerSelection === "rock")
    || (playerSelection === "paper" && computerSelection === "scissors")) {
        console.log("ComputerWin")
        return i++
    }
    
    else if (playerSelection === computerSelection){
        console.log("Tie")
        return i
    }
    

  }
   
  let playerInput = "SCISSORS"
  const playerSelection = playerInput.toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));


