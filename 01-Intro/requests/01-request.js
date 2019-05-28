/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS
HTTP Requests


*/

/* More information on 01-request.md

14 - HTTP Requests

*/

console.log('=== HTTP Requests ===\n');

console.log('First message!');
/* Just to have a basic understanding of the call stack, take a look at the setTimeout below
Since, this will be sent to the call stack, even if we set the time to 0, the message inside
the setTimeout will still run last. */
setTimeout(() => {
   console.log('This message will always run last...');
}, 0); // Can be 0, 2500, 5000, any time you want, it will run after the other statements.
console.log('Second message!');

