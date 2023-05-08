const randomInteger = Math.floor(Math.random() * 3) + 1;
console.log(randomInteger);

function getComputerChoice (randomInteger) {
    if (randomInteger === 1) {
        return "Rock";
    } else if (randomInteger === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const computerChoice = getComputerChoice(randomInteger); 

console.log(computerChoice);

const playerSelection = prompt("Choose rock, paper or scissors!");

function selectionCase (playerSelection) {
    return playerSelection.toLowerCase();
}

const playerChoice = selectionCase(playerSelection);

console.log(selectionCase(playerSelection));

function round (playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "Scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerChoice === "scissors" && computerChoice === "Rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerChoice === "scissors" && computerChoice === "Paper") {
        return "You win! Scissors beats paper!";
    } else if (playerChoice === "paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beats paper!";
    } else if (playerChoice === "paper" && computerChoice === "Rock") {
        return "You win! Paper beats rock!";
    } else if (playerChoice === "rock" && computerChoice === "Paper") {
        return "You lose! Paper beats rock!";
    }
}

console.log(round(playerChoice, computerChoice));