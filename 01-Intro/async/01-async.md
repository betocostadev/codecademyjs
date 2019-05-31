# CodeCademy Introduction To JavaScript

### ASYNC AWAIT

## Introduction

#### Code on 01-async.js

Often in web development, we need to handle *asynchronous* actions— actions we can wait on while moving on to other tasks. We make requests to networks, databases, or any number of similar operations. JavaScript is non-blocking: instead of stopping the execution of code while it waits, JavaScript uses an [event-loop](https://youtu.be/8aGhZQkoFbQ) which allows it to efficiently execute other tasks while it awaits the completion of these asynchronous actions.

Originally, JavaScript used callback functions to handle asynchronous actions. The problem with callbacks is that they encourage complexly nested code which quickly becomes difficult to read, debug, and scale. With ES6, JavaScript integrated native [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which allow us to write significantly more readable code. JavaScript is continually improving, and ES8 provides a new syntax for handling our asynchronous action, `async...await`. The `async...await` syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.

The async...await syntax is [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)— it doesn’t introduce new functionality into the language, but rather introduces a new syntax for using promises and [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator). Both of these were already built in to the language. Despite this, `async...await` powerfully improves the readability and scalability of our code. Let’s learn how to use it!