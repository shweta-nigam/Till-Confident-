// Higher order functions - a concept 

// Higher order functions are functions which return functions or accepts functions as their parameter

//ex: 1

function abc(val){          
       // Here abc function is the higher order function and not xy function. 
       // abc function accepts another function as parameters
}

abc(function xy(){})  

// ex:2 
 function a(){
    return function(){}
 }
 // so here function a is a higher order function as it returns another function

 function b(){
    return function c(){
        console.log("Hello");      
    }
 }
 b()        // ❌  not correct way to call function c
 b()()      //✅               Hello   