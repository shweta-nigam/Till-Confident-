const fs = require("fs")
console.log("start")


fs.readFile("file",  () => console.log("reading a file...."))

setImmediate(() => {
  console.log("Immediate executed");
});

console.log("end")