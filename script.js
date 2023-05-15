//REFACTOR

const choices = ["rock", "paper", "scissors"]
const winners = [];

let round = 1;
const maxRounds = 5;

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => { 
    choice = playRound('rock');
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => { 
    choice = playRound('paper');
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => { 
    choice = playRound('scissors');
});

// Play the game, 5 rounds, console based
// function game() {
//     for (let i = 1; i <= 5; i++) {
//         playRound(i);
//     }
//     logWins();
// }

function playRound(playerSelection) {
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
    if (round === maxRounds) {
        logWins();
    } else {
        round++
    }

    console.log(round);
}

//get input from player
// function playerChoice (choice) {
//     console.log(choice);
//     let input = 
//     while(input == null) {
//         input = prompt('Type Rock, Paper or Scissors');
//     }
//     input = input.toLowerCase();
//     let check = validateInput(input);
//     while (check == false) {
//         input = prompt('Type Rock, Paper or Scissors. Spelling needs to be exact, but capitalization doesnt matter');
//         while(input == null) {
//             input = prompt('Type Rock, Paper or Scissors');
//         }
//         input = input.toLowerCase()
//         check = validateInput(input);
//     }
//     return input;
// }

//get random input for computer
function computerChoice () {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput (choice) {
    return choices.includes(choice)
}

function checkWinner (choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if (
        (choiceP === "rock" && choiceC === "scissors") || 
        (choiceP === "scissors" && choiceC === "paper") || 
        (choiceP === "paper" && choiceC === "rock")
    ){
        return "Player";
    } else {
        return "Computer";  
    } 
}

const playerChoicePara = document.getElementById('player-choice');
const computerChoicePara = document.getElementById('computer-choice');
const roundWinnerPara = document.getElementById('winner');
const currentRoundPara = document.getElementById('round');

const resultsPara = document.getElementById('results');
const playerWinsPara = document.getElementById('player-wins');
const computerWinsPara = document.getElementById('computer-wins');
const tiesPara = document.getElementById('ties');

function logWins () {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    resultsPara.textContent = "Results:"
    playerWinsPara.textContent = "Player wins:" + playerWins;
    computerWinsPara.textContent = "Computer wins:" + computerWins;
    tiesPara.textContent = "Ties:" + ties;
}

function logRound (playerChoice, computerChoice, winner, round) {
    currentRoundPara.textContent = "Round:" + round;
    playerChoicePara.textContent = "Player Chose:" + playerChoice;
    computerChoicePara.textContent = "Computer Chose:" + computerChoice;
    roundWinnerPara.textContent = winner + "Won the round";
    // .textContent = "-------------------------------");
}





// game();