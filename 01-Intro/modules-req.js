/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT MODULES */

/*
INTERMEDIATE JAVASCRIPT MODULES
require()
To make use of the exported module and the behavior we define within it, we import the module. A common way to do this is with the require() function.

For instance, say we want the module to control the menu’s data and behavior, and we want a separate file to handle placing an order. We would create a separate file order.js and import the Menu module from menu.js to order.js using require():

In order.js we would write:

const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();
We now have the entire behavior of Menu available in order.js. Here, we notice:

In order.js we import the module by creating a variable with const called Menu and setting it equal to the value of the require() function. We can set this variable to any variable name we like, such as menuItems.
require() is a JavaScript function that enables a module to load by passing in the module’s filepath as a parameter.
'./menu.js' is the argument we pass to the require() function.
The placeOrder() function then uses the Menu module in its function definition. By calling Menu.specialty, we access the property specialty defined in the Menu module.
We can then invoke the function using placeOrder()
Taking a closer look, the pattern to import a module is:

Import the module
Use the module and its properties within a program.

*/

console.log('Importing the module from modules.js');
/* require() - Importing the module from the modules.js file */
const Airplane = require('./modules.js');
//ES6 Syntax = import Airplane from './modules.js';

const logPlane = () => {
    console.log('Imported Airplane Module');
    console.log('My Airplane Model: ' + Airplane.myAirplane)};
logPlane();

console.log('\nGet the new exported module model on modules-req2\n');

