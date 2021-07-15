
function computerPlay(){
    let options = ['rock', "paper", "scissors"];
    let index = Math.floor(Math.random()*options.length);
    let selected = options[index];
    return selected;
}

function compare(playerSelection, computerSelection){
    let message =[];
    if (playerSelection === computerSelection){
        message.push("It's a tie");

        } else if (playerSelection === 'paper'){
            if (computerSelection === "rock"){
                playerScore += 1;
                message.push("You Won");
            }else{
                computerScore +=1
                message.push("You Lost");

                }

        } else if (playerSelection === 'rock'){
            if (computerSelection === "scissors"){
                playerScore += 1;
                message.push("You Won");

            }else{
                computerScore +=1
                message.push("You Lost");

                };
        
        } else if (playerSelection === "scissors"){
            if (computerSelection === "paper"){
                playerScore +=1;
                message.push("You Won");


            }else{
                computerScore +=1;
                message.push("You Lost");
                };
        }
        resultDisplay.textContent = message[0];

        switch (message[0]){
            case "It's a tie":
                    resultDisplay.style.cssText = "background-color:#e5e5e5; color: #808080";
                    break;
            case "You Lost":
                    resultDisplay.style.cssText = "background-color:lightpink; color: red"; 
                    break;
            case "You Won":
                    resultDisplay.style.cssText = "background-color:mediumaquamarine; color: green";  
                    break;
        
    }
        
    }


function updateScore(){
    
    document.getElementById("p-score").textContent = playerScore;
    document.getElementById("c-score").textContent = computerScore;}

function checkGameOver(){

    return (playerScore === 5 || computerScore === 5);
}

function finalScore() {
        if (playerScore > computerScore) {
            resultDisplay.textContent = "You won the most rounds!";
            resultDisplay.style.cssText = "background-color: green; color: white; font-weight: bold; ";
        }
        else {
            resultDisplay.textContent = "You lost to a computer ...";
            resultDisplay.style.cssText = "background-color: red; color: white; font-weight: bold;  ";}

        playerScore = 0;
        computerScore = 0; 
        updateScore();
        
        }  
        
        
        
function round(e){
        
        let playerSelection = e.target.className;
        const computerSelection = computerPlay();

        player.textContent = "You chose: " + playerSelection;
        computer.textContent = "Computer chose: " + computerSelection;

        compare(playerSelection, computerSelection);
        updateScore();
        if(checkGameOver()){
            finalScore();
        }
}

let roundSummary = document.querySelector(".summary");

const player = document.createElement("p");
const computer = document.createElement("p");
roundSummary.append(player, computer);

let resultDisplay = document.querySelector(".results");


let playerScore = 0;
let computerScore = 0;


const options = document.querySelectorAll("img");
options.forEach(option => option.addEventListener("click", round));



