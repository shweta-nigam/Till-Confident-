// writing text in one line with 2 logs
process.stdout.write("hello");
process.stdout.write(" world");

// output of both logs:- hello world  (in node.js)
// error in dev tool :-- Uncaught ReferenceError: process is not defined
// so process.stdout.write() is a node function and not window.

//------------------------------
const prompt = require("prompt-sync")();
let n = prompt("Enter a number");
console.log(n);

// --------------------------------------------------
// printing right angle triangle

let num = 3;
for (let i = 1; i <= num; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}


//-------------------------------------------
let a = 5;
for (let i = 1; i <= a; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write(j)
    process.stdout.write(j + "");
  }
  console.log();
}

// j is a number (1, 2, ...).
// process.stdout.write(chunk) checks the type of chunk. If it's not string/Buffer/TypedArray/DataView, Node throws ERR_INVALID_ARG_TYPE.
// console.log(j) would be fine because console.log stringifies values for you; process.stdout.write is lower-level and does not auto-stringify numbers.
// note: process.stdout.write()   :- always prints a string and not an integer.


//-------------------------------------------
let b = 4;
for (let i = 1; i <= b; i++) {
    let pattern = ""
  for (let j = 1; j <= i; j++) {
    pattern += j
}
// "/n"   
console.log(pattern);
}


// ----------------------------
let n2 = 5;
let row = "";

for (let i = 1; i <= n2; i++) {
  row += i;
  console.log(row);
}
