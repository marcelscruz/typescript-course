let myName2: string = 'Marcel'
let myAge2: number = 27

myAge2 = 2

let test
test = 'marcel'
console.log(test)
test = 2
console.log(test)

function controlMe(isTrue: boolean, somethingElse: boolean) {
  let result: number
  if (isTrue) {
    result = 12
  }
  result = 33
  return result // Because strictNullChecks: true, result might not receive value
}
