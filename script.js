function computerplay(){
    let play = ["rock", "paper", "scissors"];
    return play[Math.floor(Math.random() * (play.length))];
};

function PlayGame(computerSelection, playerSelection){
    if(computerSelection == "rock" && playerSelection == "rock" ||  computerSelection == "paper" && playerSelection == "paper"  || computerSelection == "scissors" && playerSelection == "sciccors"){
        alert("tie!");
    }else if(computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock" || computerSelection == "paper" && playerSelection == "scissors"){
        alert("player win!");
    }else if (computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "rock" && playerSelection == "scissors"){
        alert("computer win!");
    }else{
        alert("Enter correct choice please!");
    }
}

function game(){
    for(let i = 0; i<5; i++){
        const playerSelection = prompt("Enter choice: ");
        const computerSelection = computerplay();
        console.log(playerSelection);
        console.log(computerSelection);
        PlayGame(playerSelection, computerSelection)
    }
}


console.log(game());