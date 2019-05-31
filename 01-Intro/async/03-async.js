/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT ASYNC
Writing async Functions - Handling Dependent Promises - Handling Errors - Handling Independent
Promises and Await Promise.all()
*/

/* More information on 03-async.md

24 - Library.js - Copied the function from CodeCademy.
35 - Writing Async Functions
51 - The first function *fixed* to get the value and not a promise
93 - Handling Dependent Promises
145 - Handling Errors
191 - Handling Independent Promises
200 - Await Promise.all()


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

const returnMessages = (message, time) => {
  return new Promise((resolve, reject) => {
    const messages = ['\n=== Handling Dependent Promises ===\n', '\n=== Handling Errors ===\n', '\n=== Handling Independent Promises ===\n', '\n=== Await Promise.all() ===\n' ];
    setTimeout(() => {
      if(message === 0) {
        resolve(console.log(messages[0]));
      } else if (message === 1) {
        resolve(console.log(messages[1]));
      } else if (message === 2) {
        resolve(console.log(messages[2]));
      } else if (message === 3) {
        resolve(console.log(messages[3]));
      } else {
        reject(console.log('Not a valid message!'));
      }
    }, time)
  })
}

// Gets the correct message and awaits for the response. The control flow is the setTimeOut (1200) above.
async function displayMessages(num, time) {
  let returnedMessage = await returnMessages(num, time);
  return returnedMessage;
}

// Handling dependent promises
displayMessages(0, 1200);

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

/* HANDLING ERRORS */
displayMessages(1, 5000);

/* Handling Errors module functions */
// randomSuccess will generate a random number to make a random true/false and make the promise
// reject or resolve.
let randomSuccess = () => {
  let num = Math.random();
  if (num < 0.5) {
    return true;
  } else {
    return false;
  }
};

let cookBeanSouffle = () => {
  // The setTimeout below was added only to delay the message to log to the console
  // in the correct order.
  setTimeout(() => {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
  }, 5500);
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      // random resolve, reject
      let success = randomSuccess();
      if(success){
        resolve('Bean Souffle');
      } else {
        reject('Dinner is ruined!');
      }
    }, 6500);
  })
};

async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  } catch (error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();

/* HANDLING INDEPENDENT PROMISES */
displayMessages(2, 7000);

/* Independent promises module functions: */
let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 8000)
 })
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 8000)
 })
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 8000)
 })
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 8000)
 })
}

// Handling the independent promises from above:
async function serveDinner() {
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  /* Notice that, the await was not used above when calling the functions.
  Instead it is used below, when logging to the console. This means that the functions above
  will run concurrently. Each one will not need to await for the resolved value of the other
  to run. Only when we log the results we are awaiting.*/
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}
serveDinner();

/* Await Promise.all() */
displayMessages(3, 9000);

// This function is the same as the above, it uses the same functions we declared above on the
// previous module.
// Now we will use a Promise.all() to ask for the promises.
async function allDinner() {
  const resultDinner = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  // if we want just to log the results to test the promises:
  /* for(let i = 0; i < resultDinner.length; i++) {
    console.log(resultDinner[i]);
  } */
  // The advantage of using a Promise.all is that as soon as any of them rejects, the execution stops.
  console.log(`Using Promise.all()
Dinner is served. We're having ${resultDinner[0]}, ${resultDinner[1]}, ${resultDinner[2]}, and ${resultDinner[3]}.`)
};

const callPromAll = () => {
  setTimeout(() => {
    allDinner();
  }, 1000);
};
callPromAll();