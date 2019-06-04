/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS II
async GET Requests II
*/

/* More information on requests2-readme.md

12 - async GET Request - Boiler plate code

*/

const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json()
      // Code to execute when the promise is received
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }
  catch(error) {
    // Code to execute in case of an error
    console.log(error);
  }
}