

// Addition and concatenate with sum arithmetic operator

console.log(3 + 2 +" is the sum of 3 and 2")          // 5 is the sum of 3 and 2
console.log("sum of 10 and 20 here is " + 10 + 20)     // concatenate of 10 and 20 here is 1020
console.log("sum of 10 and 20 here is " + (10 + 20))     // sum of 10 and 20 here is 30

//---------------------------------------------------------------
// NaN  - Not-a-Number

let a = 1 + "a"
console.log(a);   // 1a
console.log(typeof a);  // ❌Number   // ✅ string

console.log(Number(a));   // NaN
console.log(typeof a);    // why is a variable still a string and not number ?
//Because Number() only accepts strings that are 100% valid numeric formats:

console.log(NaN === NaN);   // false

//----------------------------------------------------------------
// type conversion :- umbrella term for both type coercion and type casting


// type coercion 
// when js has to perform arithmetic operation with string and integers then it coverts string to number.

console.log("1" - 1);    // 0
console.log("1" * 1);    // 1
console.log("1" / 1);    // 1
console.log("1" % 1);    // 0

// type casting
//  when you explicitly covert data type to another

console.log(typeof Number("55"));   // number

