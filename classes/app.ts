// Class
class Person {
  name: string
  private type: string
  protected age: number = 27

  constructor(name: string, public username: string) {
    this.name = name
  }

  printAge() {
    console.log(this.age)
  }

  setType(type: string) {
    this.type = type
    console.log(this.type)
  }
}

const person = new Person('marcel', 'm')
console.log(person)
person.printAge()
person.setType('Cool guy')

// ---------------------- //

// Inheritance
class Marcel extends Person {
  constructor(username: string) {
    super('Marcel', username)
    this.age = 31
  }
}
const marcel = new Marcel('max')
console.log(marcel)

// ---------------------- //

// Getters and Setters
class Plant {
  private _species: string = 'Default'

  get species() {
    return this._species
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value
    } else {
      this._species = 'Default'
    }
  }
}

let plant = new Plant()
console.log(plant.species)
plant.species = 'AB3'
console.log(plant.species)
plant.species = 'ABCD'
console.log(plant.species)

// ---------------------- //

// Static properties and methods
class Helpers {
  static PI: number = 3.14

  static calcCircumference(diameter: number): number {
    return this.PI * diameter
  }
}

console.log(2 * Helpers.PI)
console.log(Helpers.calcCircumference(8))

// ---------------------- //

// Abstract classes - can't be instatiated, has to be extended - serve as basic setup
abstract class Project {
  projectName: string = 'Default!!'
  budget: number = 1000

  abstract changeName(name: string): void

  calcBudget() {
    return this.budget * 2
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name
  }
}

let newProject = new ITProject()
console.log(newProject)
newProject.changeName('Super IT Project')
console.log(newProject)

// ---------------------- //

// Private constructors

class OnlyOne {
  private static instance: OnlyOne
  public readonly name: string

  private constructor(name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One')
    }
    return OnlyOne.instance
  }
}

// let wrong = new OnlyOne('The Only One')
let right = OnlyOne.getInstance()
console.log(right.name)
// right.name = 'Something else' // it's read only
