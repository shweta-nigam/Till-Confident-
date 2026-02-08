//     logical operator    
// &&   || 
console.log( 10 > 6 && 10 > 4  && 20 > 10);  // true
console.log( 6 > 6 && 10 > 4  && 20 > 10);  // false
console.log( 6 > 6 && 10 > 4  || 20 > 10);  // true
console.log( 6 > 6 || 10 > 4  && 20 > 10);  // true


// Note:-
// AND operator: If even one condition is false , it would be false.
// OR operator: If even one condition is true , it would be true.