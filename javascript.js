function getComputerChoice(){
    const n = Math.floor(Math.random() * 3);
    let i;
    if (n === 0){
        i = "ROCK";
    } else if (n === 1){
        i = "PAPER";
    } else if (n === 2){
        i = "SCISSORS";
    }
    return i;
}

function getHumanChoice(){
    let i;
    let choice = prompt("Your Choice: ");
    choice = choice.toUpperCase();
    if (choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS"){
        i = choice;
        return i;
    } else {
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;
const cw = "Computer Wins";
const pw = "Player Wins";

function playRound(){
    console.log(`Player: ${humanScore}  Computer: ${computerScore}`)
    let player = getHumanChoice();
    let computer = getComputerChoice();

    console.log(`Player: ${player}`)
    console.log(`Computer: ${computer}`)
    
    if (player === "ROCK"){
        if (computer === "PAPER"){
            console.log(cw);
            computerScore ++;
        }
        if (computer === "SCISSORS"){
            console.log(pw);
            playerScore ++;
        }
    } else if (player === "PAPER"){
        if (computer === "SCISSORS"){
            console.log(cw);
            computerScore ++;
        }
        if (computer === "ROCK"){
            console.log(pw);
            playerScore ++;
        }
    } else if (player === "SCISSORS"){
        if (computer === "ROCK"){
            console.log(cw);
            computerScore ++;
        }
        if (computer === "PAPER"){
            console.log(pw);
            playerScore ++;
        }
    } else {
        console.log("Draw.");
    }

    console.clear();
    playRound();
}

playRound();