/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS
XHR GET Requests II
*/

/* More information on requests-readme.md

12 - XHR GET Request II

*/

// XMLHTTPRequest GET
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
    }
}

xhr.open('GET', url);
xhr.send();
// Using Node it will not work since we are not getting anything at all.


