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

console.log(getComputerChoice());
console.log(getHumanChoice());