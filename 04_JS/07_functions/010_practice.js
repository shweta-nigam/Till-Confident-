//Q1 arrow vs regular function : this context

// Ans
const obj = {
  value: 42,
  regular: function () {
    return this.value;
  },
  arrow: () => this.value,
};

console.log(obj.regular()); // 42
console.log(obj.arrow()); // undefined

// arrow function loses this context whereas this context remains with regular functions.

// Q2 when does function hoists and what impact TDZ have on them ?

//ans.
// - Function statements/definition do get hoisted
greet(); // Hi
function greet() {
  console.log("Hi");
}

// - function expressions do not get hoisted but their variable binding that holds the expression do get hoisted.
// only let/const bindings are in the TDZ. var bindings are hoisted to undefined (no TDZ).
abc()                    // ReferenceError: Cannot access 'abc' before initialization
let abc = function(){
    console.log("Hello"); 
}

abc2()                    // ReferenceError: Cannot access 'abc2' before initialization
const abc2 = function(){
    console.log("Hr"); 
}
 
abc3()                    // TypeError: abc3 is not a function  // calling abc3() = calling undefined()
var abc3 = function(){
    console.log("Hr"); 
}