
// why does Js allow multiple functions with same name ?
function sum(a,b){
    console.log(a + b); 
}
function sum(a,b){
    console.log(a - b); 
}
sum(10,20)  // -10
// because it handles function declarations using a mechanism called hoisting, combined with "last-one-wins" behavior