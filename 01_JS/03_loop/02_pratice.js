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

//----------------------------------------------------
// factorial of n numbers

let n = 4;
let factorial = 1;
for (let i = n; i > 0; i--) {
  factorial *= i;
  // console.log(factorial);
}
console.log(factorial);

//
let n1 = 5;
let fact = 1;
for (let i = 1; i <= n1; i++) {
  fact *= i;
}
console.log(fact);

// ----------------------------------------
// factor of n numbers

// let ans = prompt("Enter a number");
let ans = 4;

if (ans === null || ans === undefined) {
  console.log("cancelled");
} else {
  let n = Number(ans);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
          console.log(i);
        }
      }
    } else {
      console.log("should be +ve and more than 0 ");
    }
  }
}

//  more optimized way to find factors of a number

let a = 8;
for (let i = 1; i <= Math.floor(a / 2); i++) {
  if (a % i == 0) {
    console.log(i);
  }
}
console.log(a);

// As any number divided by 2 would make the numbers above the divided outcome to be non-factor except the number itself.
// ex: 8 , 8/2 = 4 , then all factor will be <= 4 and 8 itself(which is >=+- 8).
