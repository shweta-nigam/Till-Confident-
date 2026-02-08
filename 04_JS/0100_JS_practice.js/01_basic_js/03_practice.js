//Question 1

// Explain the differences between var, let, and const. Include:
// scoping rules (function/global/block),
// hoisting behavior,
// re-assignment and re-declaration rules,
// a short example showing one important gotcha for each.

// my ans ---
// var , let and const are the variables of js to store data.
// var :-
// var is functional scoped , global scope and it does not respect the block scope.
// var can be used before without initializing and declaring it, without any error though the value be undefined.
// It can be redeclared and re-assigned.
// It is hoisted on top of codes

// ex;-
console.log(a);   // undefined
var a = 10 

{
    var greet = "hello"
}
console.log(greet);     // hello

function Hello(){
    var b = "GM" 
    if(true){
        console.log(b);      
    }
}

Hello();               // GM   - closure concept

function Hello2(){
    if(true){
        var b = "GM" 
    }
    console.log(b);      
}

Hello2();               // GM

// let 
// let is global scoped and blocked scoped as well as function scope.
// let can not be re-declared though it can be re-assigned.
// let can be used without assignment.
// let is also hoisted though , it throws reference error as it stays in temporal dead zone.

console.log(p);            // reference error: can not access before initialization 
let p = 10

let q = 3
// let q = 5            // not allowed
q = 5 
console.log(q);           // 5 


// const 
// const is global scoped , function scope and blocked scope.
// const can not be used without assignment
// It can not be re-declared and re-assigned 
// const also gets hoisted but stays in the TDZ.

// const n;           // 'const' declarations must be initialized.
const m = 90
console.log(m);   // 90

// gpt ans---- One-line memory tip
// var = function/global, hoisted to undefined, block-blind.
// let = block-scoped, TDZ until init, reassign OK.
// const = block-scoped, TDZ until init, must initialize, binding immutable (not deep freeze).


//------------------------------------
// Question 2

// What is the Temporal Dead Zone (TDZ) in JavaScript?
// Explain what causes it, what happens if you access a variable in the TDZ, and give a short code example that demonstrates TDZ for let or const. Then explain how to avoid TDZ mistakes.

// my ans -----
// Temporal dead zone refers to that period where variables declared with let and const remain inaccessible and throw reference error when used, it happens when let and const variables are used before they are declared and initialized. 
 

// gpt ans ---
// ❗ Missing details (important in interviews):
// TDZ exists even though the variable is hoisted.
// (This is the reason interviewers ask about it.)
// TDZ lasts from the start of the scope until the declaration line runs.
// Using the word “initialized” is slightly tricky:
// For let, TDZ ends at the declaration.
// For const, TDZ ends at the declaration + initialization.

// let and const are hoisted, but JavaScript keeps them “uninitialized” until their declaration line executes.

// ex:-
Example
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 10;     // TDZ ends here
console.log(a); // 10

// Another one with a block:
{
  console.log(x); // ❌ ReferenceError (TDZ starts at block start)
  const x = 5;    // TDZ ends here
}
// How to avoid TDZ issues?
// Always declare variables at the top of your scope.
// Don't use let and const before their declaration line.
// Avoid writing logic above the variable declaration unless it's intentional.


//---------------------------------------
// Question 3:
// What is the difference between declaration, initialization, and assignment for JavaScript variables?
// Give examples for var, let, and const, and explain which of them allow which steps separately.

// my ans -----
//  declaration is the process of declaring the variable like let a and introducing it in program.; 
// initialization is the process to initialize the variable.
// assignment is the process to assign value to a variable  like let a = 10 

// var allows all
// let can not be re-declared, can be reassigned and used without initializing it.
// const is strictest out of all , it can not be re-declared , reassigned and can not used without initialization.



// gpt ans ----
// Declaration = variable exists
// Initialization = variable gets its first value
// Assignment = giving/changing values after initialization

//🔹 Declaration

// Creating a variable in memory — telling JavaScript “this name exists”.

let a;       // declaration
var b;       // declaration
const c = 5; // declaration + initialization (must assign)

// 🔹 Initialization

// Giving the variable its first value.
// For var: happens automatically during hoisting → initialized to undefined.
// For let: happens at the declaration line.
// For const: declaration and initialization must happen together.

// Example:

var x;  // declared, initialized to undefined automatically
x = 10; // assignment (first manual value)

let y;  // declared (not initialized yet → TDZ before this)
y = 20; // initialization + assignment

const z = 30; // declaration + initialization MUST occur together

// 🔹 Assignment

// Giving or changing the value (can happen multiple times for var and let).

let a = 5;   // initialization + assignment
a = 10;      // reassignment (assignment)