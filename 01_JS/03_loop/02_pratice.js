// find sum of n natural numbers
// natural number = 1,2,3,4,5 etc/

// let num = Number(prompt("Enter a number"));
// console.log(num);

let num = 10;
if (isNaN(num)) console.log("Invalid input");

if (num > 0) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
    //    sum = sum + i
  }
  console.log(sum);
} else if (num === null || num === undefined || num === 0) {
  console.log("cancelled");
} else {
  console.log("number should be +ve and more than 0");
}
