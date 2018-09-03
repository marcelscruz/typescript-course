// Exercise 1 - Maybe use an Arrow Function?
const double = (value: number): number => {
  return value * 2
}
console.log(double(10))

// Exercise 2 - If only we could provide some default values...
const greet = function(name = 'Marcel'): void {
  // if (name === undefined) {
  //   name = 'Max'
  // }
  console.log('Hello, ' + name)
}

greet()
greet('Anna')

// Exercise 3 - Isn't there a shorter way to get all these Values?
const numbers: number[] = [-3, 33, 38, 5]
console.log(Math.min.apply(Math, numbers))
console.log(Math.min(...numbers))

// Exercise 4 - I have to think about Exercise 3 ...
const newArray = [55, 20]
// Array.prototype.push.apply(newArray, numbers)
newArray.push(...numbers)
console.log(newArray)

// Exercise 5 - That's a well-constructed array.
const testResults: number[] = [3.89, 2.99, 1.38]
// const result1 = testResults[0]
// const result2 = testResults[1]
// const result3 = testResults[2]
const [result1, result2, result3] = testResults
console.log(result1, result2, result3)

// Exercise 6 - And a well-constructed object!
const scientist: { firstName: string; experience: number } = {
  firstName: 'Will',
  experience: 12,
}
// const firstName = scientist.firstName
// const experience = scientist.experience
const { firstName, experience } = scientist
console.log(firstName, experience)
