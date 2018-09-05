"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('decorator');
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person4 = /** @class */ (function () {
    function Person4() {
        console.log('hi');
    }
    Person4 = __decorate([
        logged
    ], Person4);
    return Person4;
}());
// ----------------------------- //
// Factory
function logging(value) {
    return value ? logged : null;
}
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2 = __decorate([
        logging(true)
    ], Car2);
    return Car2;
}());
// ----------------------------- //
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant2 = /** @class */ (function () {
    function Plant2() {
        this.name = 'green plant';
    }
    Plant2 = __decorate([
        logging(true),
        printable
    ], Plant2);
    return Plant2;
}());
var plant2 = new Plant2();
// plant2.print() // NOT WORKING
// ----------------------------- //
// Method decorator
// Property decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value,
        };
        return newDescriptor;
    };
}
var DecoProject = /** @class */ (function () {
    function DecoProject(name) {
        this.projectName = name;
    }
    DecoProject.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true) // decides if property projectName can be changed or not
    ], DecoProject.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], DecoProject.prototype, "calcBudget", null);
    return DecoProject;
}());
var decoProject = new DecoProject('super project');
decoProject.calcBudget();
// decoProject.calcBudget = function() { // editable set to false
//   console.log(2000)
// }
decoProject.calcBudget();
console.log(decoProject);
// ----------------------------- //
// Parameter decorator
function printInfo(target, methodName, paramIndex) {
    // any because it can be the constructor or the prototype, thus instanciated or not
    console.log('Target: ', target);
    console.log('methodName: ', methodName);
    console.log('paramIndex: ', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(200);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course('Super course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
