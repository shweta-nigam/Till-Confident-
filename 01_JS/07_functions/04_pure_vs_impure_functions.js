// pure and impure functions

// pure function satisfy two condition
// 1.1️⃣ Deterministic (same input → same output)
// 2. 2️⃣ No side effects
// It does not:
// modify external variables
// modify global state
// change objects/arrays passed by reference
// perform I/O (console.log, alert, DOM update, API calls, DB writes)
// generate random values
// depend on time
// ✔ It only uses data passed to it
// ✔ It does not touch anything outside its scope

// ex1 
function add(a,b){
    console.log(a + b); 
} 

add(2,3)        // always add two digits without modifications

// ex2.
function gree(){
    console.log("Hello");
}


//------------------------------------------------------------
// Impure functions
// A function is impure if it violates any one of the two rules:
// 1️⃣ Same input does NOT guarantee same output
// Examples:
// Math.random()
// date/time functions
// functions depending on global variables
// 2️⃣ Has side effects
// Meaning the function reads or modifies external state, e.g.:
// writing to console
// updating DOM
// modifying object/array arguments
// reading/writing files/DB
// modifying global variables

//ex:
let count = 0
function increment(){
    count++
}
increment()    // 1
increment()    // 2
increment()    // 3

// ex: (Impure — side effect)
function logMessage(msg) {
  console.log(msg); // writes to console = side effect
}
logMessage("Hii")  
logMessage("GM")  