// Notes of interesting parts of JavaScript - CODECADEMY
// Part 2, more advanced concepts.

/* HIGHER-ORDER FUNCTIONS
*/

console.log('Higher-Order Functions - Functions as data:');

/* Functions as data. */
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
        }
    }
}

/* Notice that we don't have the () at the end, this means we are storing the function,
not the value it returns. */
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

/* Notice how we assign checkThatTwoPlusTwoEqualsFourAMillionTimes without parentheses as the value to the busy variable. We want to assign the value of the function itself, not the value it returns when invoked.

In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

Since functions are a type of object, they have properties such as .length and .name and methods such as .toString(). You can see more about the methods and properties of functions in the documentation.

Functions are special because we can invoke them, but we can still treat them like any other type of data. */

is2p2();
/* f we forgot the original name of our function, is there a way we could figure it out? Use is2p2 to console.log() the name property of the function we assigned to is2p2 */
console.log(is2p2.name);

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function */

