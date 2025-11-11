// 11th nov 25
// -------------- Swap 2 variables via 3 methods  ----------------------------

// 1 method , using 3rd variable

let a =10 
let b = 20

let c = a     // c = 10, a = 10
a = b         // a = 20 , b = 20 
b = c         // b = 10

console.log(a);     // 20
console.log(b);     // 10


// 2 method: swap variable value without use of 3rd variable

let p = 5 ; let q = 15;

p = p + q   // p = 20                        , q = 15
q = p - q   // q = 5 
p = p - q    // p = 15   (before q = 15 then q = 5)
console.log(p, q);  // 15, 5


// 3 method: array destructuring 

let d = 30
let e = 50
[d , e ] = [e,d]
console.log(d,e);
