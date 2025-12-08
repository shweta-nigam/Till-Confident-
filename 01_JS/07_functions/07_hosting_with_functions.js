// Hoisting :- using function before it is made/declared

//
abc(8)

function abc(n){
    console.log("value is", n);
    
}

// note:
// - Hoisting works in function declaration/ statement 
// - Hoisting does not work in function expression'

// ex:--------- hoisting in function expression

xy()                                           // ReferenceError: Cannot access 'xy' before initialization

let xy = function(){
    console.log("Hello");
}