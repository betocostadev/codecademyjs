/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT MODULES

INTERMEDIATE JAVASCRIPT MODULES - NAMED IMPORTS
*/

/* Named Imports
To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.

In the order.js file, for example, we would write:

import { specialty, isVegetarian } from './menu';

console.log(specialty);
Here specialty and isVegetarian are imported.

If we did not want to import either of these variables, we could omit them from the import statement.

We can then use these objects as in within our code. For example, we would use specialty instead of Menu.specialty.
*/

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './modules4';

console.log(`Now, testing the import in modules-req4.mjs:`);

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
};

displayStaffStatus();

console.log(`Name: ${availableAirplanes[0].name}, staff: ${availableAirplanes[0].availableStaff}`);

/* IMPORT as

To import named export aliases with the as keyword, we add the aliased variable in our import statement.

import { chefsSpecial, isVeg } from './menu';
In orders.js

We import chefsSpecial and isVeg from the Menu object.
Here, note that we have an option to alias an object that was not previously aliased when exported. For example, the isLowSodium object that we exported could be aliased with the as keyword when imported: import {isLowSodium as saltFree} from 'Menu';
Another way of using aliases is to import the entire module as an alias:

import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();

This allows us to import an entire module from menu.js as an alias Carte.

In this example, whatever name we exported would be available to us as properties of that module. For example, if we exported the aliases chefsSpecial and isVeg, these would be available to us. If we did not give an alias to isLowSodium, we would call it as defined on the Carte module.
*/

/* Combining Import Statements

We can import the collection of objects and functions with the same data.

We can use an import keyword to import both types of variables as such:

import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';

*/