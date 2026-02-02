//q1 sum of each digits using while loop

let sumOfEachDigit = function (n) {
  let sum = 0;

  while (n > 0) {
    let rem = n % 10;
    sum += rem;
    n = Math.floor(n / 10);
  }
  return sum;
};

console.log(sumOfEachDigit(2345));

//-------------------------
//q2 reverse of number
function reverseOfNumber(n) {
  let reverseNum = 0;
  while (n > 0) {
    // while loop good choice for this problem otherwise:- for(;n>0;)
    let d = n % 10;
    reverseNum = reverseNum * 10 + d;
    n = Math.floor(n / 10);
  }
  return reverseNum;
}

console.log(reverseOfNumber(9876));

// q3 strong number
// function strongNum(n) {
//   //   let strongN = 0;
//   let fact = 1;

//   for (let i = 0; i <= n; i++) {
//     let d = n % 10;
//     n = Math.floor(n / 10);

//     for (let j = d; j > 0; j--) {
//       fact *= i;
//     }
//   }
//   return fact;
// }
// console.log(strongNum(145)); // why 0

// //
// function strongNum(n) {
//   let strongN = 1;
//   for (let i = 0; i <= n; i++) {
//     let d = n % 10;
//     n = Math.floor(n / 10);
//     let fact = 1;

//     for (let j = d; j > 0; j--) {
//       fact *= i;
//     }
//     strongN *= fact;
//   }
//   if (strongN === n) return true;
//   return false;
// }


//////////// ------------------------------------------------ strong numbers (also called factorion numbers).
function isStrongNum(n) {
  let copy = n;
  let sum = 0;
  while (n>0) {
   let d = n % 10;
    n = Math.floor(n / 10);
    let fact = 1;
    for (let i = d; i > 0; i--) {
      fact *= i;
    }
    sum += fact;
  }

  if (sum !== copy) return  false;
  return true;
}
console.log(isStrongNum(146));          // false
console.log(isStrongNum(145));          // true 
console.log(isStrongNum(1));            // true
console.log(isStrongNum(1906));         // false
console.log(isStrongNum(40585));        // true

