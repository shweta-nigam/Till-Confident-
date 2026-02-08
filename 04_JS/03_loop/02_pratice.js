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

//----------------------------------------------------------
// prime number
// prime number is the number which is divisible by 1 and itself.
// 2 is only even prime number.
// why 1 is not a prime number ?
// Because :- The number 1 is not a prime number because it only has one factor, itself, while a prime number must have exactly two distinct positive factors: 1 and itself.

// check prime number
let b = 19;
let isPrime = true;
for (let i = 2; i < b / 2; i++) {
  if (b % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

//-----------------------------------------------------
// very optimized way to find prime number

if (ans === null || ans === undefined) {
  console.log("cancelled");
} else {
  let n = Number(ans);
  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      isPrime(n);
    } else {
      console.log("should be +ve and more than 0 ");
    }
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true; // 2 is a prime number
  if (n % 2 === 0) return false;
  for (let i = 3; i < Math.floor(Math.sqrt(n)); i += 2) {
    // i+=2 because no even number is a prime number except 2
    if (n % i === 0) return false;
  }
  return true;
}
