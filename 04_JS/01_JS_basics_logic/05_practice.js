// module ---------------------
console.log(7 % 2); // 1    // here 1 is remainder. 7 is dividend and 2 is deviser 

console.log(2 % 7); // 2     because it is impossible to divide 7 by 2 without help of zeros therefore whole 2 is the reminder here and answer of the module. 
// Note: Whenever in module the dividend is smaller than deviser, then dividend is the answer as it is the remainder.
// just extra knowledge :-  Dividend = Divisor × Quotient + Remainder. 


// divide and Math.floor
console.log(Math.floor(4/5))   // 0


// ------------------------------
// To get the last digit(s)
let a = 4567
console.log(a % 10)     // to get the last digit (each time)
console.log(a % 100)     // to get the last 2 digits 

//---------------------------------
// to get the all numbers except last one
console.log(4567/10);      // 456.7
console.log(Math.floor(4567/10));   // 456
console.log(Math.floor(4567/100));   // 45

