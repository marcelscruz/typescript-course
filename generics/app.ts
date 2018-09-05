// Simple generic
function echo(data: any) {
  return data
}

console.log(echo('Marcel'))
console.log(echo('Marcel').length) // 6
console.log(echo(27))
console.log(echo(27).length) // undefined
console.log(echo({ name: 'Marcel', age: 27 }))

// --------------------------------- //

// Better generic
function betterEcho<T>(data: T) {
  return data
}

console.log(betterEcho('Marcel')) // 6
console.log(betterEcho('Marcel').length) // 6
// console.log(betterEcho<number>("27")) // expects number
// console.log(betterEcho(27).length) // undefined
console.log(betterEcho({ name: 'Marcel', age: 27 }))

// --------------------------------- //

// Built-in generics
const testResults2: Array<number> = [1.94, 2.33]
testResults2.push(-2.99)
// testResults2.push('string')
console.log(testResults2)

// --------------------------------- //

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element))
}

printAll<string>(['banana', 'apple']) // being more explicit
printAll(['pear', 'orange'])

// --------------------------------- //

// Generic types
const echo2: <T>(data: T) => T = betterEcho
console.log(echo2<string>('Something'))

// --------------------------------- //

// Generic class
class SimpleMath<T extends number | string, U extends number | string> {
  // constraint
  baseValue: T
  multiplyValue: U
  calculate(): number {
    return +this.baseValue * +this.multiplyValue // + casts to a number
  }
}

const simpleMath = new SimpleMath<string, number>()
simpleMath.baseValue = '10'
simpleMath.multiplyValue = 20
console.log(simpleMath.calculate())
