# CodeCademy Introduction To JavaScript

### ASYNC AWAIT

#### Contents:
- Writing async Functions
- Handling Dependent Promises
- Handling Errors
- Handling Independent Promises

#### Code on 03-async.js

## Writing async Functions

We’ve seen that the `await` keyword halts the execution of an `async` function until a promise is no longer pending. Don’t forget the `await` keyword! It may seem obvious, but this can be a tricky mistake to catch because our function will still run— it just won’t have the desired results.

We’re going to explore this using the following function, which returns a promise that resolves to `'Yay, I resolved!'` after a 1 second delay:

```
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}
```

Now we’ll write two `async` functions which invoke `myPromise()`:

```
async function noAwait() {
 let value = myPromise();
 console.log(value);
}

async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
```

In the first `async` function, `noAwait()`, we left off the await keyword before `myPromise()`. In the second, `yesAwait()`, we included it. The `noAwait()` function logs `Promise { <pending> }` to the console. Without the `await` keyword, the function execution wasn’t paused. The `console.log()` on the following line *was executed **before** the promise had resolved*.

Remember that the `await` operator returns the resolved value of a promise. When used properly in `yesAwait()`, the variable value was assigned the resolved value of the `myPromise()` promise, whereas in `noAwait()`, value was assigned the promise object itself.

***

## Handling Dependent Promises

The true beauty of `async...await` is when we have a series of asynchronous actions which depend on one another. For example, we may make a network request based on a query to a database. In that case, we would need to wait to make the network request until we had the results from the database. With native promise syntax, we use a chain of `.then()` functions making sure to return correctly each one:

```
function nativePromiseVersion() {
    returnsFirstPromise()
    .then((firstValue) => {
        console.log(firstValue);
        return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
        console.log(secondValue);
    });
}
```

Let’s break down what’s happening in the `nativePromiseVersion()` function:

- Within our function we use two functions which return promises: `returnsFirstPromise()` and `returnsSecondPromise()`.

- We invoke `returnsFirstPromise()` and ensure that the first promise resolved by using `.then()`.

- In the callback of our first `.then()`, we log the resolved value of the first promise, `firstValue`, and then return `returnsSecondPromise(firstValue)`.

- We use another `.then()` to print the second promise’s resolved value to the console.

Here’s how we’d write an `async` function to accomplish the same thing:

```
async function asyncAwaitVersion() {
 let firstValue = await returnsFirstPromise();
 console.log(firstValue);
 let secondValue = await returnsSecondPromise(firstValue);
 console.log(secondValue);
}
```

Let’s break down what’s happening in our `asyncAwaitVersion()` function:

- We mark our function as `async`.

- Inside our function, we create a variable `firstValue` assigned `await returnsFirstPromise()`. This means `firstValue` is assigned the resolved value of the awaited promise.

- Next, we log `firstValue` to the console.

- Then, we create a variable `secondValue` assigned to `await returnsSecondPromise(firstValue)`. Therefore, `secondValue` is assigned this promise’s resolved value.

- Finally, we log `secondValue` to the console.

Though using the `async...await` syntax can save us some typing, the length reduction isn’t the main point. Given the two versions of the function, the `async...await` version more closely resembles synchronous code, which helps developers maintain and debug their code. The `async...await` syntax also makes it easy to store and refer to resolved values from promises further back in our chain which is a much more difficult task with native promise syntax. Let’s create some `async` functions with multiple `await` statements!

***

## Handling Errors