"use strict";
// Simple generic
function echo(data) {
    return data;
}
console.log(echo('Marcel'));
console.log(echo('Marcel').length); // 6
console.log(echo(27));
console.log(echo(27).length); // undefined
console.log(echo({ name: 'Marcel', age: 27 }));
// --------------------------------- //
// Better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Marcel')); // 6
console.log(betterEcho('Marcel').length); // 6
// console.log(betterEcho<number>("27")) // expects number
// console.log(betterEcho(27).length) // undefined
console.log(betterEcho({ name: 'Marcel', age: 27 }));
// --------------------------------- //
// Built-in generics
var testResults2 = [1.94, 2.33];
testResults2.push(-2.99);
// testResults2.push('string')
console.log(testResults2);
// --------------------------------- //
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['banana', 'apple']); // being more explicit
printAll(['pear', 'orange']);
// --------------------------------- //
// Generic types
var echo2 = betterEcho;
console.log(echo2('Something'));
// --------------------------------- //
// Generic class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // + casts to a number
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
