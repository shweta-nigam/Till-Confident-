// what is closures in functions
// when the variable declared in outer function is kept alive even after the closure of function 
// then it is known as closures  

// More refined def: When the inner function remembers the variable declared in it's outer function after the execution/closure of outer function.

function abc() {
  let count = 1;
  return function () {
    return count++;
  };
}
console.log(abc());    // [Function (anonymous)]
console.log(abc()());  // 1
// each time abc() is called, a new closure is formed
// ex:
let x = abc()
console.log(x());    // 1
console.log(x());    // 2
console.log(x());    // 3

let y = abc()
console.log(y());    // 1
// x and y do NOT share the same count.

