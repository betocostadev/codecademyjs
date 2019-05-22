/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT PROMISES */

/*
INDEX - # Code Line
15 - Using catch() with promises.
67 - Second example
101 - Chaining multiple promises
119 - Consuming Promises
235 - Avoiding Common Mistakes
292 - Using Promise.all()

*/

console.log('\n=== Using catch() with promises ===\n');
/* Using catch() with Promises
One way to write cleaner code is to follow a principle called separation of concerns. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

Remember, .then() will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled. */

const bag = {
    sunglasses: 5,
    pants: 1088,
    bags: 12
  };

const checkBag = (items) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = items.every(item => bag[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 200);
  });
};

const items1 = [['sunglasses', 6], ['bags', 2]];
const items2 = [['sunglasses', 1], ['bags', 2]];

console.log('First check with bags 1, then second check with bags 2:');

/* Notice that here, instead of doing it like in the example we did before in promises.js
we are not using the handleSuccess and handleFailure functions. We are using .then() after the
checkInventory() function with the order array as our argument. */
checkBag(items1)
    .then((resolvedValue) => {
        console.log(resolvedValue);
    })
    .then(null, (rejectionReason) => {
        console.log(rejectionReason);
    });

/* Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different promise function: .catch().

The .catch() function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using .catch() accomplishes the same thing as using a .then() with only a failure handler. */

checkBag(items2)
    .then((resolvedValue) => {
        console.log(resolvedValue);
    }).catch((rejectionReason) => {
        console.log(rejectionReason);
    });

console.log('\nAnother way to use it:\n');

const weapons = {
    hammer: 1,
    shield: 0
};

const checkWeapons = (fight) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let holding = fight.every(item => weapons[item[0]] >= item[1]);
            if (holding) {
                resolve(`You have weapons, go to the fight!`);
            } else {
                reject(`You don't have weapons, better run!`);
            }
        }, 400);
    });
};
fight1 = [['hammer', 1], ['shield', 0]];
fight2 = [['hammer', 2], ['shield', 1]];

const goFight = (resolvedValue) => {
    console.log(resolvedValue);
}
const runNow = (rejectionReason) => {
    console.log(rejectionReason);
}

/* Using .then and catch after we call the function, since we already have our declared functions
for resolved and rejected reasons.*/
checkWeapons(fight1).then(goFight).catch(runNow);
checkWeapons(fight2).then(goFight).catch(runNow);

setTimeout(() => {
    console.log('\n=== Chaining Multiple Promises ===\n');
}, 600);

/* Chaining Multiple Promises
One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. We might make one request to a database and use the data returned to us to make another request and so on! Let’s illustrate this with another cleaning example, washing clothes:

We take our dirty clothes and put them in the washing machine. If the clothes are cleaned, then we’ll want to put them in the dryer. After the dryer runs, if the clothes are dry, then we can fold them and put them away.

This process of chaining promises together is called composition. Promises are designed with composition in mind! Here’s a simple promise chain in code:

firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});

- We invoke a function firstPromiseFunction() which returns a promise.
- We invoke .then() with an anonymous function as the success handler.
- Inside the success handler we return a new promise— the result of invoking a second function, secondPromiseFunction() with the first promise’s resolved value.
- We invoke a second .then() to handle the logic for the second promise settling.
- Inside that .then(), we have a success handler which will log the second promise’s resolved value to the console.

In order for our chain to work properly, we had to return the promise secondPromiseFunction(firstResolveVal). This ensured that the return value of the first .then() was our second promise rather than the default return of a new promise with the same settled value as the initial.
*/

const store = {
  sunglasses: {
    inventory: 817,
    cost: 9.99
  },
  pants: {
    inventory: 236,
    cost: 7.99
  },
  bags: {
    inventory: 17,
    cost: 12.99
  }
};

const checkInventory = (order) => {
  return new Promise ((resolve, reject) => {
    setTimeout(()=> {
      const itemsArr = order.items;
      let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);

      if (inStock){
        let total = 0;
        itemsArr.forEach(item => {
          total += item[1] * store[item[0]].cost
       });
        console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
        resolve([order, total]);
     } else {
        reject(`The order could not be completed because some items are sold out.`);
     }
    }, generateRandomDelay());
  });
};

const processPayment = (responseArray) => {
  const order = responseArray[0];
  const total = responseArray[1];
  return new Promise ((resolve, reject) => {
    setTimeout(()=> {
    let hasEnoughMoney = order.giftcardBalance >= total;
    // For simplicity we've omited a lot of functionality
    // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
    if (hasEnoughMoney) {
      console.log(`Payment processed with giftcard. Generating shipping label.`);
      let trackingNum = generateTrackingNumber();
      resolve([order, trackingNum]);
    } else {
      reject(`Cannot process order: giftcard balance was insufficient.`);
    }
   }, generateRandomDelay());
  });
};


