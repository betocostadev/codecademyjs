/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS II
fetch() POST Requests II
*/

/* More information on requests2-readme.md

12 - fetch() POST Request - Boiler plate Code

*/

fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'})
}).then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
}, (networkError => {
    console.log(networkError.message);
})).then(jsonResponse => {
    return jsonResponse;
})