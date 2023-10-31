
function makeComputerChoice() {
    //randNum is 1, 2, or 3 for each game choice
    let randNum = Math.floor(Math.random() * 3) + 1;
    let choice = randNum == 1 ? "Rock" : randNum == 2 ? "Paper" : "Scissors";
    
    console.log("computer choice: " + choice);
    return choice;
}

function getUserInput() {
    let userInput = "";

    do {
        userInput = prompt("Rock, Paper, or Scissors?").toUpperCase();
    }
    //Catch missing or invalid user response
    while (!userInput || !(userInput == "ROCK" || userInput == "PAPER"
    || userInput == "SCISSORS"));

    //Capitalizes only first letter for later function reactability
    let userFirst = userInput.slice(0,1).toUpperCase();
    let userRest = userInput.slice(1).toLowerCase();
    userInput = userFirst + userRest;
    
    console.log("UserInput: " + userInput);
    return userInput;
}

function checkUserChoice(userInput, compChoice) {
    //first is tie check to reduce repitition in each choice check
    if (userInput == compChoice) {
        return "Tie!";
    } else if (userInput == "Rock") {
        return decideWinner("Paper", userInput, compChoice);
    } else if (userInput == "Paper") {
        return decideWinner("Scissors", userInput, compChoice);
    } else (userInput == "Scissors") {
        return decideWinner("Rock", userInput, compChoice);
    }
}

function decideWinner(userLoses, userInput, compChoice) {
    //tie is already checked, so its between winning and losing
    if (compChoice == userLoses) {
        return `You Lose! ${userLoses} beats ${userInput}`;
    } else {
        return `Winner! ${userInput} beats ${compChoice}`;
    }
}

do {
    alert(checkUserChoice(getUserInput(), makeComputerChoice()));
} while (confirm("Play Again?"));