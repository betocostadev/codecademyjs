/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
REQUESTS II
async POST Requests II
*/

/* More information on requests2-readme.md

12 - async POST Request - Boiler plate code

*/

const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    })
      if (response.ok) {
        // Code to execute if the api returns the promise
        const jsonResponse = await response.json();
        return jsonResponse;
      }
    throw new Error('Request failed!');
  }
  catch(error) {
    // Code to execute if fails
    console.log(error);
  }
}