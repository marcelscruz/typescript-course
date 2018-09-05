"use strict";
// Class
function greet3(person3) {
    console.log('Hello,', person3.firstName);
}
var person3 = {
    firstName: 'Marcel',
    // age: 27,
    hobbies: ['cooking', 'sports'],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    },
};
greet3(person3);
// greet3({ name: 'Marcel', age: 27 }) // object literal checks for exact properties in interface
person3.greet('Cruz');
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    Person3.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person3;
}());
var myPerson = new Person3();
myPerson.firstName = 'Marcel';
myPerson.lastNaem = 'Cruz';
greet3(myPerson);
myPerson.greet(myPerson.lastNaem);
var myDoubleFunction;
myDoubleFunction = function (number1, number2) {
    return (number1 + number2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: 'Marcel',
    greet: function (lastName) {
        console.log('Hello');
    },
};
console.log(oldPerson);
// INTERFACES ARE NOT COMPILED, JUST USED FOR CHECKING
