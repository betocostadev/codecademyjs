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

We’ll use the [Datamuse API](https://www.datamuse.com/api/) for GET requests and Rebrandly URL Shortener API for POST requests. If you don't already have a Rebrandly API, check the requests1-readme.md to create one.

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

***

#### REQUESTS II

## fetch() GET Requests III

#### Files

- **03-request2.html**
- **03-request2.js**
- **public/03-helperFunctions.js**
- **public/03-request2.css**

In the previous exercise, you wrote the boilerplate code for a GET request using `fetch()` and `.then()`. In this exercise, you’re going to use that code and manipulate it to access the Datamuse API and render information in the browser.

[Datamuse API.](https://www.datamuse.com/api/)

If the request is successful, you’ll get back an array of words that sound like the word you typed into the input field.

You may get some errors as you complete each step. This is because sometimes we’ve split a single step into one or more steps to make it easier to follow. By the end, you should be receiving no errors.

1. At the top of the file, create a `const` called `url`. Assign url to the following URL as a string:

```
'https://api.datamuse.com/words'
```

2.Below `url`, create another `const` and call it `queryParams`. Assign it a value of `'?sl='`

`queryParams` will be the start of your query string and will narrow your search to words that sounds like your word.

3. Inside the `getSuggestions()` function, create a `const` called `wordQuery` and assign it `inputField.value`.

You’ll need `wordQuery` to store the value of what is being typed into the input field.

You will be working inside `getSuggestions()` for the remainder of this exercise.

4. Now it’s time to add a query string to the URL with all the necessary parameters.

Create another `const` called `endpoint`, assign it value of a *string* that is `url`, `queryParams`, and `wordQuery` *concatenated* in that order.

5. Call the `fetch()` function and pass in `endpoint` as an argument.

6. Chain a `.then()` method to the `fetch()` function. Pass it a success arrow callback function as an argument. The callback function should take `response` as its single parameter.

7. Inside the success callback function, create a conditional statement that checks if the `ok` property of the `response` object evaluates to a truthy value. If so, call the function `renderJsonResponse()` and pass in `response` as an argument. Then, run your code.

Then type in a word to and click the submit button to view the JSON that came back. The status of the promise return from `fetch()` will be resolved.

The code for `renderJsonResponse()` can be viewed at **public/03-helperFunctions.js**.

8. Delete `renderJsonResponse(response)` and replace it with `return response.json()`.

By returning `response.json()`, the next function that is `.then()` chained to it will receive a Promise with JSON data.

9. Below the condition’s code block, add this code to raise an exception if the request failed: `throw new Error('Request failed!');`

10. Separate the success callback function and the error callback function with a *comma*. The error callback function will also be an arrow function that takes one parameter, `networkError`. In the code block of the arrow function, log `networkError.message` to the console.

***

#### REQUESTS II

## fetch() GET Requests IV

#### Files

- **03-request2.html**
- **03-request2.js**
- **public/03-helperFunctions.js**
- **public/03-request2.css**

In the previous exercise, you created the query URL, called the `fetch()` function and passed it the query URL and a settings object. Then, you chained a `.then()` method and passed it two functions as arguments — one to handle the promise if it resolves, and one to handle network errors if the promise is rejected.

In this exercise, you’ll now take the information that was returned with the promise and manipulate the webpage!

1. At the end of the `.then()` method, chain another `.then()` method.

Pass `.then()` an anonymous arrow callback function that takes `jsonResponse` as its single parameter.

2. Inside the callback function, call the function `renderRawResponse()` and pass in `jsonResponse` as an argument. Run the code.

In the input field, you can type in a word and click the submit button.

If all went well, you should see an array of words that the Datamuse API responded with!

You can view the purpose of `renderRawResponse` at public/03-helperFunctions.js.

3. Time to clean up that response a bit. Delete `renderRawResponse(jsonResponse)` and replace it with `renderResponse(jsonResponse)`.

Run your code.

***

#### REQUESTS II

## fetch() POST Requests I

#### Files

- **03-request2.html**
- **03-request2.js**
- **public/03-helperFunctions.js**
- **public/03-request2.css**


