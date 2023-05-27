function getComputerChoice(){
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random()*3)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    if(computerChoice == playerChoice)
        return "Tie!";
    if(playerChoice == "rock"){
        if(computerChoice == "paper"){
            computerScore++;
            return "You lose! Paper beats Rock!";
        }
        if(computerChoice == "scissors"){
            playerScore++;
            return "You win! Rock beats Scissors!";
        }
    }
    if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            playerScore++;
            return "You win! Scissors beats Paper!";
        }
        if(computerChoice == "rock"){
            computerScore++;
            return "You lose! Rock beats Scissors!";
        }
    }
    if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            playerScore++;
            return "You Win! Paper beats Rock!";
        }
        if(computerChoice == "scissors"){
            computerScore++;
            return "You lose! Scissors beats Paper!";
        }
    }    
}

const rockButton = document.createElement("button");
rockButton.textContent = "Play rock";
rockButton.addEventListener('click', () => {
   playRound("rock");
   updateScore();
});

const scissorButton = document.createElement("button");
scissorButton.textContent = "Play scissors";
scissorButton.addEventListener('click', () => {
    playRound("scissors");
});

const paperButton = document.createElement("button");
paperButton.textContent = "Play paper";
paperButton.addEventListener("click", () => {
    playRound("paper");
});

document.body.appendChild(rockButton);
document.body.appendChild(scissorButton);
document.body.appendChild(paperButton);


function updateScore(){
    const playerScorePara = document.getElementById("playerScore");
    playerScorePara.textContent = playerScore;

    const computerScorePara = document.getElementById("computerScore");
    computerScorePara.textContent = computerScore;

    if(playerScore>=5)
        alert("Player Wins!");
    if(computerScore>=5)
        alert("Compouter Wins!");
}



/*function game(){
    let score = 0;
    for(let i=0; i<5; i++){
        const round = playRound();
        console.log(round);
        if(round.includes("lose"))
            score--;
        if(round.includes("win"))   
            score++;
    }
    if(score>0)
        return "You Win!"
    else
        return "You Lost!"
}*/
