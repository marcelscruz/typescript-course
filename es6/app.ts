// let & const
console.log('LET & CONST')
let variable = 'test'
console.log(variable)
variable = 'another value'
console.log(variable)

const maxLevel = 100
console.log(maxLevel)
// maxLevel = 99

// Block Scope
function reset() {
  let variable = null
  console.log(variable)
}

reset()
console.log(variable)

// ------------------------ //

// Arrow functions
console.log('ARROW FUNCTIONS')

const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2
}

console.log(addNumbers(2, 3))

const multiplyNumbers = (number1: number, number2: number): number => {
  return number1 * number2
}
console.log(multiplyNumbers(3, 10))

const greet2 = (): void => {
  console.log('Hello world!')
}
greet2()

// ------------------------ //

// Default parameters
console.log('DEFAULT PARAMETERS')
const countDown = (start: number = 10): void => {
  while (start > 0) {
    start--
  }
  console.log('Done', start)
}
countDown()

// ------------------------ //

// Rest & Spread
console.log('REST & SPREAD')
const numbers2 = [1, 10, 99, -5]
console.log(Math.max(1, 10, 99, -5))
// console.log(Math.max(numbers))
console.log(Math.max(...numbers2))

function makeArray(name: string, ...args: number[]) {
  return args
}
console.log(makeArray('marcel', 1, 2, 6)) // [1, 2, 6]

// ------------------------ //

// Destructuring
console.log('DESTRUCTURING ')
const myHobbies = ['Cooking', 'Sports']
console.log(myHobbies[0], myHobbies[1])
const [hobby1, hobby2] = myHobbies
console.log(hobby1, hobby2)

const userData1 = {
  username: 'Marcel',
  age: 27,
}
const { username, age: myAge3 } = userData1
console.log(username, myAge3)

// ------------------------ //

// Template literals
const userName = 'Marcel'
const greeting = `This is the heading!
Hello, I'm ${userName}.
`
console.log(greeting)
