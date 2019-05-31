/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT ASYNC
THE ASYNC KEYWORD */

/* More information on 02-async.md */

/*
12 - The async keyword
68 - The await Operator
*/

console.log('=== ASYNC 02 - The async keyword ===\n');

// Using a promise:
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

withConstructor(0)
  .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})

/* Remember that an async function returns a promise with a resolved value equal to the return value of that function.

So we will use an async function below: */

const withAsync = async(num) => {
    if (num === 0) {
        return 'zero';
    } else {
        return 'not zero';
    }
};

withAsync(0)
  .then((resolveValue) => {
  console.log(` withAsync(0) returned a promise which resolved to: ${resolveValue}.`);
})
withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})

// Using a simple promise to log the new message in the console.
// Not related to the async/await part of the file!
const message1 = `
=== Now, the await Operator ===
`;

const showMessage1 = (resolve, reject) => {
    setTimeout(( ) => {
        if (message1) {
            resolve(console.log(message1));
        } else {
            reject(console.log('Promise was rejected!'));
        }
    }, 100)
};
const logMessage2 = new Promise(showMessage1);

/*
this is the brainstormDinner function. It's a little silly. It returns a promise that uses a series of setTimeout() functions to simulate a time-consuming asynchronous action. It's a good example of "callback hell" or "the pyramid of doom," two ways people describe how confusing a bunch of nested callback functions can become.
*/

const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`)
    setTimeout(() => {
      console.log('Should I make salad...?')
      setTimeout(() => {
        console.log('Should I make ramen...?')
        setTimeout(() => {
          console.log('Should I make eggs...?')
          setTimeout(() => {
            console.log('Should I make chicken...?')
            resolve('beans')
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  })
}

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  })
}
// nativePromiseDinner();

// async/await version:
async function announceDinner() {
  // Write your code below:
  const dinner = await nativePromiseDinner();
  return dinner;
}

announceDinner();