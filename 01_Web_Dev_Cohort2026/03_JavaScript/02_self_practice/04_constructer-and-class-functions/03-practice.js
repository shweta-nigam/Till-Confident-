// Question 1 (Easy — basics of this + constructor)

// 👉 Using constructor function

// Task:
// Create Car constructor
// Properties: brand, price
// Method: getDetails() → "Toyota costs 10L"
// Twist:

// 👉 Inside method, print:
// this.constructor.name

// Goal:
// Understand:
// this
// this.constructor



// function constructor
function Car(brand,price){
    this.brand = brand
    this.price = price
}

Car.prototype.getDetails = function (){
    console.log(this);
    
// console.log(`${this.brand} costs ${this.price}`);  //Toyota costs 10L
}

const user1 = new Car("Toyota", "10L")
user1.getDetails() // 'this' -> Car { brand: 'Toyota', price: '10L' }
console.log(user1.brand )        // Toyota
console.log(user1.price )        // 10l