// LEVEL 1 — Basic logic (loops + math)

// 1. Count how many digits are in a number.
//    Example: 4567 → 4 digits

function countNum(n) {
  let count = 0;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(countNum(3456));

function countNum(n) {
  // better than before

  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(countNum(3000));

// 2. Reverse a number.
//    Example: 1234 → 4321

function reverseNum(n) {
  let num = 0;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    num = num * 10 + rem;
  }
  return num;
}
console.log(reverseNum(1234));

// 3. Find the product of digits of a number.
//    Example: 235 → 2 * 3 * 5 = 30

function productOfDigits(n) {
  let product = 1;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    product *= rem;
  }
  return product;
}

console.log(productOfDigits(235));

// 4. Find the largest digit in a number.
//    Example: 9462 → 9

//attempt 1  - works but not optimized
function largestNum(n) {
  // gives correct answer  - > but not good -> as array in unnecessary
  let arr = [];
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    arr.push(rem);
  }
  return Math.max(...arr);
}
console.log(largestNum(9462));

//------------------------------  math.max() and array and spread operator
let arr = [2, 3, 45, 6];
console.log(...arr); // 2 3 45 6
console.log(Math.max(...arr)); // 45

console.log(Math.max([12, 34, 6, 4])); // NaN - Math.max() does not accept array.
//---------------------------------

// attempt 2   - failed
function largestNum2(n) {
  let lNum = 0;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);

    if (lNum > rem) {
      return lNum;
    }
    lNum = rem;
  }
  return lNum;
}
console.log(largestNum2(1098689));
console.log(largestNum2(11119));
console.log(largestNum2(91111));

// attempt 3          ---- good (finally)
function largestNum3(n) {
  let lNum = 0;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    if (rem > lNum) {
      lNum = rem;
    }
  }
  return lNum;
}
console.log(largestNum3(3457));

// 5. Find the smallest digit in a number.
//    Example: 9462 → 2

function smallestNum(n) {
  // ✅
  let smallestN = 9;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    if (rem < smallestN) {
      smallestN = rem;
    }
  }
  return smallestN;
}
console.log(smallestNum(1034));

// 6. Check if a number is a palindrome.
//    Example: 121 → true, 123 → false

function palindrome(n) {              //solution works but has many loopholes 
if(n=== null || n === undefined) return false;
if(isNaN(Number(n))) return false;

  let newN = "";
  let originalNum = n;
  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    newN += rem;
  }
  if (originalNum === Number(newN)) {
    return true;
  }
  return false;
}
console.log(palindrome(9889));      // true
console.log(palindrome("9889"));      // true
console.log(palindrome("89h"));      // false

//note:  Number(new) -> to convert string to number for strict comparison.
// Note: Deep thinking and edge case 

// a. leading zeros break logic 
// console.log(palindrome(010));   // JS parses it as octal or decimal depending on mode
console.log(palindrome("010")); //  logic may return false
// Original: "010"
// Reversed: "010" → number 10
// Comparison: "010" === 10 → false
// This is a deeper conceptual bug.

//b. check fails for input 0
// when palindrome(0) then while(n>0) loop never run but 0 === Number("") → true
// This is accidentally correct, not logically correct. 


//------------------------------------------------------------------------------------------------
// 7. Print the multiplication table of a number.
//    Example: 5 → 5×1 = 5 … 5×10 = 50

function table(n){     // good
    for(let i = 1; i <=10 ; i++){
console.log( `${n} x ${i} = ${n * i}`); 
    }
}
table(5);

// now same result with return keyword

function table2(n){     // good
    let result = ""
    for(let i = 1; i <=10 ; i++){
result += `${n} x ${i} = ${n * i}` + "\n"; 
    }
    return result
}
console.log(table2(5));


// 8. Count how many even and odd digits a number has.
//    Example: 4826 → even digits = 4, odd digits = 0

function find_Even_Odd(n){
let oddCount = 0
let evenCount = 0
// if(n===0) return `even digits = ${evenCount++}`// it will log 0 and not 1 as It inserts 0, not 1. (post - increment)
if(n===0) return `even digits = ${++evenCount}`
while(n>0){
    let rem = n%10
    n = Math.floor(n/10);
    if(rem % 2 === 0) {
        evenCount++
    } else {
        oddCount++
    }
}
return `even digits = ${evenCount}, odd digits = ${oddCount}`
}
console.log(find_Even_Odd(482670));
console.log(find_Even_Odd(0));
// Note: why post-increment with count variables and pre-increment when counting 0?
// Because 0 count is the immediate return (needing updated value immediately).
// and post-increments with other number count as they are not returning immediately.

//--------------------------------------------------------------------
// 9. Find factorial of a number using a while loop.
//    Example: 5 → 120

function factorial(n){
    let result = 1
    // for(let i = n; i > 0 ; i--){          // both works
    //         result *= i
    // }
    for(let i = 1; i <= n ; i++){
            result *= i
    }
    return result
}
console.log(factorial(5));


// 10. Find the sum of numbers from 1 to n using a while loop.
//     Example: n = 5 → 1+2+3+4+5 = 15

function sum(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum
}
console.log(sum(5));
