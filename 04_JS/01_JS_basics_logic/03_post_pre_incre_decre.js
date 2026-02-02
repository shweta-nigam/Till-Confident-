
// ++a (pre-increment) increases first, then returns new value.
// a++ (post-increment) returns old value first, then increases.

let a = 5
a++
console.log(a);  // 6
++a
console.log(a);  // 7
++a
console.log(a)   //  8 

console.log(a++) //  8 (then add 1)
console.log(++a) // 10


//example 2

let c = 10
console.log(c++);    // 10   (then add 1 = 11)
console.log(c++);    // 11    (then add 1 =  12)
console.log(c++);    // 12    (then add 1 =  13)
console.log(++c);    // 14 
console.log(c++);    // 14  (then add 1 = 15)
console.log(++c);    // 16  
console.log(c++);    // 16   (then add 1 = 17) 

console.log(c)    // 17

// --a (pre-decrement) decrease first, then returns new value.
// a-- (post-decrement) returns old value first, then decreases.

let b = 10
console.log(b--);     // 10 ( then sub 1 = 9)
console.log(b--);     // 9 (then sub 1 = 8)
console.log(--b);     // 7
console.log(b--);      // 7 (then sub 1 = 6)
console.log(--b);     // 5
console.log(b--);     // 5 then sub 1 = 4
console.log(--b);     // 3 

console.log(b);       // 3    ( 10 - 7 ( 7 logs))
