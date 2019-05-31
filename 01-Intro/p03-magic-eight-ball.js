// INTRO:CONDITIONALS - PROJECT 3 - MAGIC EIGHT BALL

/* In this project we will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.
*/

// MAGIC EIGHT BALL
let userName = 'Beto';
// Greet the user and check if it has a name:
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);
// The user question:
let userQuestion = 'Will I get a job fast';
console.log(`Your question is: ${userQuestion}?`);
// Generate a random number between 0 and 7:
let randomNumber = Math.floor(Math.random() * 8);
// Checking the randomNumber
// console.log(randomNumber);
// The eight ball response string:
let eightBall = '';
// Pre-string for the answer.
const answerString = 'Magic ball answer for ' + userName + ': ' || 'Magic ball answer for stranger: ';

if (userQuestion) {
  switch(randomNumber) {
    case 1:
      console.log(`${answerString}It is certain`);
      break;
    case 2:
      console.log(`${answerString}It is decidedly so`);
			break;
    case 3:
    	console.log(`${answerString}Reply hazy try again`);
    	break;
    case 4:
    	console.log(`${answerString}Cannot predict now`);
    	break;
    case 5:
    	console.log(`${answerString}Do not count on it`);
    	break;
    case 6:
    	console.log(`${answerString}My sources say no`);
    	break;
    case 7:
    	console.log(`${answerString}Outlook not so good`);
    	break;
    case 8:
    	console.log(`${answerString}Signs point to yes`);
    	break;
    default:
      console.log(`Unable to provide an answer`);
      break;
  }
} else {
  console.log('You did not made any question to the ball!');
}
