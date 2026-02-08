// typeof and it's quirks in js

console.log(typeof null);            // object
console.log(typeof function(){});    //function  
console.log(typeof NaN);             //number
console.log(typeof []);              //object
console.log(typeof {});              //object


//-------------------------------------------
// instanceof

a = []
console.log(a instanceof Array);     // true
console.log([] instanceof Array);     // true

// notes:
//  instanceof only works with reference data type and not with primitive data type
console.log(12 instanceof Number);         // false



