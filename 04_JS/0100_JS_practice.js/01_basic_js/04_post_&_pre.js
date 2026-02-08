// let  a = 2
// // console.log(a++ + a++);  // 4  , 5
// console.log(a++ + ++a);  // 6

//--------------------------------------
// some new problem on pre post increment :-

// q1
let p = 1;
p += p++ + ++p;
console.log(p); // 7
// first R.H.S will be calculated => 1 + 3 = 4 then here p = 3
// p = p + 4 => 3 + 4 => 7

//q2
let a = 5;
let b = a++ + a++ + a++;
console.log(a, b);  // (8,18)
// 5 + 6 + 7 => 18 

// Note:-
// - JavaScript evaluates expressions from LEFT to RIGHT.
// - Pre-increment (++x) increments first, then returns the new value.
// - Post-increment (x++) returns the old value, then increments.
// - The variable changes immediately when its operand is evaluated.
