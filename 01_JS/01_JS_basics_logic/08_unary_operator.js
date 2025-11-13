// unary operator
//  ++  --
let a = 10;
let b = a++;
let c = ++a;
console.log(a, b, c); // 12,10,12

let a2 = 10;
let c2 = ++a2;
let b2 = a2++;
console.log(a2, c2, b2); // 12,11,11

//
let i = 11;
i = i++ + ++i;
console.log(i);  // 11+ (13)

//
let p = 11,  q = 22;
let r = p + q + ++p + q++ + ++p + ++q;
console.log("p=" + p);  // 13
console.log("q=" + q);  // 24 
console.log("r=" + r);  // 104

//
let x = true 
x++
console.log(x);   // 2

//
let y = false 
y++
console.log(y);  // 1

// note: - unary operators do not work on constants
console.log(5++);   // ❌    SyntaxError: Invalid left-hand side expression in postfix operation


// Another invalid operation
let j = 11
let k = --(j++)
console.log(k); // ❌ SyntaxError: Invalid left-hand side expression in prefix operation

// 
let j2 = 11
let k2 = ++(j2++)  
console.log(k2);  //  ❌SyntaxError: Invalid left-hand side expression in prefix operation
// because here first (j2++) will be resolved to 12 and then it will become ++12 which is invalid(see above)
