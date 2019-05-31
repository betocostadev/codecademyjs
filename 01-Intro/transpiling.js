/* CODECADEMY - INTRODUCTION TO JAVASCRIPT
COMPATIBILITY AND TRANSPILATION */

/* BROWSER COMPATIBILITY AND TRANSPILATION
In this lesson, you will learn about two important tools for addressing browser compatibility issues.

caniuse.com — A website that provides data on web browser compatibility for HTML, CSS, and JavaScript features. You will learn how to use it to look up ES6 feature support.
Babel — A Javascript library that you can use to convert new, unsupported JavaScript (ES6), into an older version (ES5) that is recognized by most modern browsers.


INDEX - # Code Line
19 - Variables and template literals
33 - Using Babel
58 - .babelrc file
76 - Babel Source Lib
101 - Babel Build
*/

var pasta = "Spaghetti"; // ES5 syntax
const meat = "Pancetta"; // ES6 syntax
let sauce = "Eggs and cheese"; // ES6 syntax
// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
console.log(carbonara);

/* The version of JavaScript that preceded ES6 is called JavaScript ES5. Three reasons for the ES5 to ES6 updates are listed below:

- A similarity to other programming languages — JavaScript ES6 is syntactically more similar to other object-oriented programming languages. This leads to less friction when experienced, non-JavaScript developers want to learn JavaScript.
- Readability and economy of code — The new syntax is often easier to understand (more readable) and requires fewer characters to create the same functionality (economy of code).
- Addresses sources of ES5 bugs — Some ES5 syntax led to common bugs. With ES6, ECMA introduced syntax that mitigates some of the most common pitfalls.
*/

/*
STRUCTURE WHEN USE BABEL:
Remember to use 'npm init' to start npm in your project folder and the node files.

To install Babel, we need to npm install two packages, babel-cli and babel-preset-env. However, npm installs over one hundred other packages that are dependencies for Babel to run properly.
$ npm install babel-cli -D
$ npm install babel-preset-env -D

The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and above (ES6+), to ES5.

The -D flag instructs npm to add each package to a property called devDependencies in package.json. Once the project’s dependencies are listed in devDependencies, other developers can run your project without installing each package separately. Instead, they can simply run npm install — it instructs npm to look inside package.json and download all of the packages listed in devDependencies.

The initial JavaScript project file structure is:
project
  |_ src
  |___ main.js
  |_ package.json

A package.json file contains information about the current JavaScript project. Some of this information includes:

- Metadata — This includes a project title, description, authors, and more.
- A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
- Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.

=============================

.babelrc
Now that you’ve downloaded the Babel packages, you need to specify the version of the source JavaScript code.

You can specify the initial JavaScript version inside of a file named .babelrc. In your root directory, you can run touch .babelrc to create this file.
Inside .babelrc you need to define the preset for your source JavaScript file. The preset specifies the version of your initial JavaScript file.

Usually, you want to transpile JavaScript code from versions ES6 and later (ES6+) to ES5. From this point on, we will refer to our source code as ES6+, because Ecma introduces new syntax with each new version of JavaScript.

To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc:

{
  "presets": ["env"]
}

When you run Babel, it looks in .babelrc to determine the version of the initial JavaScript file. In this case, ["env"] instructs Babel to transpile any code from versions ES6 and later.

================================

Babel Source Lib
Inside of the package.json file, there is a property named "scripts" that holds an object for specifying command line shortcuts. It looks like this:

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}, ...

In the code above, the "scripts" property contains an object with one property called "test". Below the "test" property, we will add a script that runs Babel like this:

...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}

In the "scripts" object above, we add a property called "build". The property’s value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. Let’s consider each argument in the method call:

babel — The Babel command call responsible for transpiling code.
src — Instructs Babel to transpile all JavaScript code inside the src directory.
-d — Instructs Babel to write the transpiled code to a directory.
lib — Babel writes the transpiled code to a directory called lib.

=================================

Build
We’re ready to transpile our code! In the last exercise, we wrote the following script in package.json:

"build": "babel src -d lib"

Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.

From the command line, we type:

npm run build

The command above runs the build script in package.json.

Babel writes the ES5 code to a file named main.js (it’s always the same name as the original file), inside of a folder called lib. The resulting directory structure is:

project
|_ lib
|___ main.js
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
Notice, the directory contains a new folder named lib, with one file, called main.js.

The npm run build command will transpile all JavaScript files inside of the src folder. This is helpful as you build larger JavaScript projects — regardless of the number of JavaScript files, you only need to run one command (npm run build) to transpile all of your code.

*/