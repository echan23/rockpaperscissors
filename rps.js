function getComputerChoice(){
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random()*3)];
}



function playRound(){
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Play rock, paper, or scissors").toLowerCase();
    if(computerChoice == playerChoice)
        return "Tie!";
    if(playerChoice == "rock"){
        if(computerChoice == "paper")
            return "You lose! Paper beats Rock!";
        if(computerChoice == "scissors")
            return "You win! Rock beats Scissors!";
    }
    if(playerChoice == "scissors"){
        if(computerChoice == "paper")
            return "You win! Scissors beats Paper!";
        if(computerChoice == "rock")
            return "You lose! Rock beats Scissors!";
    }
    if(playerChoice == "paper"){
        if(computerChoice == "rock")
            return "You Win! Paper beats Rock!";
        if(computerChoice == "scissors")
            return "You lose! Scissors beats Paper!";
    }    
}

function game(){
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
}

console.log(game());