// LEVEL 1 — Basic logic (loops + math)

// 1. Count how many digits are in a number.
//    Example: 4567 → 4 digits

function countNum(n){

    let count = 0
    while(n>0){
        let rem = n % 10
        n = Math.floor(n/10)
        count++
    }
    return count
}
console.log(countNum(3456));



function countNum(n){  // better than before 

    let count = 0
    while(n>0){
        n = Math.floor(n/10)
        count++
    }
    return count
}
console.log(countNum(3000));


// 2. Reverse a number.
//    Example: 1234 → 4321

function reverseNum(n){
    let num = 0
   while(n>0){
    let rem = n % 10 
    n = Math.floor(n/10)
  num = num*10 + rem
   }
   return num
}
console.log(reverseNum(1234));


// 3. Find the product of digits of a number.
//    Example: 235 → 2 * 3 * 5 = 30

// 4. Find the largest digit in a number.
//    Example: 9462 → 9

// 5. Find the smallest digit in a number.
//    Example: 9462 → 2

// 6. Check if a number is a palindrome.
//    Example: 121 → true, 123 → false

// 7. Print the multiplication table of a number.
//    Example: 5 → 5×1 = 5 … 5×10 = 50

// 8. Count how many even and odd digits a number has.
//    Example: 4826 → even digits = 4, odd digits = 0

// 9. Find factorial of a number using a while loop.
//    Example: 5 → 120

// 10. Find the sum of numbers from 1 to n using a while loop.
//     Example: n = 5 → 1+2+3+4+5 = 15
