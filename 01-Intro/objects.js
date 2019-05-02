/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
OBJECTS */

/* You’re probably already more comfortable with objects than you think, because JavaScript loves objects! Many components of the language are actually objects under the hood, and even the parts that aren’t— like strings or numbers— can still act like objects in some instances.

There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. With the seventh type, objects, we open our code to more complex possibilities. We can use JavaScript objects to model real-world things, like a basketball, or we can use objects to build the data structures that make the web possible.

At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice. You’ve been using the power of objects all along, but now it’s time to understand the mechanics of objects and start making your own! */

/*
INDEX - # Code Line
20 - Object Literals
59 - Object Methods
92 - Nested Objects
147 - Looping Through Objects - FOR IN


*/

/* Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:

let spaceship = {}; // spaceship is an empty object

We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value. */

console.log('Object Literals:\n');
const fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};
console.log(fasterShip);
// Adding another key: value pair.
console.log('Property Assignment: Adding more to the object:');
fasterShip.name = 'Razor10';
console.log(fasterShip);
console.log('Property Assignment: Changing the object:');
fasterShip.color = 'gold';
console.log(fasterShip);
console.log('Property Assignment: Delete a property of the object:');
delete fasterShip.name;
console.log(fasterShip);


// We can access it's properties using the bracket or dot notation:
console.log('Accessing the ship properties:');
console.log(`Ship's color: ${fasterShip.color}`);
console.log(`Ship's Fuel Type: ${fasterShip['Fuel Type']}`);
/* We *must* use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error. */

/* Using a function to get the property we want: */
console.log('Using a function to get a property:');
fasterShip.homePlanet = 'Earth';
const returnAnyObjProp = (objName, propName) => {
    console.log(objName[propName]);
}
returnAnyObjProp(fasterShip, 'homePlanet');
/* If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter. */

console.log('\nObject Methods:\n');
/* Object methods:
When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

Do object methods seem familiar? That’s because you’ve been using them all along! For example console is a global javascript object and .log() is a method on that object. Math is also a global javascript object and .floor() is a method on it.

We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression. */
fasterShip.mission = function () {
    console.log('My mission is to: Head back home!');
};
console.log('Calling the object function:');
fasterShip.mission();

/* With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
const alienShip = {
  invade () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
}; */
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}
alienShip.retreat();
alienShip.takeOff();

console.log('\nNested Objects:\n');
/* NESTED OBJECTS
In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!

We can chain operators to access nested properties. We’ll have to pay attention to which operator makes sense to use in each layer. It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.*/

const spaceship = {
    telescope: {
       yearBuilt: 2018,
       model: '91031-XLT',
       focalLength: 2032
    },
   crew: {
       captain: {
           name: 'Sandra',
           degree: 'Computer Engineering',
           encourageTeam() { console.log('We got this!') }
        }
   },
   engine: {
       model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
           terabytes: 100,
           monitors: 'HD'
        },
       'back-up': {
          battery: ['Lithium', 'LiIon'],
          terabytes: 50
        }
   }
};
console.log('Spaceship object:');
console.log(spaceship);
console.log('Accessing a nested property of an nested object:');
console.log('The spaceship battery:');
console.log(spaceship.nanoelectronics['back-up'].battery[0]);

/* PASS BY REFERENCE
Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).
 */
console.log('\nPass by reference:\n');
let smallSpaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};
const addShipColor = (obj, color) => {
    obj.color = color;
}
console.log(smallSpaceship);
console.log('Small Space Ship after changing the color with a function:');
addShipColor(smallSpaceship, 'green');
console.log(smallSpaceship);

console.log('\nLoop Through Objects:\n');
/* Looping Through Objects - FOR IN
Loops are programming tools that repeat a block of code until a condition is met. We learned how to iterate through arrays using their numerical indexing, but the key-value pairs in objects aren’t ordered! JavaScript has given us alternative solution for iterating through objects with the for...in syntax .

for...in will execute a given block of code for each property in an object.
MDN Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in */

let newSpaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};
// for...in
for (let crewMember in newSpaceship.crew) {
  console.log(`${crewMember}: ${newSpaceship.crew[crewMember].name}`)
};
console.log('Now, just getting the degree of each one:');
for (let crewMember in newSpaceship.crew) {
    console.log(`${newSpaceship.crew[crewMember].degree}`);
}

/* Let’s review what we learned in this lesson:

- Objects store collections of key-value pairs.
- Each key-value pair is a property—when a property is a function it is known as a method.
- An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
- You can access, add or edit a property within an object by using dot notation or bracket notation.
- We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
- We can navigate complex, nested objects by chaining operators.
- Objects are mutable—we can change their properties even when they’re declared with const.
- Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
- We can iterate through objects using the For...in syntax. */

