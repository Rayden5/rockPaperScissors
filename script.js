//Gets computer choice for the game
function makeComputerChoice() {
    //randNum is 1, 2, or 3 for each game choice
    let randNum = Math.floor(Math.random() * 3) + 1;
    let choice = randNum == 1 ? "Rock" : randNum == 2 ? "Paper" : "Scissors";
    //computer choice is printed to console if you're curious
    console.log("choice: " + choice);
    return choice;
}

//Gets User Choice for the game
function getUserInput() {
    let userInput = "";

    //prompt for user choice. Loop for if player gives no response or
    //invalid response
    do {
        userInput = prompt("Rock, Paper, or Scissors?").toUpperCase();
    }
    while (!userInput || !(userInput == "ROCK" || userInput == "PAPER"
    || userInput == "SCISSORS"));

    //converts user response for later function readibility
    let userFirst = userInput.slice(0,1).toUpperCase();
    let userRest = userInput.slice(1).toLowerCase();
    userInput = userFirst + userRest;
    //prints users finished input if curious
    console.log(userInput);
    return userInput;
}

//Checks user choice to see what computer needs to lose
function checkUserChoice(userInput, compChoice) {
    //tie check to reduce repitition in each choice check
    if (userInput == compChoice) {
        return "Tie!";
    } else if (userInput == "Rock") {
        //first arguement for easy player loss checking
        return decideWinner("Paper", userInput, compChoice);
    } else if (userInput == "Paper") {
        return decideWinner("Scissors", userInput, compChoice);
    } else if (userInput == "Scissors") {
        return decideWinner("Rock", userInput, compChoice);
    } else {
        //only hits if something went wrong
        console.log("yuh oh");
    }
}

//Decides winner for result string
function decideWinner(userLose, userInput, compChoice) {
    //since tie is already checked, only have to check if compChoice
    //is or isnt the choice to make user lose
    if (compChoice == userLose) {
        return `You Lose! ${userLose} beats ${userInput}`;
    } else {
        return `Winner! ${userInput} beats ${compChoice}`;
    }
}

//Runs game. duh
do {
    alert(checkUserChoice(getUserInput(), makeComputerChoice()));
} while (confirm("Play Again?"));