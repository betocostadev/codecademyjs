/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT PROMISES */

/*
INDEX - # Code Line
16 - Promisses Intro
61 - First Promise (Promise constructor)
87 - Node SetTimeout()
117 - Consuming Promises
184 - A more realistic example
Go to promises2.js for catch() and more!

*/

console.log('\n=== JavaScript Promises ===\n');
/* JAVASCRIPT PROMISES
Introduction
In web development, asynchronous programming is notorious for being a challenging topic.

An asynchronous operation is one that allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete. Asynchronous programming means that time-consuming operations don’t have to bring everything else in our programs to a halt.

There are countless examples of asynchronicity in our everyday lives. Cleaning our house, for example, involves asynchronous operations such as a dishwasher washing our dishes or a washing machine washing our clothes. While we wait on the completion of those operations, we’re free to do other chores.

Similarly, web development makes use of asynchronous operations. Operations like making a network request or querying a database can be time-consuming, but JavaScript allows us to execute other tasks while awaiting their completion.

This lesson will teach you how modern JavaScript handles asynchronicity using the Promise object, introduced with ES6. */


/* What is a Promise?
Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:

Pending: The initial state— the operation has not completed yet.
Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.
We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected. Let’s think of a dishwasher as having the states of a promise:

Pending: The dishwasher is running but has not completed the washing cycle.
Fulfilled: The dishwasher has completed the washing cycle and is full of clean dishes.
Rejected: The dishwasher encountered a problem (it didn’t receive soap!) and returns unclean dishes.
If our dishwashing promise is fulfilled, we’ll be able to perform related tasks, such as unloading the clean dishes from the dishwasher. If it’s rejected, we can take alternate steps, such as running it again with soap or washing the dishes by hand.

All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects. */


/* Constructing a Promise Object
Let’s construct a promise! To create a new Promise object, we use the new keyword and the Promise constructor method:

const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);

The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

The executor function has two function parameters, usually referred to as the resolve() and reject() functions. The resolve() and reject() functions aren’t defined by the programmer. When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.

resolve is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().
reject is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().

Example of executor function below:
*/

console.log('First Promise:')
const worldTrue = true;

const executorFunction = (resolve, reject) => {
  if (worldTrue) {
  resolve(console.log('First promise test: I resolved!'));
  } else {
    reject(console.log('First promise test: I rejected!'));
  }
}
const myFirstPromise = new Promise(executorFunction);

/* Let’s break down what’s happening above:

Edit: worldTrue was created to test the success and failure promises.

- We declare a variable myFirstPromise
- myFirstPromise is constructed using new Promise() which is the Promise constructor method.
- executorFunction() is passed to the constructor and has two functions as parameters: resolve and reject.
- If someCondition evaluates to true, we invoke resolve() with the string 'I resolved!'
- If not, we invoke reject() with the string 'I rejected!'

In our example, myFirstPromise resolves or rejects based on a simple condition, but, in practice, promises settle based on the results of asynchronous operations. For example, a database request may fulfill with the data from a query or reject with an error thrown. In this exercise, we’ll construct promises which resolve SYNCHRONOUSLY to more easily understand how they work. */
console.log('Tests here are working synchronously!');

console.log('\n=== The Node setTimeout() Function === \n');
/* The Node setTimeout() Function
Knowing how to construct a promise is useful, but most of the time, knowing how to consume, or use, promises will be key. Rather than constructing promises, you’ll be handling Promise objects returned to you as the result of an asynchronous operation. These promises will start off pending but settle eventually.

Moving forward, we’ll be simulating this by providing you with functions that return promises which settle after some time. To accomplish this, we’ll be using setTimeout(). setTimeout() is a Node API (a comparable API is provided by web browsers) that uses callback functions to schedule tasks to be performed after a delay. setTimeout() has two parameters: a callback function and a delay in milliseconds.

Example in Node:
*/
const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};

setTimeout(delayedHello, 2000);

