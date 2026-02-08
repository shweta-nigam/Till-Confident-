// Q1 splice vs slice 

// splice: - modifies the original array 
// - add/remove elements and then update the original array
let a = [ 5,67,6,3]
a.splice(1,2,700,800) 
console.log(a);        // [5,700,800, 3]

// slice 
// give a slice of the array and do not modify original array

let b = [5,6,7,8,9]
console.log(b.slice(3,4));  // [8]
console.log(b);                      // [5,6,7,8,9]

// Q2 map vs foreach 

// map returns new array whereas foreach perform a specific condition .
// there is no return in foreach 
