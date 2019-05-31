/* INTRO - PROJECT 1 - KELVIN WEATHER

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.*/

// Forecast today in Kelvin
const kelvin = 293;
// Kelvin to celsius convertion
const celsius = kelvin - 273;
// Celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Fahrenheit to a rounded number
fahrenheit = Math.floor(fahrenheit);
// Celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');
console.log('The temperature is ' + celsius + ' degrees Celsius.');
console.log('The temperature is ' + newton + ' Newton.');
