// 24th march 2026

// constructor functions are used to make the instances of the object
// ex car blueprint - car 1, car 2 , car 3
// here the car blueprint is the constructor function and car 1,2,3 are the instances made form it.

function CarBluePrint(model, color, speed) {
  this.model = model;
  this.colorful = color;
  this.speed = speed;

  // color - parameter (input)
  // colorful - property name (my choice)
  // basically ----->  this.<propertyName> = <value>

  this.IntroCar = function () {
    console.log(
      `This is ${this.model} of ${this.colorful} color and has speed of ${this.speed} km/h`,
    );
  };
}

const car1 = new CarBluePrint("Jaguar", "red", 45);
car1.IntroCar();

// ------------------------------------------------
// Encapsulation

function User(name, age, address, income = 0) {
  this.n = name;
  this.a = age;
  this.addr = address;

  let _inc = income; // private variable

  this.hello = function () {
    console.log(`${this.n} says hello and has ${_inc} income`);
  };

  this.updateIncome = function (incomeAmount) {
    if (_inc > 10000) {
      _inc = incomeAmount;
    }
  };
}

const user1 = new User("amy");
user1.hello();   // amy says hello and has undefined income
const user12 = new User("Amy",50000);
user12.hello();   // amy says hello and has undefined income



const user2 = new User("Usa", 3000);
user2.updateIncome();
const user3 = new User("Jammy", 30000);
user3.updateIncome();
