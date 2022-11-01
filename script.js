let choices = ["rock", "paper", "scissors"]
let playerInput = prompt('Pick ---> rock, paper, or scissors')
let playerSelection = playerInput.toLowerCase;
let computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection){
    if ((playerSelection === "rock" && computerSelection === "scissors") 
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("playerwin") ;
        //return playerWin
    } else if ((playerSelection === "rock" && computerSelection === "paper") 
    || (playerSelection === "paper" && computerSelection === "scissors")
    || (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log("compwin") ;
        //return compWin
    } else if ((playerSelection === "rock" && computerSelection === "rock") 
    || (playerSelection === "paper" && computerSelection === "paper")
    || (playerSelection === "scissors" && computerSelection === "scissors")) {
        console.log("tied") ;
        //return tied 
    }
}


function getComputerChoice(){
    return (choices[Math.floor(Math.random() * choices.length)]) ;  
  }

console.log(playRound(playerSelection, computerSelection));

  