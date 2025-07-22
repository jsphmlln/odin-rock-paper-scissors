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

function playRound(playerChoice){
    let computerChoice = getComputerChoice()

    player.textContent = `Player: ${playerChoice}`
    computer.textContent = `Computer: ${computerChoice}`

    if (playerChoice === "ROCK"){
        if (computerChoice === "PAPER"){
            result.textContent = `Result: ${cw}`
            computerScore ++
        }
        if (computerChoice === "SCISSORS"){
            result.textContent = `Result: ${pw}`
            humanScore ++
        }
        if (computerChoice === "ROCK"){
            result.textContent = `Result: Draw`
        }

    } else if (playerChoice === "PAPER"){
        if (computerChoice === "SCISSORS"){
            result.textContent = `Result: ${cw}`
            computerScore ++
        }
        if (computerChoice === "ROCK"){
            result.textContent = `Result: ${pw}`
            humanScore ++
        }
        if (computerChoice === "PAPER"){
            result.textContent = `Result: Draw`
        }

    } else if (playerChoice === "SCISSORS"){
        if (computerChoice === "ROCK"){
            result.textContent = `Result: ${cw}`
            computerScore ++
        }
        if (computerChoice === "PAPER"){
            result.textContent = `Result: ${pw}`
            humanScore ++
        }
        if (computerChoice === "SCISSORS"){
            result.textContent = `Result: Draw`
        }
    }
    scores.textContent = `Player: ${humanScore}  Computer: ${computerScore}`


    if (humanScore === 5 || computerScore === 5){
        if (humanScore === 5){
            alert(`${humanScore}/${computerScore}\nPlayer Wins the Game!`)
        } else {
            alert(`${humanScore}/${computerScore}\nComputer Wins the Game!`)
        }
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

//===============================================================//

let humanScore = 0
let computerScore = 0
const cw = "Computer Wins"
const pw = "Player Wins"

const container = document.querySelector("#container")

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.onclick = () => {playRound("ROCK")}
paper.onclick = () => {playRound("PAPER")}
scissors.onclick = () => {playRound("SCISSORS")}

const scores = document.createElement("div")
scores.textContent = "Player: 0  Computer: 0"
container.appendChild(scores);