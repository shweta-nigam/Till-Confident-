//1. sum
function sum(num) {
  if (isNaN(num)) return "Invalid input";
  if (num === null && num === undefined) return `cancelled`;
  if (num > 0) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
}
console.log(sum(100));

//2. factorial of n numbers

function factorial(n) {
  if (isNaN(n)) return "Invalid input";
  if (n === null && n === undefined) return `cancelled`;

  // in descending order
  //   if (n > 0) {
  //     let fact = 1;
  //     for (let i = n; i > 0; i--) {
  //       fact *= i;
  //     }
  //     return fact;
  //   }

  // in ascending way
  if (n > 0) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
}
console.log(factorial(5));

//-----------------------------------
//3 factor of n numbers
let n = 12;
for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    console.log(i);
  }
}

// more optimized
let n2 = 12;
for (let i = 1; i <= n2 / 2; i++) {
  if (n2 % i === 0) {
    console.log(i);
  }
}
console.log(n2);

// ---------------------------------------
// prime numbers
// what are prime numbers? numbers which are only divisible by 1 and itself.
// 2 is the sole even prime number.

function primeNum(n) {
  if (n === 2) return true;
  if (n === 1) return false;
  if (n > 0) {
    for (let i = 3; i < n / 2; i++) {
      if (n % 1 === 0 && n % n === 0) {
        return true;
      }
    }

    return false;
  }
}
console.log(primeNum(2));

// more optimized than above solution

// function isPrimeNum(n) {
//   if (n <= 1) return false;
//   if (n === 2) return false;
//   if (n % 2 === 0) false;
//   if (n => 3) {
//     for (let i = 3; i < Math.floor(Math.sqrt(n)); i+=2) {
//       if (n % 1 === 0 && n % n === 0) {
//         return false;
//       }
//     }
//     return true
//   }
// }
// console.log(isPrimeNum(8));

// correction in above code

function isPrimeNum(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrimeNum(8));

// why Math.floor(Math.sqrt()) :-
// Any composite number must have a divisor ≤ √n
// Cuts the number of checks dramatically
// Makes algorithm efficient
