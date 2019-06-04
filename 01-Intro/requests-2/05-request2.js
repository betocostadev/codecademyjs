/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS II
fetch() POST Requests III - IV - V
*/

/* More information on requests2-readme.md

12 - fetch() POST Request - Working code - Helper: public/05-helperFunctions.js

*/

// Information to reach API
const apiKey = 'be54cab7d0e149e096392275ac173f81';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
      if(response.ok) {
        // renderJsonResponse(response);
        return response.json();
      }
      throw new Error('Request failed!');
  }, (networkError => {
      console.log(networkError.message);
  })).then(jsonResponse => {
      // renderRawResponse(jsonResponse);
      renderResponse(jsonResponse);
  })
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);