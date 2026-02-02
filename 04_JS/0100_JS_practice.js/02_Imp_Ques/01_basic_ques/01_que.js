// Q1 Why NaN is a number
// Answer:  NaN is treated as a failed number operation.

console.log(typeof NaN === "number"); // true

// Q2 undefined vs null
// Ans: undefined a value js automatically assign by default in absence of the value of the variable.
//      null a value assigned intentionally.




//--------------------------------------------------
console.log(5 && 0 && 8); // 0
console.log(5 && 0 && undefined); // 0
console.log(null || "JS" || 0); // "JS"



// note:
// ✅ 1. && (AND) returns the first falsy value
// If all values are truthy, it returns the last value.
// JavaScript checks values from left → right, and stops as soon as it finds a falsy one

// ✅ 2. || (OR) returns the first truthy value
// If all are falsy, it returns the last value.


console.log(delete {a:10}.a)  // true
console.log(+"7");
console.log(+7);

let x = "5"
console.log(++x);             // number 6 , as ++x coerces "5" to number 5

//-----
let a = 2;
console.log(a++ && ++a);   // 4

//-----

console.log(void 0);
// void always returns undefined. void 0 is the standard way to produce undefined. Output: undefined.


//----
console.log(+"5" + -"2"); //  5 + (-2) = 3