/* Here, we invoke setTimeout() with the callback function delayedHello() and 2000. In at least two seconds delayedHello() will be invoked. But why is it “at least” two seconds and not exactly two seconds?

This delay is performed asynchronously—the rest of our program won’t stop executing during the delay.
Asynchronous JavaScript uses something called the event-loop. After two seconds, delayedHello() is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run. Next, any code in front of it in the line will run. This means it might be more than two seconds before delayedHello() is actually executed.

Let’s look at how we’ll be using setTimeout() to construct asynchronous promises: */
const return1secPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('\nLine 108 | return1secPromise runs after at least 500ms. I resolved!\n')}, 500);
  });
};

const prom1sec = return1secPromiseFunction();
console.log(prom1sec);

/* In the example code, we invoked return1secPromiseFunction() which returned a promise. We assigned that promise to the variable prom1sec. Similar to the asynchronous promises you may encounter in production, prom will initially have a status of pending. */

console.log('\n=== Consuming Promises ===\n');

/* Consuming Promises
The initial state of an asynchronous promise is pending, but we have a guarantee that it will settle. How do we tell the computer what should happen then? Promise objects come with an aptly named .then() method. It allows us to say, “I have a promise, when it settles, then here’s what I want to happen…”

.then() is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.

- The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
- The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.

We can invoke .then() with one, both, or neither handler! This allows for flexibility, but it can also make for tricky debugging. If the appropriate handler is not provided, instead of throwing an error, .then() will just return a promise with the same settled value as the promise it was called on. One important feature of .then() is that it always returns a promise.*/

/* We will resolve the promise we used above on line 106
If we run the code without the .then() below, we will get the status Promise <pending>
But running with the code below, the promise will be resolved. */

console.log('\nUsing .then() to fullfil the promise:\n');

const handleSuccessProm1Sec = (resolvedValue) => {
  console.log(resolvedValue);
}
prom1sec.then(handleSuccessProm1Sec);

/* The onFulfilled and onRejected Functions
To handle a “successful” promise, or a promise that resolved, we invoke .then() on the promise, passing in a success handler callback function:

const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

prom.then(handleSuccess); // Prints: 'Yay!'

- prom is a promise which will resolve to 'Yay!'.
- We define a function, handleSuccess(), which prints the argument passed to it.
- We invoke prom‘s .then() function passing in our handleSuccess() function.
- Since prom resolves, handleSuccess() is invoked with prom‘s resolved value, 'Yay', so 'Yay' is logged to the console.

With typical promise consumption, we won’t know whether a promise will resolve or reject, so we’ll need to provide the logic for either case. We can pass both an onFulfilled and onRejected callback to .then().
*/
console.log('\nConsuming a promise with resolve and reject:\n');
let prom2 = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay, random num is less than .5');
  } else {
    reject('Ohhh noooo! Random num is more than .5');
  }
});

const handleSuccess2 = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure2 = (rejectionReason) => {
  console.log(rejectionReason);
};

prom2.then(handleSuccess2, handleFailure2);

/*
- prom2 is a promise which will randomly either resolve with 'Yay!'or reject with 'Ohhh noooo!'.
- We pass two handler functions to .then(). The first will be invoked with 'Yay!' if the promise resolves, and the second will be invoked with 'Ohhh noooo!' if the promise rejects. */

console.log('\nLets try a more realistic function. Check the inventory order status:\n');
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let inStock = order.every(item => inventory[item[0]] >= item[1]);
          if (inStock) {
              resolve(`Thank you. Your order was successful.`);
          } else {
              reject(`We're sorry. Your order could not be completed because some items are sold out.`);
          }
      }, 1000);
  })
};

const order = [['sunglasses', 1], ['bags', 2]];

const inventorySuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const inventoryFailure = (resolvedValue) => {
  console.log(resolvedValue);
}

// Notice that we have to call .then() with the success and failure functions to get the result.
checkInventory(order).then(inventorySuccess, inventoryFailure);

