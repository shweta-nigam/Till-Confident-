// array and methods :-------------------------------
// push pop shift unshift splice slice reverse sort
// high order function method :- map , filter, reduce, find, some, every 
// Destructuring , spread operator

// sort 
let arr = [2,3,4,56,32]

arr.sort()
console.log(arr);   // [ 2, 3, 32, 4, 56 ]
// note: 👉 JavaScript sorts as strings, NOT as numbers.

arr.sort((a,b) => a - b)
console.log(arr);  // [ 2, 3, 4, 32, 56 ]
// note: here a compare function is give therefore js compares it in numeric sense
// if result < 0 , a comes first
// if result > 0 , b comes first
// if result = 0 no order is changed


console.log(["banana", "apple", "mango"].sort());
// apple , banana, mango

console.log(["🥚","🐓" ].sort());
// 
