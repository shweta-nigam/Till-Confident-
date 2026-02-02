// q1  what does this function return ?

function f() {
  return;
}

console.log(f()); // undefined

// q2 what does it mean when we sat "functions are first-class citizens" ?
// ans
// using function same way as a value is used
// ex: passing the function in another function like saving function in another variable etc.

//q3 Pass a function into another function and execute it inside.

function abc(val) {
  val();
}

abc(function () {
  console.log("Heeee");
});

// q4 What is a higher-order function ?

// ans
// A function returning another function or when a function accept another function as parameter.

//ex: a

function a() {
  return function () {
    console.log("hello");
  };
}
a()();

// ex: b
function b(f) {
  f();
}

b(function () {
  console.log("passing function as args");
});

//-----------------------------
//q5 Convert the below function into a pure function;

// impure function
let total = 0;
function addTotal(num) {
  total += num;
}
addTotal(5);

// pure function (not affecting the outer variables)
let total2 = 0;
function addTotal2(num) {
  let newTotal = total2;
  newTotal += num;
  return newTotal;
}
console.log(addTotal2(5));
console.log(total2);

// ----------------------
// q6 what is a closure and when is it created?
// A closure is created when the inner function uses variable declared in outer function and the variable is
// kept alive even after the outer function is executed.
// another def:
// When a function returns another function and the inner function uses the variable declared in outer function
// then the variable is kept alive by js even after the outer function is executed that's when closure is created.

// gpt style  definition :

// A closure is created when an inner function remembers and accesses variables from its outer function, even after the outer function has finished executing.
// or  -- A closure happens when a function returns another function, and the inner function continues to use the outer function’s variables.
// JavaScript keeps those variables alive so the inner function can still access them later.

function xy() {
  let count = 0;
  return function () {
    return count++;
  };
}
console.log(xy()()); // 0
// count starts at 0
// count++ returns old value (0)
// It increments internally to 1, but you never call again

// correct way to see the closure
let counter = xy();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

//-------------------------------------------------------
//q7 What is the use of IIFE ? Name one real-world use case.
(function p() {
  console.log("Hi");
})();

// - to create and use private variables
// -

let fun = (function () {
  // using iife and creating private variables and then setting and getting it.
  let score = 0;
  return {
    getScore: function () {
      console.log(score);
    },
    setScore: function (val) {
      score = val;
      return val
    },
  };
})()

console.log(fun);   // { getScore: [Function: getScore], setScore: [Function: setScore] }
console.log(fun.getScore());   // 0     // undefined because of another log
fun.getScore()                 // 0
console.log(fun.setScore(5));        // 5

//----------------------------
// what is js library concept ?


//-------------------------------------------------------
//q9 What will be the output here and why?

greet()                         // TypeError: greet is not a function

var greet = function (){
    console.log("Hii");
}

// this function expression
// why error when var does get hoisted ? why not undefined ?
// let and const will throw error and that is understandable but why var as well ?

// explanation:
// var hoists the variable, not the function value
// as value of greet is undefined when hoisted with var ,
//  js interpret it as undefined()  :- ❌ TypeError: undefined is not a function
// Because you're trying to call something that is not callable.
// So why not show just undefined?
// Because you are calling the variable:


// why different error with let ?

greet2()                        // ReferenceError: Cannot access 'greet2' before initialization

let greet2 = function (){
    console.log("Hii");
}