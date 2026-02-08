//------------------------------------------------

// Truthy and Falsy nature values 

// falsy values:- 0 false "" null undefined NaN document.all    
// a good way to check is to use !! 
console.log(!!0);                           
console.log(!!false);
console.log(!!"");
console.log(!!undefined);
console.log(!!NaN);
console.log(!!document.all);


console.log(null + 1);   // 0+1


// truthy values: Everything except falsy value is truthy value.