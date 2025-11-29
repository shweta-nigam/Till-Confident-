
// swap value of variables 
// method 1-
let a = 10;
let b = 20;

a = a + b 
b = a - b     // 30 - 20 = 10
a = a - b     // 30 - 10 = 20
console.log(a,b);  // 20,10

// method 2 -

let x = 3; let y = 5
let z = x
x = y  
y = z
console.log(x,y);  // 5,3

// method 3 - 
let p = 6 ; let q = 9;
[p, q] = [q, p];
console.log(p,q);     // 9, 6
 

//---------------------------------------
function greet(){
var name = "jay"
}
console.log(name);    // var is function scoped
