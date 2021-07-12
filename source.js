const prompt = require('prompt-sync')();

function computerPlay(){
    let options = ['rock', "paper", "scissors"];
    let index = Math.floor(Math.random()*options.length);
    let selected = options[index];
    return selected;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie";
        } else if (playerSelection === 'paper'){
            if (computerSelection === "rock"){
                playerScore += 1;
            }else{
                computerScore +=1
                };

        } else if (playerSelection === 'rock'){
            if (computerSelection === "scissors"){
                playerScore += 1;
            }else{
                computerScore +=1
                };
        
        } else if (playerSelection === "scissors"){
            if (computerSelection === "paper"){
                playerScore +=1;
            }else{
                computerScore +=1
                };
        }
        
    if (playerScore > computerScore){
        return `You Won! ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
    } else {
        return `You Lost! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)}` 
        }
}

function game(){
    let rounds = 0; 
    while (rounds < 5){
        let playerInput = prompt("Rock, Paper, Scissors? ");
        let playerSelection = playerInput.toLowerCase();
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        rounds +=1;
    } if (playerScore > computerScore){
        console.log("You won the most rounds");
    } else {
        console.log("You lost to a computer... :(")
    }
}


let playerScore = 0;
let computerScore = 0;
game();
