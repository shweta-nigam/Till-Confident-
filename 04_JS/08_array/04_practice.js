// Destructuring and spread operator in js

let arr = [1,2,3,4,5]

let [a,b, , c] = arr                    // destructure a and b,c out of arr

console.log(a,b,c);  // 1,2,4


// spread operator 
// copy the array and not it's reference

// let x = [1[2[3[4,5]]]]   // wrong syntax
// console.log(x);          //  [ undefined ]  why?
// console.log(y);          //  [ undefined ]  why? 


let x = [1, [2, [3, [4,5]]]];
let y = [...x]

console.log(y);



 