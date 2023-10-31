/*
Take user input from button
Store user input from selected button
check if user input is empty, equal to rock, paper, and scissors
if not, keep prompting till viable answer is given

Get Random Math number
Floor Random Math number
Times Random Math number by 3 then add 1 so number is 1 to 3
Assign Rock to 1
Assign Paper to 2
Assign Scissors to 3

function check takes user input and computer input
If user input is rock
    Check if computer chose paper
        If so, then computer wins
    Else if computer chose scissors
        Computer lost
    Else 
        Tie
If user input is Paper
    Check if computer chose scissors
        If so, then computer wins
    Else if computer chose rock
        computer lost
    Else
        tie
If user input is scissors
    Check if computer chose rock
        If so, then computer wins
    Else if computer chose paper
        computer lost
    Else
        tie

Can i streamline this?
check if computer and user are same
    if not, continue
if user is rock
    pass to new function what beats rock (scissors), and computerchoice
        if computer equals beat, user loses
        else computer loses
Repeat scissors and paper

*/



function makeComputerChoice() {
    let randNum = Math.floor(Math.Random * 3) + 1;
    console.log("rn: " + randNum);
    let choice = randNum == 1 ? "Rock" : randNum == 2 ? "Paper" : "Scissors";
    console.log("choice: " + choice);
    return choice;
}

function getUserInput() {
    let userInput = prompt("Rock, Paper, or Scissors?").toUpperCase();
    while (!userInput && !(userInput == "ROCK" || userInput == "PAPER"
    || userInput == "SCISSORS")) {
        userInput = prompt("Rock, Paper, or Scissors?").toUpperCase();
    }
    let userFirst = userInput.slice(0,1).toUpperCase();
    let userRest = userInput.slice(1).toLowerCase();
    userInput = userFirst + userRest;
    console.log(userInput);
}

function checkWinner(userLose, userInput, compChoice) {
    if (compChoice == userLose) {
        return `You Lose! ${userLose} beats ${userInput}`;
    } else {
        return `Winner! ${userInput} beats ${compChoice}`;
    }
}

function checkUserChoice(userInput, compChoice) {
    if (userInput == compChoice) {
        return "Tie!";
    } else if (userInput == "Rock") {
        return check("Paper", userInput, compChoice);
    } else if (userInput == "Paper") {
        return check("Scissors", userInput, compChoice);
    } else if (userInput == "Scissors") {
        return check("Rock", userInput, compChoice)
    } else {
        console.log("yuh oh");
    }
}