const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise ((resolve, reject) => {
    setTimeout(()=> {
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
  }, generateRandomDelay());
  });
};


// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 1500);
}

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

const order2 = {
    items: [['sunglasses', 10], ['bags', 10]],
    giftcardBalance: 125.50
};

// Chaining the promises:

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
   return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});


setTimeout(() => {
  console.log('\n=== Avoiding Commom Mistakes ===\n');
}, 3500);

/* Avoiding Common Mistakes
Promise composition allows for much more readable code than the nested callback syntax that preceded it. However, it can still be easy to make mistakes. In this exercise, we’ll go over two common mistakes with promise composition.

*/

setTimeout(() => {
  console.log('\nMistake 1: Nesting promises instead of chaining them.');
}, 4500);
/*

Mistake 1: Nesting promises instead of chaining them.

returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})

Let’s break down what’s happening in the above code:
- We invoke returnsFirstPromise() which returns a promise.
- We invoke .then() with a success handler.
- Inside the success handler, we invoke returnsSecondValue() with firstResolveVal which will return a new promise.
- We invoke a second .then() to handle the logic for the second promise settling all inside the first then()!
- Inside that second .then(), we have a success handler which will log the second promise’s resolved value to the console.

Instead of having a clean chain of promises, we’ve nested the logic for one inside the logic of the other. Imagine if we were handling five or ten promises!
*/

setTimeout(() => {
  console.log('Mistake 2: Forgetting to return a promise.\n');
}, 5000);
/*
Mistake 2: Forgetting to return a promise.

returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})

Let’s break down what’s happening in the example:

- We invoke returnsFirstPromise() which returns a promise.
- We invoke .then() with a success handler.
- Inside the success handler, we create our second promise, but we forget to return it!
- We invoke a second .then(). It’s supposed to handle the logic for the second promise, but since we didn’t return, this .then() is invoked on a promise with the same settled value as the original promise!

Since forgetting to return our promise won’t throw an error, this can be a really tricky thing to debug!
*/

setTimeout(() => {
  console.log(`
=== Using Promise.all() ===

To be used when we want to run multiple promises async, but we don't need one promise
to wait for the others to finish. It runs concurrently

Check Availability of the items below:
`);
}, 7000);

/* Using Promise.all()

When done correctly, promise composition is a great way to handle situations where asynchronous operations depend on each other or execution order matters. What if we’re dealing with multiple promises, but we don’t care about the order? Let’s think in terms of cleaning again.

For us to consider our house clean, we need our clothes to dry, our trash bins emptied, and the dishwasher to run. We need all of these tasks to complete but not in any particular order. Furthermore, since they’re all getting done asynchronously, they should really all be happening at the same time!

To maximize efficiency we should use concurrency, multiple asynchronous operations happening together. With promises, we can do this with the function Promise.all().

Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:

- If every promise in the argument array resolves, the single promise returned from Promise.all() will resolve with an array containing the resolve value from each promise in the argument array.
- If any promise from the argument array rejects, the single promise returned from Promise.all() will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.
*/

/* Let’s look at a code example:

let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
Let’s break down what’s happening:

- We declare myPromises assigned to invoking Promise.all().
- We invoke Promise.all() with an array of three promises— the returned values from functions.
- We invoke .then() with a success handler which will print the array of resolved values if each promise resolves successfully.
- We invoke .catch() with a failure handler which will print the first rejection message if any promise rejects.
*/

/* CODE EXAMPLE:
Our business is doing so well that we’re running low on inventory. We want to reach out to some distributors to see if they have the items we need. We only want to make one restocking order, so we’ll only want to place the order if all of the items are available.

Take a look at the provided code. We require in one function: checkAvailability().

checkAvailability() expects two string arguments: an item and a distributor. It returns a promise. The function simulates checking that the given distributor has a given item. 80% of the time it will resolve the promise with the item, and 20% of the time it will reject the promise with an error message stating that the item isn’t available.

We also provided two functions which will serve as success and failure handlers.
*/

const checkAvailability = (itemName, distributorName) => {
  /* console.log(`Checking availability of ${itemName} at ${distributorName}...`);
  Line placed below to better log to the console. Would be better here for a single file. */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Checking availability of ${itemName} at ${distributorName}...`);
          if (restockSuccess()) {
              console.log(`${itemName} are in stock at ${distributorName}`)
              resolve(itemName);
          } else {
              reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
          }
      }, 8500);
  });
};

// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
  return (Math.random() > .2);
}

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

/* Calling the promises: */
// Using these variables to make the code easier to be used below.
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

/* Can be done this way:
Promise.all([checkSunglasses, checkPants, checkBags])
	.then(onFulfill)
  .catch(onReject);

or:
*/
let runPromises = Promise.all([checkSunglasses, checkPants, checkBags]);
runPromises.then(onFulfill).catch(onReject);