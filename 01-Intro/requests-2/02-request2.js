/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS II
fetch() Get Requests II
*/

/* More information on requests2-readme.md

12 - fetch() Get Request

*/

fetch('http://api-to-call/endpoint').then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
  // Code to execute with JSON response.
});