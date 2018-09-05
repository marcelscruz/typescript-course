console.log('decorator')
function logged(constructorFn: Function) {
  console.log(constructorFn)
}

@logged
class Person4 {
  constructor() {
    console.log('hi')
  }
}

// ----------------------------- //

// Factory
function logging(value: boolean) {
  return value ? logged : null
}

@logging(true)
class Car2 {}

// ----------------------------- //

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this)
  }
}

@logging(true)
@printable
class Plant2 {
  name = 'green plant'
}

const plant2 = new Plant2()
// plant2.print() // NOT WORKING

// ----------------------------- //

// Method decorator
// Property decorator
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.writable = value
  }
}

function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value,
    }
    return newDescriptor
  }
}

class DecoProject {
  @overwritable(true) // decides if property projectName can be changed or not
  projectName: string

  constructor(name: string) {
    this.projectName = name
  }

  @editable(false)
  calcBudget() {
    console.log(1000)
  }
}

const decoProject = new DecoProject('super project')
decoProject.calcBudget()
// decoProject.calcBudget = function() { // editable set to false
//   console.log(2000)
// }
decoProject.calcBudget()
console.log(decoProject)

// ----------------------------- //

// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  // any because it can be the constructor or the prototype, thus instanciated or not
  console.log('Target: ', target)
  console.log('methodName: ', methodName)
  console.log('paramIndex: ', paramIndex)
}

class Course {
  name: string

  constructor(name: string) {
    this.name = name
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000)
    } else {
      console.log(200)
    }
  }
}

const course = new Course('Super course')
course.printStudentNumbers('anything', true)
course.printStudentNumbers('anything', false)
