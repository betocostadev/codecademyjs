# CodeCademy Introduction To JavaScript

## REQUESTS II

### Index
1. Introduction to Requests with ES6
2. fetch() GET Requests I
3. fetch() GET Requests II
4. fetch() GET Requests III
5. fetch() GET Requests IV
6. fetch() POST Requests I
7. fetch() POST Requests II
8. fetch() POST Requests III
9. fetch() POST Requests IV
10. fetch() POST Requests V
11. async GET Requests I
12. async GET Requests II
13. async GET Requests III
14. async POST Requests I
15. async POST Requests II
16. async POST Requests III
17. Review Requests II

## Introduction to Requests with ES6

#### Files

- **01-request2.html**
- **01-request2.js**
- **public/01-request2.css**


In the previous lesson, we spent a lot of time dealing with asynchronous data (remember AJAX/ Asynchronous JavaScript And XML?). Many of our web page interactions rely on asynchronous events, so managing these events is essential to good web development.

To make asynchronous event handling easier, *promises* were introduced in JavaScript in ES6:

- [Mozilla Development Network: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

A promise is an object that handles asynchronous data. A promise has three states:

*pending* : when a promise is created or waiting for data.
*fulfilled* : the asynchronous operation was handled successfully.
*rejected* : the asynchronous operation was unsuccessful.

The great thing about promises is that once a promise is fulfilled or rejected, you can chain an additional method to the original promise.

In this lesson, we will explain how to use `fetch()`, which uses promises to handle requests. Then, we will simplify requests using `async` and `await`.

We’ll use the Datamuse API for GET requests and Rebrandly URL Shortener API for POST requests. If you don't already have a Rebrandly API, check the requests1-readme.md to create one.

***

#### REQUESTS II

## fetch() GET Requests I

#### Files

- **No files, information only.**

The first type of requests we’re going to tackle are GET requests using `fetch()`

- [MDN: Fetch API.](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

The `fetch()` function:

- Creates a request object that contains relevant information that an API needs.
- Sends that request object to the API endpoint provided.
- Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

In the next exercise we’ll go over the boilerplate code for using `fetch()` and walk through what each step does!

![fetch GET diagram](./img/fetchGETtransparent.svg)

***

#### REQUESTS II

## fetch() GET Requests II

#### Files

- **02-request2.js**

We are going to reconstruct the boilerplate code necessary to create a GET request using the `fetch()` function step-by-step.

Feel free to refer to the `fetch()` GET diagram (above) at any point while completing this exercise.
