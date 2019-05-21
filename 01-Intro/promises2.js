/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT PROMISES */

/*
INDEX - # Code Line
13 - Using catch() with promises.
65 - Second example
99 - Chaining multiple promises
117 - Consuming Promises

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
    }, 400);
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
        }, 500);
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
  return Math.floor(Math.random() * 2000);
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