/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS I
XHR POST REQUESTS III
*/

/* More information on requests1-readme.md

12 - XHR POST REQUEST III

*/

// POST Request for the Rebrandly API

// Information to reach API
// const apiKey = '<Your API Key>';
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
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderRawResponse(xhr.response);
      // If you want to display a nice shortened URL only, use the function below:
      // renderResponse(xhr.response);
    }
  }
  xhr.open('POST', url);
  // Header with two key-value pairs to access the Rebrandly API
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  // Pass the data you got from the input field to the Rebrandly API
  xhr.send(data);
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
