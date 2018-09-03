"use strict";
// let & const
console.log('LET & CONST');
var variable = 'test';
console.log(variable);
variable = 'another value';
console.log(variable);
var maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99
// Block Scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// ------------------------ //
// Arrow functions
console.log('ARROW FUNCTIONS');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(2, 3));
var multiplyNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(multiplyNumbers(3, 10));
var greet2 = function () {
    console.log('Hello world!');
};
greet2();
// ------------------------ //
// Default parameters
console.log('DEFAULT PARAMETERS');
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('Done', start);
};
countDown();
// ------------------------ //
// Rest & Spread
console.log('REST & SPREAD');
var numbers2 = [1, 10, 99, -5];
console.log(Math.max(1, 10, 99, -5));
// console.log(Math.max(numbers))
console.log(Math.max.apply(Math, numbers2));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray('marcel', 1, 2, 6)); // [1, 2, 6]
// ------------------------ //
// Destructuring
console.log('DESTRUCTURING ');
var myHobbies = ['Cooking', 'Sports'];
console.log(myHobbies[0], myHobbies[1]);
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData1 = {
    username: 'Marcel',
    age: 27,
};
var username = userData1.username, myAge3 = userData1.age;
console.log(username, myAge3);
// ------------------------ //
// Template literals
var userName = 'Marcel';
var greeting = "This is the heading!\nHello, I'm " + userName + ".\n";
console.log(greeting);
