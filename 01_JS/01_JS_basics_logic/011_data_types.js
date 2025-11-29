// Two data types in js:
// Primitive Data type : - ex: number , null, string , symbol, undefined, bigint, boolean.
// reference data type : - ex: array , object, function

//notes:-
// null :- A value we purposely  assign to a variable
let nameOfWinner = null; // not decided yet;

// undefined :- A value js engine assign by default
let a; // a = undefined

//--------------------------------------------------
// dynamic typing in js
//  dynamic typing refers to the change of the type of data on the go.
// Dynamic typing means a variable’s data type is determined at runtime and can change any time based on the value assigned to it.

// JavaScript does not lock a variable to a single type — the same variable can hold a boolean, number, string, object, etc.
// ex:
let b = true;
b = 23;
b = null;
b = 9392n;

// note: static data typing is better than dynamic therefore we use typeScript

//------------------------------------------------
// some weird things in js
console.log([] + []);    // '' (in windows)  , nothing in node



