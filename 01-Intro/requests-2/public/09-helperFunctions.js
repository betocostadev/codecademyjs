/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS II
async POST Requests III
*/

/* More information on requests2-readme.md

12 - async POST Request - Helper Functions for 09-request2.js

*/

// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
}

// Manipulates responseField to render an unformatted response
const renderRawResponse = (res) => {
  // Displays either message depending on results
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Adds line breaks for JSON
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
    structuredRes = `<pre>${structuredRes}</pre>`;
    responseField.innerHTML = `${structuredRes}`;
  }
}