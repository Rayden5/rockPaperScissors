# rockPaperScissors

Simple prompt game with useless buttons for now. Gets computer choice with
a random number generator so user has a 1/3 chance to get any option. User
prompt allows for invalid responses, any cased response, and no response.
Made multiple game functions for less repeated code. By checking for tie
before any other choices, reduces code and checks overall. If not a tie,
that leaves only win or lose, which is checked in checkWinner function. Win
is an easy if/else check since checkUserChoice checks the users input and what
is needed to beat them. Game is endlessly replayable with a simple do/while
loop calling the game to repeat until user cancels Play Again.