/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS II
fetch() Get Requests II
*/

/* More information on requests2-readme.md

12 - fetch() Get Request Diagram

*/

fetch('https://api-to-call.com/endpoint').then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  // Handle success code
  return jsonResponse;
});