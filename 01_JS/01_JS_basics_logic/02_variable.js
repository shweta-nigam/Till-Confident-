// JS variables 

//var
var a = 9
console.log(a);

var b
console.log(b);  // undefined
b = 10
 
console.log(c);  // undefined
var c 

console.log(d)    // ReferenceError: d is not defined

//---------------------------------------------------------------
// assignment without use of any variable 
 
age = 90
console.log(90)      // 90    ---- age became part of global variable 


//---------------------------------------------------------------
// let 

// b2 declared but not defined 
let b2                       
console.log(b2);  // undefined
b2 = 10

// c2 declared but not accessible because of TDZ (Temporal Dead-Zone) 
console.log(c2);  // referenceError:  c2 is not defined
let c2 

// values can be changed if let is used 
let c3 = 10
c3 = 30
console.log(c3)  // 3

// let can not be redeclared 
let d2 = 2
// let d2 = 5    // SyntaxError: Identifier 'd2' has already been declared
console.log(d2);


//---------------------------------------------------------------
// const


// b3 declared but not defined , aldo it can not be non-initialized
const b3                       // 'const' declarations must be initialized.
console.log(b3);              // SyntaxError: Missing initializer in const declaration
b3 = 10

// can not use c3 because const needs to initialized at the time declaration
console.log(c3);  //SyntaxError: Missing initializer in const declaration
const c3

// values cannot be changed if const is used 
const d3 = 10
d3 = 30          // TypeError: Assignment to constant variable.
console.log(d3)  // 3

// const also can not be redeclared 
const e2 = 2
//const e2 = 5    // SyntaxError: Identifier 'e2' has already been declared
console.log(e2);