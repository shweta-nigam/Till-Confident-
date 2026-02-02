// LEVEL 2 — Essential math logic

// 11. Check if a number is prime.
//     Example: 11 → prime, 12 → not prime

function isPrime(n) {
  let isPrimeNum = true;
  if (n === 2) return (isPrimeNum = true);
  if (n === 1) return (isPrimeNum = false);
  if (n % 2 === 0) return (isPrimeNum = false);
  if (n > 0) {
    for (let i = 3; i <= Math.sqrt(Math.floor(n)); i += 2) {
      if (n % i === 0) {
        return (isPrimeNum = false);
      }
      console.log(i);
    }
  } else {
    return `Number should be grater than 0`;
  }
  return (isPrimeNum = true);
}
console.log(isPrime(4));

// simplified version:-
function isPrime(n) {
  if (n === 2) return true;
  if (n === 1) return false;
  if (n % 2 === 0) return false;
  if (n > 0) {
    for (let i = 3; i <= Math.sqrt(Math.floor(n)); i += 2) {
      if (n % i === 0) {
        return false;
      }
      console.log(i);
    }
  } else {
    return `Number should be grater than 0`;
  }
  return true;
}
console.log(isPrime(4));

// 12. Print all prime numbers from 1 to n.
//     Example: n = 10 → 2, 3, 5, 7

// function printPrimeNum(n) { // failed attempt
//   if (n > 0) {
//     let primeN = "";
//     for (let i = 1; i <= n; i++) {
//       if (i === 2)  primeN += i;;
//       if (i === 1)  false;
//       if (i % 2 === 0)  false;

//       for (let j = 3; j <= Math.sqrt(Math.floor(i)); j += 2) {
//         if (n % i === 0)  false;
//         primeN += i;
//       }
//     }
//     return primeN
//   } else {
//     return `Number should be grater than 0`;
//   }
// }

// function printPrimeNum2(n) { // // failed attempt
//   if (n > 0) {
//     for (let i = 1; i <= n; i++) {
//       let isPrime = false;
//       let primeN = "";
//       if (i % 2 === 0) isPrime;
//       if (i === 1) isPrime;
//       if (i === 2) primeN += i;
//       for (let j = 3; j <= Math.sqrt(Math.floor(i)); i += 2) {
//         if (j % 2 === 0) isPrime;
//       }
//       primeN += i;
//     }
//     return primeN;
//   } else {
//     return `Number should be grater than 0`;
//   }
// }

function printPrimeNum(n) {
  let primeNum = ""
  if (n === 1) return false;
  if (n > 0) {
    for (let i = 2; i <= n; i++) {
      if(i ===2) primeNum += i + " ";
      if (i % 2 === 0) continue;
      if(i === 1) continue;
      let isPrime = true
      for (let j = 3; j <= Math.sqrt(Math.floor(i)); j += 2) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if(isPrime){
       primeNum += i  + " "  
      }
    }
    return primeNum
  } else {
    return `Number should be grater than 0`;
  }
}
console.log(printPrimeNum(100));
// Note: A prime-check loop is a search for failure.
// i loop → chooses candidate numbers
// j loop → judges primality
// isPrime → holds judgment
// primeNum → collects result


// 13. Find the GCD (HCF) of two numbers.
//     Example: (20, 28) → 4

// 14. Find the LCM of two numbers.
//     Example: (4, 5) → 20

// 15. Find all factors of a number.
//     Example: 12 → 1, 2, 3, 4, 6, 12

// 16. Count how many factors a number has.
//     Example: 28 → 6 factors

// 17. Check if a number is a perfect number.
//     Example: 6 → 1 + 2 + 3 = 6 → perfect number

// 18. Check if a number is abundant or deficient.
//     Example: 12 → 1+2+3+4+6 = 16 → abundant

// 19. Print Fibonacci sequence up to n terms.
//     Example: n = 6 → 0 1 1 2 3 5

// 20. Find the nth Fibonacci number using loops.
//     Example: n = 7 → 8
