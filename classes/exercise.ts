// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);

class Car {
  name: string
  acceleration: number = 0

  constructor(name: string) {
    this.name = name
  }

  honk() {
    console.log('Toooooooooot!')
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed
  }
}

const car2 = new Car('BMW')
car2.honk()
console.log(car2.acceleration)
car2.accelerate(10)
console.log(car2.acceleration)

// ------------------------------------------------- //

// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());

abstract class BaseObject {
  width: number = 0
  height: number = 0
}

class Rectangle extends BaseObject {
  calcSize(): number {
    return this.width * this.height
  }
}

const rectangle = new Rectangle()
rectangle.width = 5
rectangle.height = 10
const size = rectangle.calcSize()
console.log(`Size is ${size}`)

// ------------------------------------------------- //

// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function () {
//       return this._firstName;
//   },
//   set: function (value) {
//       if (value.length > 3) {
//           this._firstName = value;
//       }
//       else {
//           this._firstName = "";
//       }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class Person2 {
  private _firstName: string = ''

  get firstName() {
    return this._firstName
  }

  set firstName(name: string) {
    if (name.length > 3) {
      this._firstName = name
    } else {
      this._firstName = ''
    }
  }
}

const person2 = new Person2()
console.log(person2.firstName)
person2.firstName = 'Ma'
console.log(person2.firstName)
person2.firstName = 'Marcel'
console.log(person2.firstName)
