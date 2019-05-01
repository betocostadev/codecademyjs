// Notes of interesting parts of JavaScript - CODECADEMY
// HIGHER ORDER FUNCTIONS

/*
# - Code line
12 - HIGHER-ORDER FUNCTIONS
42 - Better example of Functions as Data
92 - Functions as parameters
161 - FUN FUN FUNCTION - Higher-order-functions
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

/*
BETTER EXAMPLE OF FUNCTIONS AS DATA:
Passing functions as parameters of another function

Based on the example found here:
https://discuss.codecademy.com/t/what-are-other-uses-of-functions-as-data/376842

The use of functions as data in this way is helpful for at least two clear reasons.

First is that it enables us to pass functions as parameters to other functions. To be explicit, let’s say that we have two functions, makeSubarray and isEven.

makeSubarray accepts two parameters: an array arr and a function select which returns true or false depending on whether an array entry will be in the final array.
isEven has one parameter and returns true if it is even and false otherwise.

We will have two functions that will utilize other functions as parameters
1 - A function that will make an array of EVEN numbers
2 - A function that will make an array of ODD numbers
*/
let bigArr = [2, 3, 4, 5, 6, 7, 8, 9, 11, 20, 25, 30, 35, 40, 45, 50, 55, 60];
console.log(`
More functions as data:
Array = ${bigArr}.
Function 1 will = Make a new array using the array but only with EVEN numbers
Function 2 will = Make a new array using the array but only with ODD numbers
`);

function makeSubarray(arr, select) {
    return arr.filter(select);
}

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

/* The important thing to notice is that when we make a call to the makeSubarray function with an array, for example A = [0, 1, 2, 3, 4, 5], and isEven:

makeSubarray (A, isEven);  returns [0, 2, 4]

the makeSubarray function will essentially execute select = isEven before doing anything else so that the line

return arr.filter(select);

uses the correct function to create a subarray. So this way of using functions as data gives us callbacks. */

console.log(makeSubarray(bigArr, isEven));
console.log(makeSubarray(bigArr, isOdd));

/* FUNCTIONS AS PARAMETERS

Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that we can also pass functions (into other functions) as parameters. A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call the functions that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.

When we pass a function in as an argument to another function, we don’t invoke it. Invoking the function would evaluate to the return value of that function call. With callbacks, we pass in the function itself by typing the function name without the parentheses (that would evaluate to the result of calling the function)
*/

const checkThatOnePlusTwoEqualsThreeAHundredTimes = () => {
  // Nonsense function, just checking if 1 + 2 = 3 for 100 times.
    for(let i = 1; i <= 100; i++) {
      if ( (1 + 2) != 3) {
        console.log('Something has gone very wrong :( ');
      }
    }
};

// Simple function just to add the parameter num + 2
const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  // Calls the time now
    let t1 = Date.now();
    // Calls the function parameter
    funcParameter();
    // Calls the time again.
    let t2 = Date.now();
    // Return the second time - the first time = 0;
    return t2 - t1;
};

// Write your code below
// Just passing the function to a simple name function
const checkThree = (checkThatOnePlusTwoEqualsThreeAHundredTimes);
// Creating a const that calls the function
const time2p2 = timeFuncRuntime(checkThree);

const checkConsistentOutput = (func, val) => {
  // Calls the function an pass val as a parameter
  func(val);
  func(val);
  // Checks that calling it twice will get the same output
  if (func(val) === func(val)) {
    return func(val)
  } else {
    return 'This function returned inconsistent results'
  }
}

// Calls the function with the parameter
checkConsistentOutput(addTwo, 3);
console.log(checkConsistentOutput(addTwo, 3));

/* https://discuss.codecademy.com/t/when-should-we-use-callbacks-vs-directly-calling-a-function/376857

When should we prefer to pass in a function as a parameter vs calling it directly from inside the other function as usual?

Answer
One reason that callbacks are helpful is that it allows us not to depend on anything outside of the function itself. This gives us a level of simplicity because everything that the function needs to do its job is either defined in the function or passed in as a parameter. But if we need to use many functions, should we pass them all as callbacks? How should we decide?

I find a helpful rule of thumb is to think of how general the functionality that we’re trying to accomplish is. If the functionality that we want to use is general, for example

Say we have a function which selects elements from an array to create a new array according to a rule. This is very general and we may want to change up the rule based on the circumstances.
then this is a situation where we should use callbacks. If we have a function which needs to call another function to perform specific helping behavior, however, it is fine not to use that function as a callback.

TLDR
We can think of callbacks as variables for functions – they can take on many different function values – whereas calling a function directly is like using a constant.
*/


/* More about higher-order functions: FunFunFunction
https://www.youtube.com/watch?v=BMUiFMZr7vk&t=313s
 */
console.log('\nMore about higher-order functions - FunFunFunction:\n');

// Let's base the example below on filter, filter is used as a Higher Order Function
const animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Meg',        species: 'dog'},
  {name: 'Smoke',      species: 'dog'},
  {name: 'Thunder',    species: 'cat'},
  {name: 'Super',      species: 'fish'}
]
console.log(`The animals array of objects: ${animals}`);
// Now let us filter the dogs.
// If we were going to use a normal 'for loop' to get the dogs;
const dogsFor = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') {
    dogsFor.push(animals[i]);
  }
}

console.log(`Filtering an array using a default for loop to get the dogs:`);
console.log(dogsFor);
console.log('Now using filter:');
/* Notice the use of a higher-order function
Filter uses an callback function to work: */
const dogs = animals.filter(function (animal) { return animal.species === 'dog' } );
console.log(dogs);

/*
A simple function that would do the same thing:
const isDog = function(animal) {
  return animal.species === 'dog';
}
Then using the filter:
const dogs = animals.filter(isDog);
*/

/* On the example above, we used an anonymous function created on the filter.
Now we will create another function and use it as the callback for the filter. */
console.log('\nCalling an existing function as a callback for filter.\n');

const amGods = [
  {name: 'Odin',       isGod: true},
  {name: 'DeadWife',   isGod: false},
  {name: 'Bilquis',    isGod: true},
  {name: 'Leprechaun', isGod: false},
  {name: 'Thor',       isGod: true}
]

// A function to check for each one if it is a god
const isGod = (char) => {
  return char.isGod === true;
}

// A function to check for each one it is NOT a god

const isNotGod = (char) => {
  return char.isGod === false;
}
// Using the filter with the previously created functions:
const gods = amGods.filter(isGod);
console.log('Using a previously created function to check for gods:');
console.log(gods);

// Get the characters that are NOT Gods.
const notGods = amGods.filter(isNotGod);
console.log('Using a previously created function to check for NOT gods:');
console.log(notGods);
