/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT PROMISES */

/*
INDEX - # Code Line
13 - Using catch() with promises.
61 - First Promise (Promise constructor)
87 - Node SetTimeout()
117 - Consuming Promises

*/

console.log('\n=== Using catch() with promises ===\n');
/* Using catch() with Promises
One way to write cleaner code is to follow a principle called separation of concerns. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

Remember, .then() will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled. */

const inventory = {
    sunglasses: 5,
    pants: 1088,
    bags: 12
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
    }, 400);
  });
};

const order = [['sunglasses', 6], ['bags', 2]];
const order2 = [['sunglasses', 1], ['bags', 2]];

console.log('First check with order 1, then second check with order 2:');

/* Notice that here, instead of doing it like in the example we did before in promises.js
we are not using the handleSuccess and handleFailure functions. We are using .then() after the
checkInventory() function with the order array as our argument. */
checkInventory(order)
    .then((resolvedValue) => {
        console.log(resolvedValue);
    })
    .then(null, (rejectionReason) => {
        console.log(rejectionReason);
    });

/* Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different promise function: .catch().

The .catch() function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using .catch() accomplishes the same thing as using a .then() with only a failure handler. */

checkInventory(order2)
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