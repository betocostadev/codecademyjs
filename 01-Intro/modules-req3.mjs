/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT MODULES */

/*
INTERMEDIATE JAVASCRIPT MODULES - ES6 Syntax for importing modules
*/

/* import
ES6 module syntax also introduces the import keyword for importing objects. In our order.js example, we import an object like this:

import Menu from './menu';

- The import keyword begins the statement.
 - The keyword Menu here specifies the name of the variable to store the default export in.
from specifies where to load the module from.
- './menu' is the name of the module to load. When dealing with local files, it specifically refers to the name of the file without the extension of the file. */

/* ATTENTION!!!!!!!!!!
That's the default way to work with exports and imports in ES6, but, for Node is an
experimental feature. For it to work we must:
- name the files as .mjs
- run the code using the --experimental-modules flag.
In the case of this file, for it to work with Node, run with the command below:

node --experimental-modules modules3

*/

import Airplane from './modules3';
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
  console.log(`Fuel capacity of ${element.name}: ${element.fuelCapacity}`);
 });
}


displayFuelCapacity();