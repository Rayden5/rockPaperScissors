//Gets computer choice
function makeComputerChoice() {
    //Sets randNum to 1, 2, or 3
    let randNum = Math.floor(Math.random() * 3) + 1;
    //sets computer choice based on randNum value
    let choice = randNum == 1 ? "Rock" : randNum == 2 ? "Paper" : "Scissors";
    //computer choice is printed to console if you're curious
    console.log("choice: " + choice);
    return choice;
}

//Gets User Choice with error handling if player is snarky
function getUserInput() {
    let userInput = "";

    //prompt for user choice. if user gives invalid response
    //itll keep repeating until valid response is given
    do {
        userInput = prompt("Rock, Paper, or Scissors?").toUpperCase();
    }
    while (!userInput || !(userInput == "ROCK" || userInput == "PAPER"
    || userInput == "SCISSORS"));

    //converts user response to first letter capitalized string
    //for later function reactability
    let userFirst = userInput.slice(0,1).toUpperCase();
    let userRest = userInput.slice(1).toLowerCase();
    userInput = userFirst + userRest;
    //prints users finished input if curious
    console.log(userInput);
    return userInput;
}

//Checks users choice and reacts accordingly
function checkUserChoice(userInput, compChoice) {
    //checking for tie first makes rest of checks simplified
    if (userInput == compChoice) {
        return "Tie!";
    } else if (userInput == "Rock") {
        //sends the choice that would make user lose
        //compChoice is sent for comparative
        //userInput only sent for result string
        return checkWinner("Paper", userInput, compChoice);
    } else if (userInput == "Paper") {
        return checkWinner("Scissors", userInput, compChoice);
    } else if (userInput == "Scissors") {
        return checkWinner("Rock", userInput, compChoice)
    } else {
        //only hits if something went wrong
        console.log("yuh oh");
    }
}

//Determines the winner of the game
function checkWinner(userLose, userInput, compChoice) {
    //since tie is already checked, only have to check if compChoice
    //is or isnt the choice to make user lose
    if (compChoice == userLose) {
        return `You Lose! ${userLose} beats ${userInput}`;
    } else {
        return `Winner! ${userInput} beats ${compChoice}`;
    }
}

//runs the game once, then checks if user wants to keep playing
//game repeats until user doesn't want to play anymore
do {
    alert(checkUserChoice(getUserInput(), makeComputerChoice()));
} while (confirm("Play Again?"));