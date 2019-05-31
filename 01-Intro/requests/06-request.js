/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS I
XHR POST Requests II
*/

/* More information on requests1-readme.md

12 - XHR POST Requests II

*/

// It is only a basic example of how to write the code for an XHR POST Request:
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'}); // To transform the data into a string

xhr.responseType = 'json';

// Pay attention that below this is jQuery and not vanilla JS.
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
    }
}

xhr.open('POST', url);
xhr.send(data); // Will send the data as a string