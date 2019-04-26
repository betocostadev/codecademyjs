// Notes of interesting parts of JavaScript - CODECADEMY
/* FALSY JavaScript values:
number = 0;
NaN
null
undefined
empty string */

console.log('Falsy JS values: 0, null, undefined, empty string and NaN\n');
/* short-circuit evaluation
This is a way to use a variable with an || comparison. */

console.log('short-circuit evaluation:')
let tool = ''; // Notice that it is and empty string, so it will return false below.
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// JavaScript TERNARY OPERATOR
/* A way to simplify if...else statements */
console.log('\nTernary operator:\n');
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');
/* The condition, isLocked, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
Like if...else statements, ternary operators can be used for conditions which evaluate to true or false. */
let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ?
  console.log('I love that!') :
  console.log("I don't love that!");

// FUNCTION - DEFAULT PARAMETERS - ES6
/* In ES6 we can have a default parameter in a function, in case when it is called, there is
no value, or it is undefined */
console.log('\nFunction default parameters (ES6):');
function sayMyName(name = 'Heisenberg') {
    console.log(`Hello ${name}`);
}
sayMyName('Beto');
sayMyName();
console.log('Another example:');
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
console.log(`Remember to buy ${item1}`);
console.log(`Remember to buy ${item2}`);
console.log(`Remember to buy ${item3}`);
}
makeShoppingList('Pepsi', 'Chocolate', 'Batata');
console.log('Now the default:');
makeShoppingList();

// HELPER FUNCTIONS
/* We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like: */
console.log('\nHelper Functions:\n');
function multiplyByNineFifths(number) {
    return number * (9/5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};

console.log(getFahrenheit(15)); // Returns 59
/* Notice here that getFahrenheit(15) called the function, and the function itself called
the multiplyByNineFifths passing the value 15 and getting the result to add 32 */

// FUNCTION EXPRESSION - NOT IIFE
/* We can create a variable and pass an anonymous function to it, to use a function expression: */
console.log('\nFunction expression using a variable:\n');
console.log('Variable addNums will be called with the arguments 6 and 5:');
const addNums = function(a, b) {
    let result = a + b;
    console.log('The result is: ' + result);
}
addNums(6, 5);
/* Notice that while it is an anonymous function, still it has a name, the variable name, and
also, it accepts arguments and can be called when needed, it's not the as an IIFE.
ATTENTION: Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined. */

// ARROW FUNCTIONS!
/* ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this*/
console.log(`Arrow => functions:`);
const rectangleArea = (width, height) => {
    let area = width * height;
    return `Considerind the width of ${width} and height of ${height}, the area is: ${area}`;
}
console.log(rectangleArea(3, 7));

/* Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.
Example:
ZERO PARAMETER:
const functionName = () => {};
ONE PARAMETER:
const functionName = paramOne => {};
TWO OR MORE PARAMETERS:
const functionName = (paramOne, paramTwo, ...) => {};
*/

/* A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return. */
// Example:
console.log('\nSingle line small function:');
const sumSame = number => number + number;
console.log(sumSame(21));

console.log('Another example:');
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
console.log(plantNeedsWater('Wednesday'));