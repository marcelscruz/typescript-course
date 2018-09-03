"use strict";
// String
var myName = 'Marcel';
// myName = 27
// ---------------------------- //
// Number
var myAge = 27;
// myAge = 'Marcel'
// ---------------------------- //
// Boolean
var hasHobbies = true;
// hasHobbies = 1
// ---------------------------- //
// Assign types
// let myRealAge // type 'any'
var myRealAge; //
myRealAge = 27;
// myRealAge = '27'
// ---------------------------- //
// Array
var hobbies = ['Cooking', 'sports'];
hobbies = [1];
// hobbies = 1
// ---------------------------- //
// Tuples
var address = ['My Street', 99];
address = ['Second street', 1];
// address = [11, 'Second street']
// ---------------------------- //
// Enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var myColor = Color.Blue;
// console.log(myColor) // 100
// ---------------------------- //
// Any
var car = 'BMW';
car = {
    key: 'value',
};
// ---------------------------- //
// Functions
function returnMyName() {
    return myName;
}
console.log(returnMyName()); // Marcel
// ---------------------------- //
// Void
function sayHello() {
    console.log('Hello World');
    // return 'hi'
}
// ---------------------------- //
// Argument types
function multiply(a, b) {
    return a * b;
}
// console.log(multiply(2, 'Max'))
// ---------------------------- //
// Function types
var myMultiply;
// myMultiply = sayHello
// myMultiply()
myMultiply = multiply;
console.log(myMultiply(2, 2));
// ---------------------------- //
// Objects
var userData = {
    name: 'Marcel',
    age: 27,
};
// userData = {}
// userData = {
//   a: 'Hello',
//   b: 22
// }
userData = {
    age: 22,
    name: 'Cruz',
}; // keys are important, order isn't
var typedObject;
typedObject = {
    age: 20,
    name: 'Cruz',
};
// ---------------------------- //
console.log(typedObject.name);
// Complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (a) {
        return this.data;
    },
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (a) {
        return this.data;
    },
};
// ---------------------------- //
// Union types
var myRealNumber = 27;
myRealNumber = '27';
// myRealNumber = true
// ---------------------------- //
// Check types
var finalValue = 'A string';
if (typeof finalValue === 'string') {
    console.log('Final value is a number');
}
// ---------------------------- //
// Never
function neverReturns() {
    throw new Error('An error');
}
// ---------------------------- //
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
