// Difference between toString() and String()   

//--------------------------------
// toString()

// toString() only works on actual objects/values that have the method.
// ✔ Works with:
// number.toString(), array.toString(), true.toString()
// ❌ Dies on:
// null.toString(), undefined.toString()


// console.log(234.toString());                   // typeError
console.log(null.toString());                     //TypeError: Cannot read properties of null (reading 'toString') 
console.log(undefined.toString());                // TypeError

let a = 234
console.log((234).toString());                      // 234
console.log(typeof a.toString());                   // string
console.log(true.toString());                       // "true"
console.log(typeof true.toString());                // string
console.log( [1,2,3].toString());                   // "1 2 3"
console.log(typeof [1,2,3].toString());             // string



//---------------------------------
// String()
// Works with EVERYTHING:

// String(5)   → "5"
// String(null) → "null"
// String(undefined) → "undefined"
// String([1,2,3]) → "1,2,3"


console.log(String(null));                            //  "null"
console.log(typeof String(null));                     // string 
 
console.log(String(undefined));                       //  "undefined"
console.log(typeof String(undefined));                //   string

let b = 234
console.log(String(b));                          // 234
console.log(typeof String(b));                   // string
console.log(String(true));                       // "true"
console.log(typeof String(true));                // string
console.log(String([1,2,3]));                    // "1 2 3"
console.log(typeof String([1,2,3]));             // string
