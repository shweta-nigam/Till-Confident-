// ✅ 20 JavaScript Interview Quiz Questions — Math Functions & Number Methods
// Part A — Multiple Choice (10 questions)
// 1. What is the output?
// console.log(Math.floor(-2.7));


// A. -3
// B. -2
// C. 2
// D. 3

// 2. What does this print?
// console.log(Math.ceil(2.1));


// A. 2
// B. 3
// C. 4
// D. NaN

// 3. Output?
// console.log(Math.round(-2.5));


// A. -3
// B. -2
// C. 3
// D. 2

// 4. What is the result?
// console.log(Math.trunc(-4.9));


// A. -5
// B. -4
// C. 4
// D. 5

// 5. What does this return?
// console.log(Math.max(3, 9, "12"));


// A. 12
// B. 9
// C. "12"
// D. NaN

// 6. What is the output?
// console.log(Math.min(...[5, 2, 9]));


// A. 5
// B. 2
// C. 9
// D. Error

// 7. Predict output:
// console.log(parseInt("5.9") + Math.floor(5.9));


// A. 10
// B. 9
// C. 11
// D. 5

// 8. Output?
// console.log((1.256).toFixed(2));


// A. 1.256
// B. 1.25
// C. "1.26"
// D. "1.25"

// 9. What does this print?
// console.log(Math.sqrt("16"));


// A. 4
// B. "4"
// C. 16
// D. NaN

// 10. What's the output?
// console.log(Math.random() === Math.random());


// A. true
// B. false
// C. maybe true
// D. error

// Part B — Output Prediction (10 questions)

// Write the exact output.

// 11.
console.log(Math.pow(2, 3) + 2 ** 3);

12.
console.log(Math.abs(-5) + Math.abs("3"));

13.
console.log(Math.max([1, 2, 3]));

14.
console.log(Math.floor(Math.random() * 5));


// (Answer pattern: integer between ___ and ___)

15.
console.log(Number((12.567).toFixed(1)));

16.
console.log(Math.min(null, 5, -1));

17.
console.log(Math.ceil(-1.1));

18.
console.log(Math.trunc(2.9999) + Math.round(2.4999));

19.
console.log(+"3.5" + Math.cbrt(27));

20.
let x = Math.random();
console.log(x >= 0 && x < 1);


// (Answer: true/false?)

// Give your answers and I’ll grade them with explanations!

// You said:
// 1.a , 2.b, 3.a,  4.b, 5.a, 6.b, 7.c, 8.c, 9.a , 10.b , 11. 16 , 12. 8 , 13.NaN, 14. 0 - 5 , 15. 12.6 , 16.-1, 17. 1 , 18.5, 19. 6.5 , 20. true  
// ChatGPT said:

// Here is your score and full evaluation — you did really well!

// 🎯 Your Score: 18 / 20

// Below is a detailed breakdown:

// Correct: 1,2,3,4,5,6,8,9,10,11,12,13,16,18,19,20

// Incorrect: 7, 17, 14 (partially)
// (One of your answers was close but not fully correct.)

// ✅ Answer Review (Your answer → Correct)
// 1. A → Correct
// 2. B → Correct
// 3. A → Correct
// 4. B → Correct
// 5. A → Correct
// 6. B → Correct
// 7. C → ❌ Incorrect

// Expression:

// parseInt("5.9") + Math.floor(5.9)


// parseInt("5.9") → 5

// Math.floor(5.9) → 5
// Sum: 5 + 5 = 10

// Correct answer: A (10)

// 8. C → Correct

// "1.26"

// 9. A → Correct
// 10. B → Correct

// Random is never equal.

// 11. 16 → Correct
// 12. 8 → Correct
// 13. NaN → Correct

// Math.max([1,2,3]) → tries to compare a single array → NaN

// 14. “0 - 5” → ❌ Partially correct

// This should be:

// ✔ Correct range: 0 to 4 (inclusive)

Because:

Math.floor(Math.random() * 5)


// always returns integer in: 0,1,2,3,4

// You wrote 0–5, but it never returns 5.

// 15. 12.6 → Correct
// 16. -1 → Correct

// Math.min(null, 5, -1) → null → 0, so min is -1.

// 17. 1 → ❌ Incorrect
Math.ceil(-1.1)


// Ceiling means “move upward on number line”.

// For negative numbers:
// -1.1 → -1 (not +1)

// Correct answer: -1

// 18. 5 → Correct
// 19. 6.5 → Correct
// 20. true → Correct
// ⭐ Final Score: 18 / 20 — Excellent!

// You only missed two actual logic questions and one partial-range question.