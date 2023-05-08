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
console.log(getComputerChoice(randomInteger));