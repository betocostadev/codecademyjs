// INTRO:LOOPS - PROJECT 9 - WHALE TALK

/* Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean. */

// The phrase we want to translate
const input = 'turpentine and turtles';
// Whale Vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];
// A place to store the vowels from the input
const resultArray = [];
// The result of the translation
let whaleMessage = '';
// The loops to check the vowels against the input
for (let i = 0; i < input.length; i++) {
    // Double the e
  if (input[i] === 'e') {
        resultArray.push(input[i]);
      }
    // Double the u
  if (input[i] === 'u') {
        resultArray.push(input[i]);
      }
    // The inner for loop to check against all letters of the input and using all letters of the vowels.
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === input[i]) {
      resultArray.push(input[i]);
    }
  }
}

// console.log(resultArray);
// Get the result array and place it in the whale message with no ','.
whaleMessage = resultArray.join('');
whaleMessage = whaleMessage.toUpperCase();
console.log(whaleMessage + '!');
