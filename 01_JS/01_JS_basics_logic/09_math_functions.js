// Math Functions
/*
math.round()
Math.ceil()
Math.trunc()  // remove the decimal part 
Math.pow
Math.sort
Math.sqrt()
Math.cbrt()
Math.abs()
Math.max()
Math.min()
Math.random()
toFixed()
*/

// 
console.log(Math.round(10.6));  //11
console.log(Math.round(10.3));   // 10

console.log(Math.ceil(10.6));  //11
console.log(Math.ceil(10.1));   // 11

console.log(Math.floor(10.6));  //10
console.log(Math.floor(10.1));   // 10

// trunc :- Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.
// simply removes the decimal part without changing the numbers.
console.log(Math.trunc(10.689));  //10
console.log(Math.trunc(10.19));   // 10

console.log(Math.pow(2,5))    // 2^5  // 32


//square root
console.log(Math.sqrt(64))  //8 
console.log(Math.sqrt(94))  //9.695

// cube root
console.log(Math.cbrt(8));  //2
console.log(Math.cbrt(512));  // 8

// absolute :- make negative value to positive, positive remains positive
console.log(Math.abs(-5));  //5
console.log(Math.abs(5));   //5

// 
console.log(Math.max(23,45,6,677));   // 677
console.log(Math.min(23,45,6,677));   // 6
let a = [3,4,5,6,7,89]
console.log(Math.max(a));  //NaN
console.log(Math.min(a));  //NaN


// Math.random() :- give a random value between 0 - 1
console.log(Math.random());   // 
console.log(Math.random());   // 
console.log(Math.floor(Math.random()*9000)+1000);   // 


console.log(67.8997868.toFixed(2));   // 67.89
console.log( typeof 67.8997868.toFixed(2));   // string








