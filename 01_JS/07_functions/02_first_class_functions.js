// First class functions - is a concept
// functions can be :-
// -- can be passed and treated as values
// -- can be saved in variables
// -- passed in function

// notes:- functions can be treated as a value is treated in js.
//ex:
function abc(val){
    console.log(val);
}

abc(12)     // 12 - a value   --- 12
abc(function(){})       //  function - treated same as any other value.            --- [Function (anonymous)]
abc(function one(){})       //  function - treated same as any other value.        --- [Function: one]


// ex 2:
function abcd(val){ val()}
abcd(function(){console.log("Hii")})           // Hii
