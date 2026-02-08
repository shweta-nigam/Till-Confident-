// Math functions 

// toFixed()
// returns string and not a number 
console.log((1.23454).toFixed(3));    // 1.234
console.log(typeof (1.23454).toFixed(3));    // string

//  why toFixed() returns string and not number data type  ----------------------- 

// ✔ toFixed() is a formatting function, not a mathematical function.
// Math creates numbers.
// Formatting creates text.
// Formatted things → are meant for humans, not the computer’s math engine.
// So JS returns a string.
// story in 19's
//  Developers needed a way to display money safely
// Example: $12.30 should appear as "12.30", not "12.3"
// So JavaScript created .toFixed() as a display method, not a math method.


// Medium Priority (Sometimes Asked in interviews)
//  Math.sqrt() / Math.cbrt()
// Used in numeric problems.


//Math.trunc()
// Removes decimals (does not round).
// Math.trunc(-1.8); // -1   (important difference from floor)

//--------------------------------------
//Math.pow()
// They sometimes ask:
// “Why prefer ** operator over Math.pow?”\

console.log(2**3 === Math.pow(2,3));
//It was added to JavaScript specifically to replace Math.pow()
// ES2016 introduced ** to solve:
// Verbosity
// Poor readability
// Awkward nesting
// Math.pow() is now older/legacy style.

// also works with chaining
2**3**2 
Math.pow((2,3),2)        
// Prefer ** because it's cleaner, easier to read, more modern, and built for exponent operations.
// Math.pow() still works, but there's no advantage to using it anymore.

//------------------------
// Not Math but Often Asked
// Number() coercion & unary +

// Interviewers love these:

+"5.3"; // 5.3
Number("5.3"); // 5.3
parseInt("5.3"); // 5