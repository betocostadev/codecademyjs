/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT MODULES

INTERMEDIATE JAVASCRIPT MODULES - NAMED EXPORTS
*/

/* INDEX - # Code Line
18 - Named Exports
40 - Named Exports Code
68 - exporting
74 - Export Named Exports (each variable)
90 - Aliases
111 - COMBINING EXPORT STATEMENTS


*/

/* Named Exports
ES6 introduced a second common approach to export modules. In addition to default export, named exports allow us to export data through the use of variables.

Let’s see how this works. In menu.js we would be sure to give each piece of data a distinct variable name:

let specialty = '';
    function isVegetarian() {
    };
    function isLowSodium() {
    };

export { specialty, isVegetarian };

- Notice that, when we use named exports, we are not setting the properties on an object. Each export is stored in its own variable.

- specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions. Recall that in JavaScript, every function is in fact a function object.

- export { specialty, isVegetarian }; exports objects by their variable names. Notice the keyword export is the prefix.

- specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified.
*/

let Airplane = '';
let availableAirplanes = [
    {
     name: 'AeroJet',
     fuelCapacity: 800,
     availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
    },
    {
      name: 'SkyJet',
      fuelCapacity: 500,
      availableStaff: ['pilots', 'flightAttendants']

    }
];
let flightRequirements = {
  requiredStaff: 4};

function meetsStaffRequirements (availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

// console.log(meetsStaffRequirements(availableAirplanes[0].availableStaff, flightRequirements.requiredStaff));
// console.log(meetsStaffRequirements(availableAirplanes[1].availableStaff, flightRequirements.requiredStaff));

export {availableAirplanes, flightRequirements, meetsStaffRequirements};
console.log(`
File Modules 4 is exporting:
availableAirplanes, flightRequirements and meetsStaffRequirements.
`);

/* EXPORT NAMED EXPORTS - Declare and export
Named exports are also distinct in that they can be exported as soon as they are declared, by placing the keyword export in front of variable declarations.

In menu.js

export let specialty = '';
export function isVegetarian() {
};
function isLowSodium() {
};

- The export keyword allows us to export objects upon declaration, as shown in export let specialty and export function isVegetarian() {}.
- We no longer need an export statement at the bottom of our file, since this behavior is handled above.

*/

/* ALIASES
Export as

Named exports also conveniently offer a way to change the name of variables when we export or import them. We can do this with the as keyword.

Let’s see how this works. In our menu.js example

let specialty = '';
let isVegetarian = function() {
};
let isLowSodium = function() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

In the above example, take a look at the export statement at the bottom of the of the file.

The as keyword allows us to give a variable name an alias as demonstrated in specialty as chefsSpecial and isVegetarian as isVeg.
Since we did not give isLowSodium an alias, it will maintain its original name.
*/

/* COMBINING EXPORT STATEMENTS
We can also use named exports and default exports together. In menu.js:

let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;

Here we use the keyword export to export the named exports at the bottom of the file. Meanwhile, we export the isGlutenFree variable using the export default syntax.

This would also work if we exported most of the variables as declared and exported others with the export default syntax.

export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
};
export let isLowSodium = function() {
};
let isGlutenFree = function() {
};

export default isGlutenFree;

Here we use the export keyword to export the variables upon declaration, and again export the isGlutenFree variable using the export default syntax

While it’s better to avoid combining two methods of exporting, it is useful on occasion. For example, if you suspect developers may only be interested in importing a specific function and won’t need to import the entire default export.
*/