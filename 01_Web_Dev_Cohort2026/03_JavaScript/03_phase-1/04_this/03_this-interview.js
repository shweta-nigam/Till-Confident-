// 1. syntax : making methods in object
const iceCream = {
  name: "strawberry",
  price: 50,

  //   function getIceCream(){
  //     console.log(`price:${this.price}, flavour:${this.name}`);
  //   }

  // above is wrong syntax : inside object literals, you cannot declare functions using the function keyword
  // Object properties must be written as:
  // key: value
  // So JavaScript expects something like:
  // getIceCream: function() {}

  getIceCream() {
    console.log(`price:${this.price}, flavour:${this.name}`);
  },
  method: function getPrice() {
    console.log(`price:${this.price}`);
  },
};

//2. 'this' keyword with nested functions in arrow and normal function.
const filmSet = {
  crew: "Spot boys",

  prepareProps() {
    console.log(`Outer this.crew ${this.crew}`);

    function arrangeChairs() {
      console.log(`Nested normal function: this.crew ${this.crew}`);
    }

    arrangeChairs()

    const arrangeLights = () =>
      console.log(`Nested arrow function: this.crew ${this.crew}`);

    arrangeLights
  }
};

filmSet.prepareProps()