/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT ASYNC
Writing async Functions - Handling Dependent Promises

*/

/* More information on 03-async.md

21 - Library.js - Copied the function from CodeCademy.
34 - Writing Async Functions
50 - The first function *fixed* to get the value and not a promise
92 - Handling Dependent Promises


*/

/*
This is the shopForBeans function. It uses a setTimeout() function to simulate a time-consuming asynchronous action. The function returns a promise with a resolved value of a string representing a type of bean. It settles on a random beanType from the beanTypes array using Math.random().
*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(()=>{
      let randomIndex = Math.floor(Math.random() * 5)
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`)
     resolve(beanType);
     reject(`I'm so confused, I'll order some food!`);
    }, 1000)
  })
}

console.log('\n=== Writing async Functions ===\n');
// First function from Codecademy
/* This function will not return the ${value} because the function getBeans() will take
at least one second to run. Since it will have a delay, what we will get is the promise:
Promise { <pending> }
We need to change it to an async function and use the await on the value we want.
See below on line 50 the new function that will work.*/

/* function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}
getBeans(); */

// Using an async function with the await keyword:
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}
getBeans();

/* Below there is a function created to display the console messages in the correct order.
It is using an async function and it will return the console message desired acordingly to the
argument used when calling the function:
0 = Handling Dependent Promises
1 = Handling Errors
2 = Handling Independent Promises
*/

const returnMessages = (message) => {
  return new Promise((resolve, reject) => {
    const messages = ['\n=== Handling Dependent Promises ===\n', '\n=== Handling Errors ===\n', '\n=== Handling Independent Promises ===\n'];
    setTimeout(() => {
      if(message === 0) {
        resolve(console.log(messages[0]));
      } else if (message === 1) {
        resolve(console.log(messages[1]));
      } else if (message === 2) {
        resolve(console.log(messages[2]));
      } else {
        reject(console.log('Not a valid message!'));
      }
    }, 1200)
  })
}

// Gets the correct message and awaits for the response. The control flow is the setTimeOut (1200) above.
async function displayMessages(num) {
  let returnedMessage = await returnMessages(num);
  return returnedMessage;
}

// Handling dependent promises
displayMessages(0);

/* Handling Dependent Promises !! */
/* Below there are three functions:
shopForBeans2, soakTheBeans and cookTheBeans
All functions are from CodeCademy to be used for the codes below their lines.
shopForBeans is the same function as the above shopForBeans(), only with a new name to simply
make it work! */

const shopForBeans2 = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(()=>{
      let randomIndex = Math.floor(Math.random() * 5)
      let beanType = beanTypes[randomIndex];
      console.log(`Today I bought ${beanType} beans because they were on sale.`)
     resolve(beanType);
     reject(`I'm so confused, I'll order some food!`);
    }, 1500)
  })
}

let soakTheBeans = (beanType) => {
  return new Promise((resolve, reject) => {
    console.log('Time to soak the beans.')
   setTimeout(()=>{
     console.log(`... The ${beanType} beans are softened.`)
     resolve(true)
     }, 1500)
 })
}

let cookTheBeans = (isSoftened) => {
 return new Promise((resolve, reject) => {
   console.log('Time to cook the beans.')
   setTimeout(()=>{
     if (isSoftened) {
       console.log('... The beans are cooked!')
       resolve('\n\nDinner is served!')
     }
   }, 1500)
 })
}

/* Handling the Dependent promises for the above functions to work: */
async function makeBeans() {
  let type = await shopForBeans2();
  // console.log(type);
  let isSoft = await soakTheBeans(type);
  // console.log(isSoft);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}
makeBeans();
