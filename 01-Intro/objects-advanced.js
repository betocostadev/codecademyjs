/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
ADVANCED OBJECTS */
/* Remember, objects in JavaScript are containers that store data and functionality. In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.

So if there are no objections, let’s learn more about objects!

In this lesson we will cover these topics:

- how to use the this keyword.
- conveying privacy in JavaScript methods.
- defining getters and setters in objects.
- creating factory functions.
- using destructuring techniques.
*/

/*
INDEX - # Code Line
28 - The THIS keyword
62 - Arrow Functions and this
110 - Privacy
149 - Getters
198 - Setters
256 - Factory Functions
282 - Property Value Shorthand - Destructuring
305 - Destructured Assignment
340 - Built-in Object Methods
*/
console.log('\n=== Advanced Objects ===\n');
console.log('The \'this\' keyword:');
// Using the this keyword on objects
// We will create a function that we will use to create objects in a easier way:
const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greetMaster() {
    console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
};
const t101 = massProdRobot('T101', false);
console.log(t101);
console.log('Using the this keyword it will make the function of the object work:');
t101.greetMaster();

/* Example of 'this':
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet();
// Output: herbivore
The this keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.
*/

console.log('\n=== Arrow functions => and this ===\n');
/* Arrow Functions and 'this'
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined

In the comment, you can see that goat.diet() would log undefined. So what happened? Notice that in the .diet() is defined using an arrow function.

Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.

To read more about either arrow functions or the global object check out the MDN documentation of the global object and arrow functions.

The key takeaway from the example above is to avoid using arrow functions when using this in a method!
AVOID USING ARROW FUNCTIONS WHEN USING THIS IN A METHOD
*/

console.log(`Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object.`);
console.log(`It's a good practice to avoid using arrow functions when you are using this in a method.`);

/*
The Wrong way:
const smallrobot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
Will not work because of the arrow function
*/
console.log('\nThe correct way of the Small robot to work:');
const smallrobot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
};
smallrobot.checkEnergy();

console.log('\n=== Privacy ===\n');
/*
Privacy
Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.

const bankAccount = {
  _amount: 1000
}

In the example above, the _amount is not intended to be directly manipulated.

Even so, it is still possible to reassign _amount:

bankAccount._amount = 1000000;

In later exercises, we’ll cover the use of methods called getters and setters. Both methods are used to respect the intention of properties prepended, or began, with _.
*/
console.log(`It is a common practice to write the object properties we don't want to change like:
_start: 500,
_doNotChange: true`);

const electricCar = {
    model: 'Tesla X',
    _energyLevel: 50,
    recharge () {
        this._energyLevel += 30;
    }
};
console.log('\nChanging what you should\'t can break something:');
console.log('The car energy level: ', electricCar._energyLevel);
electricCar._energyLevel = 'high';
electricCar.recharge();
console.log('After we break it. The car energy level: ', electricCar._energyLevel);

/* If we change the _energyLevel above to something like a 'string', we would get unexpected
results after using the recharge() function. That's why we should avoid to change it. */

console.log('\n=== Getters ===\n');
/* Getters
Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property!
*/
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
    } else {
        return 'Missing a first name or a last name.';
    }
  }
}
console.log(`The persons name is inside the object and split in first and last name.
Using a getter we will get both:`);
console.log(person.fullName);

/* Notice that in the getter method above:

- We use the get keyword followed by a function.
- We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
- We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.
- In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.

Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

- Getters can perform an action on the data when getting a property.
- Getters can return different values using conditionals.
- In a getter, we can access the properties of the calling object using this.
- The functionality of our code is easier for other developers to understand.

Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above. */

const weirdRobot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if(typeof this._energyLevel === 'number') {
    return `My current energy level is ${this._energyLevel}`;
    } else {
    return 'system not working!';
    }
  }
};
console.log('Getting the Weird Robot Energy Level:')
console.log(weirdRobot.energyLevel);

console.log('\n=== Setters ===\n');
/* Setters
Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.
*/
const somePerson = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
    this._age = newAge;
    } else {
    console.log('You must assign a number to age');
    }
  }
};
console.log('somePerson age: ', somePerson._age);
/* Notice that we are not changing the age by directly changing it with:
somePerson._age = 33.
We are using the set method that is inside the somePerson object */
somePerson.age = 33;
console.log('after setting it:')
console.log('somePerson age: ', somePerson._age);

