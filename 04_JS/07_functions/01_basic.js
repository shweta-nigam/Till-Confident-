
// function declaration or function statements - (making the simple function)

function greet(){

}

//-------------------------
// function expressions
// - when variable is used to make the function
// - name of the variable is the name of the function when function is not named

let fnc = function(){

}

let fnc2 = function cal(){

}

// Named vs Anonymous Function Expression
// 1️⃣ let fnc = function() { }
// Anonymous function expression
// Function has no name
// Its "name" becomes the variable name: "fnc"
// 2️⃣ let fnc2 = function cal() { }
// Named function expression
// The function has its own name: "cal"
// Assigned to variable fnc2
// So:
// The function’s internal name is cal
// The variable holding it is fnc2
// They are not the same name.

// Error messages & debugging
// Named function expressions make debugging easier.

// In named function name of the function is local to the function
let fnc3 = function cal3() {
  console.log("Inside:", cal3); // works
}

console.log(cal3);  // ❌ Error: cal is not defined


// --------------------------------------------------------
// fat arrow function or arrow function 

let game = () => {

}
game()

//----------------------------
function sum(v1,v2){
    console.log(v1 + v2);       // undefined + undefined = not possible = NaN
}

sum()    // NaN

//------------------------------
// default params
function sum2(v1 = 1,v2 = 2){
    console.log(v1 + v2);       // 3
}

sum2()