/* Simple Test Module for exporting.

Remember to use the command:
node --experimental-modules test-module-export.mjs
to run this file.

Based on: https://discuss.codecademy.com/t/why-would-i-want-to-combine-named-exports-with-default-exports/384429

Combine named export with default export

The objective here is to 'hide' a function that we don't want to export.
We will only export what is needed.
*/

// Function to transform the name to uppercase.
const upperCaseName = name => {
    return name.toUpperCase();
}

// Simple object with a function to be exported
const defaultExport = {
    name: 'test-module-export.mjs',
    getFileName () {
        console.log(this.name);
    }
}

// Simple class to be used
class Person {
    constructor (name) {
        this._name = name;
    }
    get name () {
        return upperCaseName(this._name);
    }
}

export default defaultExport;
export {Person};