// PART 2 OF MODULES
console.log('=== Part 2 of Modules ===');
const Airplane = require('./modules2.js');
// import { getModel, getMake } from './modules2.js';  - ES6 Code

console.log('accessing the functions imported:');
console.log(Airplane.getModel());
console.log(Airplane.getMake());

// Check modules-req3.js to see modules using ES6 Syntax.