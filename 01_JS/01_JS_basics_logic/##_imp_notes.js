// 9th Nov 2025
// ------------------   Important Notes   -----------------
// (variable, operators, operation on operator)


// 1. Arithmetic operators and the plus (+) operator

// -  All arithmetic operators (+ , - , % , * , / **) perform arithmetic operations  
// - However, the plus (+) operator has TWO purposes:
//     1️⃣ Addition  → when both operands are numbers
//     2️⃣ Concatenation  → when at least one operand is a string

// - JavaScript evaluates expressions from **left to right** (left-to-right associativity).

// Examples:
console.log(2 + 2 + "2");   // "42"  → (2+2=4) then 4 + "2" → "42"
console.log("2" + 2 + 2);   // "222" → ("2"+2="22") then "22"+2 → "222"
console.log(2 + "2" + 2);   // "222" → (2+"2"="22") then "22"+2 → "222"
console.log(2 + 2 + 2);     // 6     → all numbers, so addition only


// 2. Input from prompt() is always a string

// - Any value taken using prompt() is of **string** type by default.
// - Even if you type a number, it's stored as a string.


// 3. Hoisting and TDZ

// - Because of hoisting, variables declared with var are moved (“hoisted”) to the top of their scope — but not their values!
// -🧩 let and const are also hoisted, but they live in the temporal dead zone — you can’t access them before they’re declared.




// Theory :- operator , operand and operation

// In JavaScript, as in many programming languages, these terms define how computations are performed:
// Operator: An operator is a special symbol or keyword that performs an operation on one or more values (operands) and produces a result. Operators define the type of computation to be performed.

//     let sum = 10 + 5; // '+' is the addition operator
//     let isEqual = (a === b); // '===' is the strict equality operator
// Operand: An operand is the value or expression on which an operator performs its action. Operands are the "inputs" to an operation.

//     let x = 7;
//     let y = 3;
//     let result = x * y; // 'x' and 'y' are the operands for the multiplication operator '*'
// Operation: An operation refers to the entire process of applying an operator to its operands to produce a result. It's the complete action being performed.

//     let total = price + tax; // The entire expression 'price + tax' represents an addition operation.
// In summary:
// Operator: is the action or symbol that dictates what to do.
// Operand: is the data or value on which the action is performed.
// Operation: is the entire event of applying an operator to its operands to achieve a result.