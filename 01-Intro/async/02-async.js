/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT ASYNC
THE ASYNC KEYWORD */

/* More information on 02-async.md */

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