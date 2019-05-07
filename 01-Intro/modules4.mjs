/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT MODULES

INTERMEDIATE JAVASCRIPT MODULES - NAMED EXPORTS
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

console.log(meetsStaffRequirements(availableAirplanes[0].availableStaff, flightRequirements.requiredStaff));
console.log(meetsStaffRequirements(availableAirplanes[1].availableStaff, flightRequirements.requiredStaff));