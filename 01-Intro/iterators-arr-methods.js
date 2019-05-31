// CODECADEMY - JAVASCRIPT ITERATORS - Array methods of iteration
// Based on Part 07 of Introduction to Javascript
/* https://www.codecademy.com/courses/introduction-to-javascript/lessons/javascript-iterators/exercises/for-each */
/* These Iterators are methods that are higher-order functions. If you need a refreshed, check
the file 'higher-order-functions.js'.
The same way that you will see in the end of the file, the iterators here work by using
a callback function to perform an action on something */

/*
Index:
# - Line Number
21 - .forEach()
38 - The .map() Method
85 - The .filter() Method
96 - The .findIndex() Method
136 - The .reduce() Method
182 - The .some() Method
196 - The .every() Method
*/

console.log(`Some higher-order function methods.
.forEach():`);

const heroes = ['Dr. Strange', 'Iron Man', 'Thor', 'Hulk', 'Captain'];
console.log(heroes);
console.log('Using a forEach:');
// Default way:
// const heroesList = heroes.forEach(function (hero) { console.log(' * ' + hero) });

// Using arrow functions:
const heroesList = heroes.forEach((hero) => { console.log(' * ' + hero) });


/* .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
.forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
The return value for .forEach() will always be undefined. */

console.log('\nThe .map() Method:\n');
// The .map() Method
/* The second iterator we’re going to cover is .map(). When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map():

const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map(number => {
  return number * 10;
});
.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array. */

/* Let's say we want to add split the account in a bar with our friends, and we want a tip
plus taxes to be added to each value. */

const bills = [22, 35, 20];
const tip = 0.1;
const tax = 0.15;

// Now, the function to add the tip and tax to the values and create a new array with the
// new values
const totals = bills.map(bill => {
    return bill * (tip + 1) * (tax + 1);
});

console.log(bills);

// Using a forEach again, but only to round the numbers!
console.log('Bills with tip and tax:')
const roundedTotals = totals.forEach(total => {
    console.log(total.toFixed(2));
});

/* Secret Message - .map() */
console.log('Secret Message in the Array using map:');
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
console.log('Animals array:' + animals);

// Create the secretMessage array below

const secretMessage = animals.map(firstChar => {
  return firstChar[0];
});

console.log('Revealed secret message using map:');

console.log(secretMessage.join(''));

console.log('\nThe .filter() Method:\n');
/* The .filter() Method
Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. */
const words = ['car', 'chair', 'music', 'leopard', 'pillow', 'brick', 'pen', 'door'];
console.log(`The words array: ${words}`);

const shortWords = words.filter(word => {
  return word.length < 6;
});
console.log(`The shortWords (filtered) array: ${shortWords}`);

/* The .findIndex() Method */
console.log('\nThe .findIndex() Method:\n');

/*
 We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
 */
const jumbledNums = [123, 25, 78, 5, 9];
console.log(jumbledNums);
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log('The index of the first element that is less than 10:');
console.log(lessThanTen);
console.log(`Notice that it returns the first element index that found. If it haven't found any element within the condition, the return would be -1`);

/* jumbledNums is an array that contains elements that are numbers.
const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
The callback function is an arrow function has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

Great, the element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.

If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.
*/

/* Another example of .findIndex() */
console.log('Find the index of elephant in the array below:');
const someAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
console.log(someAnimals);

const foundAnimal = someAnimals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(`The index number of 'elephant' is: ${foundAnimal}`);
console.log('The first animal that starts with the letter s:');
const startsWithS = someAnimals.findIndex(animal => {
  return animal[0] === 's';
});
console.log(startsWithS);

console.log('\nThe .reduce() Method:\n');
/* The .reduce() Method
Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below: */
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbersArr);
console.log('Using .reduce() we will sum the array used above:');

const summedNums = numbersArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

/* Consider what is happening above:
Iteration | accumulator | currentValue | return value
first          1              2              3
second         3              3              6
third          6              4              10
fourth         10             5              15
fifth          15             6              21
sixth          21             7              28
seventh        28             8              36
eighth         36             9              45
ninieth        45             10             55
*/

console.log(summedNums); // Output: 55

/* Let's use reduce to 'reduce' the values of an array. */
console.log('Subtraction of the values in the array below:');
const arrToSub = [500, 200, 70, 65, 50];
console.log(`Let's consider it is an account. The first value: ${arrToSub[0]} is your wallet.
All the other values are the values you need to pay:`)
console.log(arrToSub);
const subArr = arrToSub.reduce((accumulator, currentValue) => {
  return accumulator - currentValue;
});
console.log(subArr);

console.log('\nAnother example with the values table:');
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of the accumulator: ', accumulator);
  console.log('The value of the currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10); // ATTENTION - Notice that we are adding a 10 here to change the function.
console.log('Result: ', newSum);

/* The .some() Method */
console.log('\nThe .some() Method:\n');
const someWords = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log('Are there words with more than 6 characters?')
console.log(someWords.some((word) => {
  return word.length < 6;
}));

const interestingWords = words.filter(word => {
  return word.length > 5;
});
console.log(interestingWords);

/* The .every() Method - This method will check if EVERY element meets the condition. */

console.log('Does every method meet the condition?')
console.log(interestingWords.every((word) => {
	return word.length > 5
}));