
// writing text in one line with 2 logs
process.stdout.write("hello")
process.stdout.write(" world")

// output of both logs:- hello world  (in node.js)
// error in dev tool :-- Uncaught ReferenceError: process is not defined
// so process.stdout.write() is a node function and not window. 

//------------------------------
const prompt = require("prompt-sync")();
let n = prompt("Enter a number")
console.log(n);


// --------------------------------------------------
// printing right angle triangle

let num = 3
for(let i = 1 ; i <= num ; i++){
    let star = ""
    for(let j = 1; j <=i; j++){
        star += "*"
    }
    console.log(star);  
}