"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // logs undefined, Window { /* … */ } (or the global object)
obj.c(); // logs 10, Object { /* … */ }


// normal functions have arguments and arrow function don't
// i
function test() {
  console.log(arguments);   // [Arguments] { '0': 1, '1': 2, '2': 3 }
}

test(1,2,3);

// ii
const test = () => {
  console.log(arguments);
}

test(1,2,3);     // a lot of things

// console.log(test);   // function definition

// iii - accessing args with spread operator in arrow function
const test = (...args) => {
  console.log(arguments);          // argument of parent  (here of node environment)
  console.log({args});            // { args: [ 1, 2, 3 ] }  
  console.log(args);            // [ 1, 2, 3 ] 
}

test(1,2,3);