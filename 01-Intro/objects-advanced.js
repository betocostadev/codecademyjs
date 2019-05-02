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



*/
console.log('\n==Advanced Objects==\n');
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

console.log('\nArrow functions => and this:\n');
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

console.log('\nPrivacy\n');
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

console.log('\nGetters:\n');
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

console.log('\nSetters:\n');
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


console.log('\n==Factory Functions==\n');
/* Factory Functions */