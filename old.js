let playerScore = 0;
let computerScore = 0;


//Computer Selection
const randomInteger = Math.floor(Math.random() * 3) + 1;
function getComputerChoice (randomInteger) {
    if (randomInteger === 1) {
        return "rock";
    } else if (randomInteger === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
const computerChoice = getComputerChoice(randomInteger); 
console.log(getComputerChoice(randomInteger));



//Player selection
const playerSelection = prompt("Choose rock, paper or scissors!");

function selectionCase (playerSelection) {
    return playerSelection.toLowerCase();
}
const playerChoice = selectionCase(playerSelection);

console.log(playerChoice);


function round (playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats paper!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats paper!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerChoice === computerChoice) {
        return "It's a draw!!!"
    }
}

function game (playerChoice, computerChoice) {
    for (let i = 0; i < 5; i++) {
        console.log (round(playerChoice, computerChoice));
    }
}

game(playerChoice, computerChoice);