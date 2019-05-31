/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT MODULES */

/*
INTERMEDIATE JAVASCRIPT MODULES - ES6 Syntax for module exports
*/

/* This is an .mjs file
Use node --experimental-modules 'filename' to run! */

/* export default
As of ES6, JavaScript has implemented a new more readable and flexible syntax for exporting modules. These are usually broken down into one of two techniques, default export and named exports.

We’ll begin with the first syntax, default export. The default export syntax works similarly to the module.exports syntax, allowing us to export one module per file.

Let’s look at an example in menu.js.

let Menu = {};

export default Menu; */

let Airplane = {
  availableAirplanes: [
    {
        name: 'AeroJet',
        fuelCapacity: 800
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500
    }
  ]
};

export default Airplane;
console.log('\nCheck Modules-req3.mjs to see it imported\n');