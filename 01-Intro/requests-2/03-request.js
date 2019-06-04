/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS II
fetch() Get Requests IV
*/

/* More information on requests2-readme.md

13 - fetch() Get Request - Working Code - Helper function in public folder.

*/

// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';
// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  fetch(endpoint).then(response => {
    if(response.ok) {
      return response.json()
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  }).then(jsonResponse => {
    // renderRawResponse(jsonResponse);
    renderResponse(jsonResponse);
  })
};

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
