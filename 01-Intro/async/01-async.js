/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT ASYNC AWAIT - INTRO */

/* More information on 01-async.md */

const fs = require('fs');

console.log('=== ASYNC 01 ===\n');

// Below we create a function for reading files that returns a promise. We converted the fs.readfile() function which uses callbacks. Many of the asynchronous functions you'll encounter already return promises, so this extra step is seldom necessary.
const promisifiedReadfile = (file, encoding) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, text) => {
			if (err) {
				return reject(err.message);
      }
        resolve(text);
      });
});

// Here we use fs.readfile() and callback functions:
console.log('The first version uses callback functions');
fs.readFile('./text-file1.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./text-file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  });
});

// Here we use native promises with our "promisified" version of readfile:
console.log('The second version uses native promise syntax');
let firstSentence
promisifiedReadfile('./text-file1.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./text-file2.txt', 'utf-8')
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
console.log('The third version uses async...await');
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./text-file1.txt', 'utf-8')
  let secondSentence = await promisifiedReadfile('./text-file2.txt', 'utf-8')
  console.log(firstSentence, secondSentence)
}
readFiles()