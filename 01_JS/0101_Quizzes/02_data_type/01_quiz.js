console.log(isNaN("foo")); // true
console.log(isNaN(90)); // false
console.log(isNaN(true)); // false

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(12)); // true

//-----
// Strings
// Strings in JS are primitive values and immutable. Methods produce new strings; they don't mutate the original.

//--------
// Object.create(null) creates an object with no prototype.

// { __proto__: null } normally creates an object with null prototype too in modern engines, but Object.create(null) is the explicit, canonical, and unambiguous way interviewers expect. That’s why B is the best answer.

// -----------

//----------

// 20 JavaScript Interview Quiz — Data Types

// Part A — Multiple Choice (10)
// 1
// console.log(typeof undefined);

// A. "undefined"
// B. "object"
// C. "null"
// D. "void"

// 2
// console.log(typeof null);

// A. "null"
// B. "object"
// C. "undefined"
// D. "None"

// 3
// console.log(typeof Symbol("id"));

// A. "symbol"
// B. "object"
// C. "string"
// D. "id"

// 4
// console.log(typeof 10n);

// A. "bigint"
// B. "number"
// C. "object"
// D. "BigInt"

// 5

// Which is true about NaN?
// A. NaN === NaN is true
// B. Number.isNaN("foo") is true
// C. isNaN("foo") is true
// D. typeof NaN is "NaN"

// 6
// const obj = {};
// console.log(obj instanceof Object);

// A. true
// B. false

// 7

// Which returns true for arrays?
// A. typeof [] === "array"
// B. Array.isArray([])
// C. [] instanceof Array === false
// D. Object.prototype.toString.call([]) === "[object Object]"

// 8

// What does typeof function() {} print?
// A. "function"
// B. "object"
// C. "callable"
// D. "undefined"

// 9

// Which statement is correct?
// A. Strings are primitive and immutable.
// B. Strings are objects and mutable.
// C. Numbers are objects.
// D. Booleans are objects.

// 10

// Which one creates a genuinely empty object with no prototype?
// A. {}
// B. Object.create(null)
// C. new Object()
// D. { __proto__: null }

// Part B — Predict the Output (10)

// Write the exact output.

// 11
console.log(typeof NaN);

12;
console.log(NaN === NaN);

13;
console.log(null == undefined, null === undefined);

14;
console.log(typeof [], Array.isArray([]));

15;
console.log(typeof /abc/, Object.prototype.toString.call(/abc/));

16;
let s = Symbol("x");
console.log(typeof s, String(s).includes("Symbol"));

17;
console.log(+true, +false, Boolean(1), Boolean(0));

18;
console.log(typeof BigInt(123), 123n + 1n);

19;
const a = {
  toString() {
    return "1";
  },
  valueOf() {
    return 2;
  },
};
console.log(a + 1);

20;
console.log(JSON.stringify({ a: undefined, b() {}, [Symbol("s")]: 1 }));

// If you want, submit your answers and I’ll grade with explanations.

// You said:
// 1. a , 2.b , 3.a , 4.a , 5.b, 6.a, 7.b, 8. a, 9.b, 10.d, 11. object , 12. false, 13. true,true, 14. object ,true, 15. don't know, 16. symbol, true, 17. 1,0, don't know both, 18. bigInt , 124n, 19. don't know , 20 don't know
// ChatGPT said:
// Thought for 14s

// Nice work — solid attempt! I graded your answers and added short explanations for every incorrect item so you can learn the patterns interviewers love to test.

// Score

// 10 / 20

// Summary (your answer → correct?)

// A → Correct

// B → Correct

// A → Correct

// A → Correct

// B → ❌ Incorrect — Correct: C (isNaN("foo") is true)

// A → Correct

// B → Correct

// A → Correct

// B → ❌ Incorrect — Correct: A (strings are primitive and immutable)

// D → ❌ Incorrect (preferred answer: B) — see note below.

// object → ❌ Incorrect — Correct: "number"

// false → Correct

// true,true → ❌ Incorrect — Correct: true, false

// object , true → Correct

// don't know → ❌ Incorrect — see answer below.

// symbol, true → Correct

// 1,0, don't know both → ❌ Incorrect — Correct: 1 0 true false

// bigInt , 124n → ❌ Incorrect (case & exact text) — Correct: "bigint", 124n

// don't know → ❌ Incorrect — Correct: 3

// don't know → ❌ Incorrect — Correct: "{}"

// Explanations (concise)
// Q5 — NaN facts

// NaN === NaN → false.

// Number.isNaN("foo") → false (checks value, not coerced).

// isNaN("foo") → true (global isNaN coerces then tests).
// So the true statement among options is C.

// Q9 — Strings

// Strings in JS are primitive values and immutable. Methods produce new strings; they don't mutate the original.

// Q10 — empty object with no prototype

// Preferred: Object.create(null) creates an object with no prototype.

// { __proto__: null } normally creates an object with null prototype too in modern engines, but Object.create(null) is the explicit, canonical, and unambiguous way interviewers expect. That’s why B is the best answer.

// Q11 — typeof NaN

// NaN is of type number. So typeof NaN → "number".

// Q13 — null vs undefined

// null == undefined → true (loose equality).

// null === undefined → false (strict equality compares type and value).

// Q15 — regex typeof and toString
// typeof /abc/           // "object"
// Object.prototype.toString.call(/abc/) // "[object RegExp]"

// So the pair is "object", "[object RegExp]".

// Q17 — coercion + Boolean
// +true   // 1
// +false  // 0
// Boolean(1) // true
// Boolean(0) // false

// So output: 1 0 true false.

// Q18 — BigInt

// typeof BigInt(123) returns the string "bigint" (all lowercase).

// 123n + 1n evaluates to 124n (a BigInt).
// So the logged values are: "bigint" 124n.

// Q19 — object + number coercion

// For a + 1, JS tries to convert a to a primitive. For ordinary objects (non-Date) it prefers valueOf() then toString(). Here valueOf() returns 2, so 2 + 1 = 3.

// Q20 — JSON.stringify omissions
// JSON.stringify omits:
// properties with value undefined,
// function properties,
// and Symbol-keyed properties.
// So the object becomes empty when stringified: "{}".
