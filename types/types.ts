// String
let myName = 'Marcel'
// myName = 27

// ---------------------------- //

// Number
let myAge = 27
// myAge = 'Marcel'

// ---------------------------- //

// Boolean
let hasHobbies = true
// hasHobbies = 1

// ---------------------------- //

// Assign types
// let myRealAge // type 'any'
let myRealAge: number //
myRealAge = 27
// myRealAge = '27'

// ---------------------------- //

// Array
let hobbies: any[] = ['Cooking', 'sports']
hobbies = [1]
// hobbies = 1

// ---------------------------- //

// Tuples
let address: [string, number] = ['My Street', 99]
address = ['Second street', 1]
// address = [11, 'Second street']

// ---------------------------- //

// Enum
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue, // 101
  Yellow = 2, // 2
}

let myColor: Color = Color.Blue
// console.log(myColor) // 100

// ---------------------------- //

// Any
let car: any = 'BMW'
car = {
  key: 'value',
}

// ---------------------------- //

// Functions
function returnMyName(): string {
  return myName
}
console.log(returnMyName()) // Marcel

// ---------------------------- //

// Void
function sayHello(): void {
  console.log('Hello World')
  // return 'hi'
}

// ---------------------------- //

// Argument types
function multiply(a: number, b: number): number {
  return a * b
}
// console.log(multiply(2, 'Max'))

// ---------------------------- //

// Function types
let myMultiply: (val1: number, val2: number) => number
// myMultiply = sayHello
// myMultiply()
myMultiply = multiply
console.log(myMultiply(2, 2))

// ---------------------------- //

// Objects
let userData = {
  name: 'Marcel',
  age: 27,
}

// userData = {}
// userData = {
//   a: 'Hello',
//   b: 22
// }
userData = {
  age: 22,
  name: 'Cruz',
} // keys are important, order isn't

let typedObject: { name: string; age: number }

typedObject = {
  age: 20,
  name: 'Cruz',
}

// ---------------------------- //

console.log(typedObject.name)

// Complex object
let complex: { data: number[]; output: (a: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(a: boolean): number[] {
    return this.data
  },
}

// complex = {}

// ---------------------------- //

// Type alias

type Complex = { data: number[]; output: (a: boolean) => number[] }

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(a: boolean): number[] {
    return this.data
  },
}

// ---------------------------- //

// Union types
let myRealNumber: number | string = 27
myRealNumber = '27'
// myRealNumber = true

// ---------------------------- //

// Check types
let finalValue = 'A string'

if (typeof finalValue === 'string') {
  console.log('Final value is a number')
}

// ---------------------------- //

// Never
function neverReturns(): never {
  throw new Error('An error')
}

// ---------------------------- //

// Nullable types
let canBeNull: number | null = 12
canBeNull = null

let canAlsoBeNull
canAlsoBeNull = null

let canThisBeAny = null
canThisBeAny = 12
