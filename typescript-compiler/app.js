"use strict";
var myName2 = 'Marcel';
var myAge2 = 27;
myAge2 = 2;
var test;
test = 'marcel';
console.log(test);
test = 2;
console.log(test);
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result; // Because strictNullChecks: true, result might not receive value
}
