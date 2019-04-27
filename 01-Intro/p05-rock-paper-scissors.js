// INTRO:FUNCTIONS - PROJECT 5 - ROCK PAPER SCISSORS
/* Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results. */


// Function to get the user input
const getUserChoice = userInput => {
// Avoid errors due to string difference
    userInput = userInput.toLowerCase()
// Make sure it's the correct input
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Not a valid: Choose rock, paper or scissors!');
    }
};

// Function to generate a computer's choice:
const getComputerChoice = () => {
// Math choice for the computer. Min 0, max 2:
    let choice = Math.floor(Math.random() * (0, 3) + 0);
    switch(choice) {
    case 0:
        choice = 'rock';
        break;
    case 1:
        choice = 'paper';
        break;
    case 2:
        choice = 'scissors';
        break;
    default:
        break;
    }
    return choice;
}

// Function to compare the choices and determine the winner.
const determineWinner = (userChoice, computerChoice) => {
//   A message with the computer and the user choices.
    const message = `Your Choice: ${userChoice}.
Computer Choice: ${computerChoice}.
`;
//   Checking the conditions:
    if (userChoice === computerChoice) {
        console.log(`${message}Game was a tie.`);
    }
//   Cheat:
    if (userChoice === 'bomb') {
        console.log('Kaboom! You Won!');
    }
//   rock vs paper:
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log(`${message}Computer won.`);
        } else {
            console.log(`${message}You won!`);
        }
    }
//   paper vs scissors:
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log(`${message}Computer won.`);
        } else {
            console.log(`${message}You won!`);
        }
    }
//   scissors vs rock
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log(`${message}Computer won.`);
        } else {
            console.log(`${message}You won!`);
        }
    }
}

// Start the game
const playGame = (user) => {
    const userChoice = getUserChoice(user);
    const computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
}

// console.log(determineWinner(getUserChoice('scissors'), getComputerChoice()));
// console.log('\nNothing\n');
// console.log(playGame());
playGame('bomb');