// note: "node --watch filename.js"  ---> continuously monitor terminal

// there are 2 ways to import other's code

// tradition way
// const fs = require"node:fs")    // fs -> file system
// or (same as above)
const fs = require("fs")      
const path = require("path")
const os = require("os")
// these -> fs/path/os  are very important part of nodejs (research on them)


// modern way is the import/export syntax


//------------------------------------ 
// access of 'process' is coming from 'nodejs.process' (search)
console.log("v8: ", process.versions.v8);    // gives version of v8 
console.log("NodeJs: ", process.versions.node);       
console.log("libuv: ", process.versions.uv);        
console.log("=".repeat(30));

console.log("platform: ", process.platform);      // you platform - win32 


// console.log("os: ", os);      // 
console.log("os cpu: ", os.cpus);      // [Function: cpus] (because cpus is method us parentheses)
console.log("os cpu: ", os.cpus());
console.log("os cpu length: ", os.cpus().length);

// you need to know which is your method and which is property


// -----------------------------------------------------
// these below lines - what is this , why do they exist, what is difference?

console.log(typeof global);    // object
console.log(typeof globalThis);  // object


console.log(global);   // <ref *1> Object [global]   // reference error in browser
console.log(globalThis);  // <ref *1> Object [global]   // window object in browser
