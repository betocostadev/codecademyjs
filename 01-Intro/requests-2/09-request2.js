/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS II
async POST Requests III
*/

/* More information on requests2-readme.md

12 - async POST Request - Working Code - Helper Functions: public/09-helperFunctions;

*/

// information to reach API
const apiKey = 'be54cab7d0e149e096392275ac173f81';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
        'apikey': apiKey
      }
    })
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
      // renderRawResponse(jsonResponse);
    }
    throw new Error('Request failed!');
  }
  catch(error) {
    console.log(error)
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

