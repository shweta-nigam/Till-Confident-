// -----------------------             this keyword 

// imp note:- Always remember, before defining "this" in any context CONFIRM the environment first.
// what do you understand by environment ? is it node env or browser ? or is it strict env or non-strict? 
// These env question defines a perfect answer for "this" keyword


//1
console.log(this)              // {}  empty object (in node environment)  , window object (in browser)


//2
function defineTypeOfThis(){
    // console.log(this)         // reference to global object (in node env)  // window object(in browser)
    return typeof this                    
}
console.log(defineTypeOfThis())           // object


//3
function thisInStrictEnv(){
    "use strict"
    console.log(this)                // undefined (in node as well in browser)  
    console.log(typeof this)          // undefined (because typeof undefined is undefined)
}
thisInStrictEnv()


//4. why console.log(this) return empty object {} in node and ref - global object in function but gives window object for both in browser? 

// The Hidden Wrapper in Node

// When you write this in Node:
// console.log(this)

// Node actually executes your file like this:

(function (exports, require, module, __filename, __dirname) {
    console.log(this);
});

// So your file is wrapped inside a function.

// And inside that wrapper function:
this === module.exports

// That is why:
console.log(this)

// prints:
{}

// Because module.exports starts as an empty object.

// So:
// ✅ In Node (top-level), this = module.exports
// ❌ Not the global object
