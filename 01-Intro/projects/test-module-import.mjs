/* Simple Test Module for importing.

Importing from test-module-export.mjs

Remember to use the command:
node --experimental-modules test-module-import.mjs
to run this file.

Based on: https://discuss.codecademy.com/t/why-would-i-want-to-combine-named-exports-with-default-exports/384429


*/

// Imports
import defaultExport from './test-module-export.mjs';
import {Person} from './test-module-export.mjs';

// Creating some persons
const james = new Person('James');
const bob = new Person('Bob');
console.log('\nNames of the new persons using the function that was not imported:\n');
console.log(james.name);
console.log(bob.name);

// Testing the default import:
console.log('\nThe file name:');
defaultExport.getFileName();