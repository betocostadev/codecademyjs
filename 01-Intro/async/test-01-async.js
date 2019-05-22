/* Based on FunFunFunction
Video: https://www.youtube.com/watch?v=568g8hxJJp4 */

const fetch = require('node-fetch');

// Not using async / await
/* function fetchAvatarUrl(userId) {
    return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
      .then(response => response.json())
      .then(data => data.imageUrl)
}; */

// Using async / await
async function fetchAvatarUrl(userId) {
    // This is not the promise, it is the actual response:
    const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    // Here we will do the same thing, we will use the await keyword to get the data instead
    // of the promise
    const data = await response.json()
    return data.imageUrl;
    //   .then(response => response.json())
    //   .then(data => data.imageUrl)
};

const result = fetchAvatarUrl(123);
result.then((success) => {
    console.log('The http I got is: ' + success);
});