/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
CLASSES */
/* Introduction to Classes
JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. In this lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce similar objects.

Take, for example, an object representing a dog named halley. This dog’s name (a key) is "Halley" (a value) and has an age (another key) of 3 (another value).

Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. We can create a Dog class that serves as a template for creating new Dog objects. For each new dog, you can provide a value for their name.

As you can see, classes are a great way to reduce duplicate code and debugging time. */

/*
INDEX - # Code Line
20 - Intro to classes
76 - Inheritance
156 - Static Methods

*/

console.log('\n=== Introduction to classes ===\n');
class Dogs {
  // Class properties
  constructor(name) {
    this._name = name;
    this._behavior = 0;
    this._daysForBath = 15;
  }
  // Methods - getters:
  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  get daysForBath() {
      return this._daysForBath;
  }
  // Methods - setters:
  incrementBehavior() {
    this._behavior ++;
  }
  dirtyDays(days) {
      this._daysForBath = this._daysForBath - days;
  }

};

// Create a new dog instance:
const meg = new Dogs('Meg');
console.log(meg._name);
console.log(meg._behavior);
console.log('using a class method:');
meg.incrementBehavior();
meg.incrementBehavior();
console.log(meg);

console.log('Meg took a bath, how many days for the next bath?');
console.log(meg.daysForBath);

console.log('6 Days have passed, how many days for bath now?');
meg.dirtyDays(6);
console.log(meg.daysForBath);

/* Although you may see similarities between class and object syntax, there is one important method that sets them apart. It’s called the constructor method. JavaScript calls the constructor()method every time it creates a new instance of a class. */

/* Dogs is the name of our class. By convention, we capitalize and CamelCase class names.

- JavaScript will invoke the constructor() method every time we create a new instance of our Dogs class.
- This constructor() method accepts one argument, name.
- Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance’s name property to the name argument.
- Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves.
The behavior property is always initialized to zero. */

console.log('\n=== Inheritance ===\n');
/* Inheritance I
Imagine our doggy daycare is so successful that we decide to expand the business and open a kitty daycare. Before the daycare opens, we need to create a Cat class so we can quickly generate Cat instances. We know that the properties in our Cat class (name, behavior) are similar to the properties in our Dog class, though, there will be some differences, because of course, cats are not dogs.

We created a Cat class. It shares a couple of properties (_name and _behavior) and a method (.incrementBehavior()) with the Dog class from earlier exercises. The Cat class also contains one additional property (_usesLitter), that holds a boolean value to indicate whether a cat can use their litter box.

When multiple classes share properties or methods, they become candidates for inheritance — a tool developers use to decrease the amount of code they need to write.

With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.
*/
console.log('We will create a "superclass" Hospital Employee.');
class HospitalEmployee {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  // Special keyword = static | Creating a static password generator for the objects
  static generatePassword() {
      const randomPassword = Math.floor(Math.random() * 10000);
      return randomPassword;
  }
}

// Adding a sub-class to HospitalEmplyee:
class Nurse extends HospitalEmployee {
  constructor (name, department, certifications) {
      // If it was only one: super(name); More than one, follow the code below for super:
    super(name, department);
    this._certifications = certifications;
  }
  // Adding the child Nurse a get method
  get certifications() {
      return this._certifications;
  }
  // Adding the child Nurse a set method
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

// Creating an instance of the sub-class Nurse:
const nurseOlynyk = new Nurse('Olynyk', 'Intensive care', ['Trauma', 'Pediatrics']);
console.log(nurseOlynyk);

/* Let’s pay special attention to our new keywords: extends and super.

- The extends keyword makes the methods of the HospitalEmployee class available inside the Nurse class.
- The constructor, called when you create a new Nurse object, accepts two arguments, name and certifications.
- The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Nurse class to the constructor of the HospitalEmployee class. When the HospitalEmployee constructor runs, it sets this._name = name; for new Nurse instances.
- _certifications is a new property that is unique to the Nurse class, so we set it in the Nurse constructor.

Notice, we call super on the first line of our constructor(), then set the certifications property on the second line. In a constructor(), you must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call super on the first line of subclass constructors.
*/

/* Now that we know how to create an object that inherits properties from a parent class let’s turn our attention to methods.

When we call extends in a class declaration, all of the parent methods are available to the child class.

Since the extends keyword brings all of the parent’s getters and methods into the child class, nurseOlynyk.name accesses the name getter and returns the value saved to the name property.
*/
console.log('What\'s the first Nurse name?');
console.log(nurseOlynyk.name);

/* In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.

Below, we will add a getcertifications getter. The syntax for creating getters, setters, and methods is the same as it is in any other class. */
console.log('\nAdding a getter for the Nurse sub-class to get the certifications:');
console.log(nurseOlynyk.certifications);
console.log(`Nurse Olynyk certifications: ${nurseOlynyk.certifications}`);
console.log('Using the set to add a new certification to her:');
nurseOlynyk.addCertification('Genetics');
console.log(`Nurse Olynyk certifications: ${nurseOlynyk.certifications}`);


console.log('\n=== Static Methods ===');
/* Static Methods
Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.

Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods, like Date.now() which returns the current date, directly from the class. The .now() method is static, so you can call it directly from the class, but not from an instance of the class.

Let’s see how to use the static keyword to create a static method called generatePassword method for the HospitalEmployee class.*/

/* Check the line 102 */
console.log('Line 102');
console.log('Refer to the TEST on line 172!');

/* TEST
Testing to use a static to add a random name to a subclass object */

class Animal {
    constructor(species, name) {
        this._species = species;
        this._name = name;
    }
    get name() {
        return this._name;
    }

    // Create a name generator
    static generateName() {
      const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara', 'Theo', 'Naja'];
      const randomNumber = Math.floor(Math.random()*7);
      return names[randomNumber];
    }
}

class Cat extends Animal{
    constructor(species, name) {
        super(species, name);
    }
}

// Call the Super Class static to generate a name to the cat:
const catOne = new Cat('cat', Animal.generateName());
console.log(catOne);
console.log(catOne.name);

/*
Review: Classes

- Classes are templates for objects.
- Javascript calls a constructor method when we create a new instance of a class.
- Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
- We use the extends keyword to create a subclass.
- The super keyword calls the constructor() of a parent class.
- Static methods are called on the class, but not on instances of the class.
*/