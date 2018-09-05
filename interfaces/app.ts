// Class

interface NamedPerson {
  firstName: string
  age?: number // optional
  [propName: string]: any // don't know the name and type
  greet(lastName: string): void
}

function greet3(person3: NamedPerson) {
  console.log('Hello,', person3.firstName)
}

const person3: NamedPerson = {
  firstName: 'Marcel',
  // age: 27,
  hobbies: ['cooking', 'sports'],
  greet(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}`)
  },
}

greet3(person3)
// greet3({ name: 'Marcel', age: 27 }) // object literal checks for exact properties in interface
person3.greet('Cruz')

class Person3 implements NamedPerson {
  firstName: string
  lastNaem: string
  greet(lastName: string): void {
    console.log(`Hi, I am ${this.firstName} ${lastName}`)
  }
}

const myPerson = new Person3()
myPerson.firstName = 'Marcel'
myPerson.lastNaem = 'Cruz'
greet3(myPerson)
myPerson.greet(myPerson.lastNaem)

// ---------------------------------- //

// Function

interface DoubleValueFunc {
  (number1: number, number2: number): number
}

let myDoubleFunction: DoubleValueFunc
myDoubleFunction = function(number1: number, number2: number) {
  return (number1 + number2) * 2
}

console.log(myDoubleFunction(10, 20))

// ---------------------------------- //

// Interface Inheritance

interface AgerPerson extends NamedPerson {
  age: number
}

const oldPerson: AgerPerson = {
  age: 27,
  firstName: 'Marcel',
  greet(lastName: string) {
    console.log('Hello')
  },
}

console.log(oldPerson)

// INTERFACES ARE NOT COMPILED, JUST USED FOR CHECKING
