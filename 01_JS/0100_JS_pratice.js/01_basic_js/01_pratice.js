// 1. Sum of 2 integers
console.log(2+2); // 4
console.log(2+2+"2"); // 42
console.log(2+"2"+2); // 222
console.log(2+"2"+2); // 222

//  > Relation b/w integers and string
// While interacting with integer and string js compiler often coerce the data types.
// There are broadly 2 types of type conversion.
// 1. Type coercion (implicit conversion) :  When js automatically converts data type.
// ex:
console.log(2+"2");   // 2 converts to string "2" and outcome is "22"
// 2. Type casting (explicit conversion) : When developer intentionally converts data type using built-in methods and functions.
//ex:
//a.  using parseInt
console.log(typeof parseInt("90"));   // number
//b. using Number
console.log(typeof Number("90"));     // number
console.log(typeof String("90"));     // string

console.log(Number("9a"))             //   NaN
console.log(typeof Number("9a"));     // number
//c. 
console.log(typeof (+ "90"));         // number

console.log(+ "sb");                  // NaN

 
// 2. Sum and message 
// 3. Accept and point the answer 
// 4. Swap 2 variable 
// 5. calculate area and perimeter of rectangle 
// 6. area of triangle by heron's formula
// 7. Circumference of circle  

