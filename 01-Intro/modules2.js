/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
JAVASCRIPT MODULES */

/* More ways to export our modules

INDEX -

*/

let Airplane = {};
module.exports = {
    model: 'F-35',
    make: 'Lockheed',
    getModel: function () {
        return this.model;
    },
    getMake: function () {
        return this.make;
    }
};

/* ES6 Code to export the code above:
export const model = 'F-35';
export const make = 'Lockheed';
export function getModel() {
    return this.model;
}
export function getMake() {
    return this.make;
} */

// Check modules-req2.js to see it using the codes above.
