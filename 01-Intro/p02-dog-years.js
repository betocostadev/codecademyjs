/* INTRO - PROJECT 2 - DOG YEARS
8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
 */

// 8 human years = 45 dog years.
// 22 human years = 101 dog years.

// Human age
const myAge = 33;
// First 2 years of a dog's life counts 10.5 Human years
let earlyYears = 2;
earlyYears *= 10.5;
// Take the early years from human's age
let laterYears = myAge - 2;
// Calculate the dog's later years
laterYears *= 4;
// console.log(earlyYears);
// console.log(laterYears);
// The human's age in dog Years:
const myAgeInDogYears = earlyYears + laterYears;
// Display person's name in lowercase.
const myName = 'BETO'.toLowerCase();
// Log the output with the math.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);