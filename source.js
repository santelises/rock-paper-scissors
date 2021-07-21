    
function beginAnimation(){
    let i = 0;
    descs = document.querySelectorAll(".desc");
  
    
    loop();
    
    
    //loops through the desc tags
    function loop(){
        if (i < descs.length){
            let desc = descs[i];

            //adds animate class if does not current desc contain
            if (!desc.classList.contains("animate")){
                desc.classList.remove('disappear')
                desc.classList.add('animate');
            }
            //creates span for each letter from selected sentence
            let animated = document.querySelectorAll(".animate")[0]; 
            animated.innerHTML = animated.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            //selects all of the spans to iterate over
            let spans = animated.querySelectorAll(".letter");
            let char = 0;
            setInterval(create, 50);  
            let last = spans[spans.length-1];
            
            //trigges fade-in animation over all of the selected span elements
            function create(){
                if (char < spans.length){
                    let span = spans[char];
                    span.classList.add("fade-in");
                    char++; 
                }
                if (char=== spans.length){
                    clearInterval();
                    // console.log("true")
                    return;
                }

            }
            //trigger an event listener to perform addition transitions once the last span element has transitioned
            last.addEventListener("animationend", animationCheck);

            //different actions taken based off what type of animation was performed
            function animationCheck(e){
                //first animation to be trigged once the last span element has animated
                if (!desc.classList.contains("initiate")) {
                    if (e.animationName === "fade-in"){
                        desc.classList.remove("animate");
                        desc.classList.add("fade-out");
                        desc.addEventListener("animationend", animationCheck)
                        //create order heirarchy by creating second event listener 
                        
                    }
                    //second animation to be trigged once the last span element has been animated
                    if (e.animationName === "fade-out"){
                        desc.classList.add("disappear");
                        // console.log("done");
                        //the next desc can now be triggered, as all previous activities are complete
                        i++; 
                        loop();
                    };
                } else{
                    desc.classList.add("drop");
                    desc.classList.remove("animate");
                    desc.addEventListener("animationend", initiate)
                }
                function initiate(e){
                    if (e.animationName === "drop"){
                        // desc.classList.remove("animate");
                        background.classList.add("disappear");
                        container.classList.add("fade-in")
                        
                    
                    }
    
                }
            }
            
    
        if (i === descs.length){
            
            return;
        }
    }
    }
}

//functions utilized for game logic
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
            reset.innerHTML = "Play Again?"
            
        }
        else {
            resultDisplay.textContent = "You lost to a computer ...";
            resultDisplay.style.cssText = "background-color: red; color: white; font-weight: bold; "
            reset.innerHTML = "Try Again?";}

        playerScore = 0;
        computerScore = 0; 
        reset.classList.remove("letter");
        playAgain();
        // reset.innerHTML = "Refresh page to play again!"
        // setTimeout(playAgain, 500);
        // updateScore();
        
        }  
function playAgain(){
    container.classList.remove('fade-in');
    container.classList.add("disappear");

    
    reset.classList.remove("letter");
    // resultDisplay.style.cssText = "opacity:0";
    reset.addEventListener("click", ()=> {
        reset.addEventListener('click',() => location.reload());;
    })

}
               
function round(e){
        
        let playerSelection = e.target.className;
        const computerSelection = computerPlay();

        player.textContent = "You chose: " + playerSelection;
        computer.textContent = "Computer chose: " + computerSelection;

        roundSummary.classList.remove("letter");
       
        
        compare(playerSelection, computerSelection);
        updateScore();
        if(checkGameOver()){
            finalScore();
        }
}


//selected main components of page


let roundSummary = document.querySelector(".summary");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
roundSummary.append(player, computer);

let resultDisplay = document.querySelector(".results");
let playerScore = 0;
let computerScore = 0;

let background = document.querySelector(".background");
let container = document.querySelector(".container");
let reset = document.querySelector(".reset");



const options = document.querySelectorAll("img");
options.forEach(option => option.addEventListener("click", round));
window.onload = beginAnimation();