/*
- We can perform a check for what value is being assigned to this._age.
- When we use the setter method, only values that are numbers will reassign this._age
- There are different outputs depending on what values are used to reassign this._age.

Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks like we’re reassigning the value of a property.

Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is supposed to be used. Nonetheless, even with a setter method, it is still possible to directly reassign properties.
*/

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
    return this._numOfSensors;
    } else {
    return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if(typeof num === 'number' && num >= 0) {
    this._numOfSensors = num;
    } else {
    console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};
console.log('another example. The robot num of sensors:');
console.log(robot.numOfSensors);
robot.numOfSensors = 100
console.log('the robot num of sensors after using set:');
console.log(robot.numOfSensors);


console.log('\n=== Factory Functions ===\n');
/* Factory Functions
So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly. Here’s where factory functions come in. A real world factory manufactures multiple copies of an item quickly and on a massive scale. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different types of monsters and we could go about making each monster individually but we can also use a factory function to make our lives easier. To achieve this diabolical plan of creating multiple monsters objects, we can use a factory function that has parameters:
*/
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }
  }
};

/* In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable */
console.log('Monsters created using a factory function:')
const gruntar = monsterFactory('gruntar', 150, 'food', 'I eat all the food!');
const akratian = monsterFactory('akratian', 230, 'water', 'I\'ll kill you for that!');
console.log(gruntar);
gruntar.scare();
console.log(akratian);
akratian.scare();

console.log('\n=== Property Value Shorthand - Destructuring ===\n');
/* Property Value Shorthand
ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.

In the previous exercise, we created a factory function that helped us create objects. We had to assign each property a key and value even though the key name was the same as the parameter name we assigned to it.

Imagine if we had to include more properties, that process would quickly become tedious! But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes.
*/
const betterMonsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name,
    age,
    energySource,
    scare() {
    console.log(catchPhrase);
    }
  }
};
console.log('New monster created in the new factory:');
const mandragora = betterMonsterFactory('Mandragora', 45, 'air', 'Don\'t eat me!');
console.log(mandragora);
mandragora.scare();

console.log('\n=== Destructured Assignment ===\n');
/* Destructured Assignment
We often want to extract key-value pairs from objects and save them as variables. Take for example the following object:*/
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
console.log(vampire);
/* we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below: */
const { residence } = vampire;
console.log('Destructured vampire residence:')
console.log(residence);

const { day } = vampire.preferences;
console.log('What the vampire does in the day?');
console.log(day);

const monster = {
  name: 'Gojira',
  gsize: 80,
  gweight: 4500
}
const { gsize, gweight} = monster;
console.log('\n', monster);
console.log(gsize);
console.log(gweight);
console.log('And what about the types?');
console.log(`gsize variable that holds the Gojira weight:
The type is: ${typeof gsize}`);


console.log('\n=== Built-in Object Methods ===\n');
/* Built-in Object Methods
Built-in Object Methods
In the previous exercises we’ve been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects!

For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more! Practice your documentation reading skills and check out: MDN’s object instance documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods
There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few.
*/

const theRobot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const theRobotKeys = Object.keys(theRobot);
console.log('The Object.keys() method:');
console.log(theRobotKeys);

// Declare robotEntries below this line:
const theRobotEntries = Object.entries(theRobot);
console.log('The Object.entries() method:');
console.log(theRobotEntries);

// Declare newRobot below this line:
// You can use the methods or key:value pairs to add and then the object, like below:
const newRobot = Object.assign({laser: true, voiceRec: true}, theRobot);
console.log('The copied and modified new robot:');
console.log(newRobot);

/* Review
Congratulations on finishing Advanced Objects!

Let’s review the concepts covered in this lesson:

- The object that a method belongs to is called the calling object.
- The this keyword refers the calling object and can be used to access properties of the calling object.
- Methods do not automatically have access to other internal properties of the calling object.
- The value of this depends on where the this is being accessed from.
- We cannot use arrow functions as methods if we want to access other internal properties.
- JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
- The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
- Setters and getter methods allow for more detailed ways of accessing and assigning properties.
- Factory functions allow us to create object instances quickly and repeatedly.
- There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
- As with any concept, it is a good skill to learn how to use the documentation with objects!


If you want to challenge yourself:

Find the value of this in a function inside of a method.
Learn the outcome of using a property that has the exact same name as a setter/getter method.
Create a new factory function that can create object instances of your choice.
Read documentation on other destructuring techniques and apply it to your code.
Try out other built-in object methods and learn what they do.

*/