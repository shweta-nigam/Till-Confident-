34 > 54 ? console.log("hey") : console.log("hello");

// nested ternary
console.log(45 > 8 ? "yes" : 67 < 7 ? "coffee" : "water");

// closure in js----------------------
//A closure is when a function remembers the variables from its outer function — even after the outer function has finished running.

function outer() {
  let count = 0; // variable created inside outer

  function inner() {
    console.log(count); // inner can access count
  }

  return inner;
}

const fn = outer();
fn(); // Output: 0

// Why did it work?
// outer() finished executing
// Normally, its variable count should disappear
// BUT because inner() needs count, JavaScript kept that variable alive
// fn remembers the variable → That’s a closure
