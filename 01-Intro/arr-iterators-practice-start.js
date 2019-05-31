/* CODECADEMY - INTRODUCTION TO JAVASCRIPT - ITERATORS

ATTENTION: Avoid checking the finished file. This file is just for you to try to remember
which methods you can use to solve each of the problems in this file.

You don't need to change the logic of each method, just find the method.
Use the MDN link below to find it:
MDN DOCUMENTATION: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Array iterators - practice.
Use this file to practice the utilization of some array methods
Avoid to change this file.
Use the finished version to do it! */

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.method(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.method(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.method((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.method(num => num - 5);

// Choose a method that will return a boolean value
nums.method(num => num < 0);