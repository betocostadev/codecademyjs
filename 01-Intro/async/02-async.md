# CodeCademy Introduction To JavaScript

### ASYNC AWAIT

## The async Keyword

#### Also includes the await operator below.

#### Code on 02-async.js

The `async` keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the `async` keyword. Then, we invoke that function.

```
async function myFunc() {
  // Function body here
};

myFunc();
```

We’ll be using `async` function declarations throughout this lesson, but we can also create `async` function expressions:

```
const myFunc = async () => {
  // Function body here
};

myFunc();
```

`async` functions *always return a promise*. This means we can use traditional promise syntax, like `.then()` and `.catch()` with our `async` functions. An `async` function will return in one of three ways:

- If there’s nothing returned from the function, it will return a promise with a resolved value of `undefined`.

- If there’s a non-promise value returned from the function, it will return a promise resolved to that value.

- If a promise is returned from the function, it will simply return that promise

```
async function fivePromise() {
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5

```

In the example above, even though we return 5 inside the function body, what’s actually returned when we invoke `fivePromise()` is a promise with a resolved value of `5`.


***

## The await Operator

In the last exercise, we covered the `async` keyword. By itself, it doesn’t do much; `async` functions are almost always used with the additional keyword `await` inside the function body.

*The `await` keyword can only be used inside an `async` function*. `await` is an operator: it returns the resolved value of a promise. Since promises resolve in an indeterminate amount of time, `await` halts, or pauses, the execution of our `async` function until a given promise is resolved.

In most situations, we’re dealing with promises that were returned from functions. Generally, these functions are through a library, and, in this lesson, we’ll be providing them. We can `await` the resolution of the promise it returns inside an `async` function. In the example below, `myPromise()` is a function that returns a promise which will resolve to the string `"I am resolved now!"`

```
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}
```

asyncFuncExample(); // Prints: I am resolved now!
Within our `async` function, `asyncFuncExample()`, we use `await` to halt our execution until `myPromise()` is resolved and assign its resolved value to the variable `resolvedValue`. Then we log `resolvedValue` to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code.