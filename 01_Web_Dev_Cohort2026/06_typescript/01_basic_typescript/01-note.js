// 8th march 2026

// ----------------------         TypeScript           ---------------------------------

/*
TypeScript is a javaScript with syntax for types.
- TypeScript is a strongly typed programming language whereas javascript is loosely typed.
 - It is just a tool to write better javascript
 - which then compile form ts - js
 - note: you won't be keeping js files with you as you can generate them on the go from ts files.
 - JS design - loosely types
 - ts is made by microsoft
 - enhance dx (developer experience)
*/

// understanding the need of ts


//1.
function printUser(userObj){
    console.log(userObj.fname[0]);   // you will get error, as you did not send fname and still trying to access 0 position(here js does not give any warning (ts will))
    console.log(userObj.lname);
}

printUser({})  // error expected


printUser({   // correct way to send obj
fname:"firstName",
lname:"lastName"
})   
             
printUser({ // not same keyword, so error is expected
key:"firstName",
key2:"lastName"
}) 

// note: Here you won't know what to send in printUser function and the keys defined in it (in Js)
// and if correct info is not given then code will crash, and many runtime error.




// ---------------------------------   Illegal shadowing 
// A bit about variables in js 

let a = 7;       // Variable a declared in the global scope with let
{
    var a = 30;     // ILLEGAL: var attempts to re-declare 'a' in the same global scope
}

console.log(a); // SyntaxError: Identifier 'a' has already been declared

// this happens because variables declared with var are  in global scope. 
// And variables declared with 'let' can not be re-declared, causing syntax error.  
// This is called Illegal shadowing 

// Illegal shadowing in JavaScript occurs when a var declaration attempts to shadow a let or const variable within the same scope, which results in a SyntaxError