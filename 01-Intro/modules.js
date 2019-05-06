/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT MODULES */

/*
INTERMEDIATE JAVASCRIPT MODULES
module.exports
We can get started with modules by defining a module in one file and making the module available for use in another file. Below is an example of how to define a module and how to export it using the statement module.exports.

In menu.js we write:

let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;
Let’s consider what this code means.

- let Menu = {}; creates the object that represents the module Menu. The statement contains an uppercase variable named Menu which is set equal to an object.
- Menu.specialty is defined as a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value.
- "Roasted Beet Burger with Mint Sauce"; is the value stored in the Menu.specialty property.
- module.exports = Menu; exports the Menu object as a module. module is a variable that represents the module, and exports exposes the module as an object.

The pattern we use to export modules is thus:

Define an object to represent the module.
Add data or behavior to the module.
Export the module.

INDEX - # Code Line
35 - Module Exports
47 - require()
51 - Adding more to our exports.
71 - MODULES 2 - go to modules2.js
*/

// Module Exports;
console.log('Creating a module:');

const Airplane = {
  myAirplane: "StarJet",
};
module.exports = Airplane; // ES5 syntax
// ES6 Syntax = export default Airplane;
// ATTENTION - NEW EXPORT ON LINE 68;

console.log('Object created:');
console.log(Airplane);

console.log('\nCheck modules-req.js to see the imported module');
// Module Require - File modules-req.js

/* module.exports = Adding more to our exports */
console.log('Adding more to our exports:');
/* We can also wrap any collection of data and functions in an object, and export the object using module.exports. In modules.js, we could write:

module.exports = {
    model: 'Boeing',
    getModel: function() {
        return this.model;
    }
};

In the above code, notice:

module.exports exposes the current module as an object.
model and getModel are properties on the object.

*/
console.log('\nThe new export, including the new model and getModel properties.\n');


/* GO TO MODULES-2.js */
