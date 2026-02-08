// ✅ PART A — Multiple Choice (10 Questions)
// 1. What is the output?
let arr = [1, 2, 3];
arr.length = 1;
console.log(arr);


// A. [1,2,3]
// B. [1]
// C. [1, undefined]
// D. Error

// 2. What does this print?
console.log([1,2] == [1,2]);


// A. true
// B. false
// C. TypeError
// D. undefined

// 3. Which method mutates the original array?

// A. map()
// B. filter()
// C. slice()
// D. splice()

// 4. What is the output?
let arr4 = [3,1,10];
arr.sort();
console.log(arr4);


// A. [1,3,10]
// B. [1,10,3]
// C. [10,3,1]
// D. [3,1,10]

// 5. What prints?
let a1 = [1,2,3];
let b = a1;
b.push(4);
console.log(a1);


// A. [1,2,3]
// B. [1,2,3,4]
// C. undefined
// D. Error

// 6. What does this output?
console.log([..."abc"]);


// A. ["abc"]
// B. ["a","b","c"]
// C. ["a","b","c","abc"]
// D. Error

// 7. What is the output?
let arr3 = [10,20,30];
delete arr3[1];
console.log(arr3.length);


// A. 2
// B. 3
// C. 1
// D. undefined

// 8. What prints?
let arr2 = [1,2,3];
console.log(arr2.slice(1,10));


// A. [2]
// B. [2,3]
// C. []
// D. Error

// 9. What does this print?
console.log([1,2,3].map(x => x * 2));


// A. [2,4,6]
// B. [1,2,3]
// C. [undefined, undefined, undefined]
// D. Error

// 10. What is the output?
console.log([1,2,3].reduce((a,b)=>a+b, 0));


// A. "123"
// B. 6
// C. NaN
// D. undefined

// ✅ PART B — Output Prediction + Tricks (10 Questions)
// 11.
let arr = [1,2,3];
arr[5] = 10;
console.log(arr.length, arr);

// 12.
console.log([1,2,3].find(x => x > 2));

// 13.
let arr = [1,2,3];
console.log(arr.splice(1,1), arr);

// 14.
let a = [];
a[10] = 5;
console.log(a.map(x => 1));

// 15.
let arr = ["a","b","c"];
console.log(arr.reverse());

// 16.
let a = [1,2,3];
let b2 = [...a];
b2.pop();
console.log(a, b2);

// 17.
let arr = [1,2,3,4];
let out = arr.filter(x => x % 2 === 0).map(x => x * 10);
console.log(out);

// 18.
console.log([1,2,,4].length);

// 19.
console.log([1,2,3].includes("3"));

// 20.
let arr = [1, 2, 3];
for (let i in arr) console.log(i);
for (let i of arr) console.log(i);


// Write both outputs.

// If you answer them, I will score and explain every question with examples.

// You said:
// 1. b , 2.a, 3. d, 4.b, 5.b, 6. d, 7.a, 8.b, 9.a, 10.b, 11. 5, [1,2,3,undefined, 10] , 12. 3, 13. 2, [1,3], 14. don't know, 15. ["c", "b", "a"] , 16. [1,2] , [1,2], 17. [20,40] , 18. 4 , 19.false, 20. 0,1,2,   ,  1,2,3
// ChatGPT said:
// Thought for 12s

// Nice work — you got the bulk of them right and caught a lot of the trickiness. I graded your answers and added short, clear corrections where needed.

// Score

// 13 / 20

// Summary (your answer → correct?)

// Part A
// B → Correct
// A → ❌ Incorrect — Correct: B (false)
// [1,2] == [1,2] is false because arrays are reference types; two distinct arrays are not === or == equal.
// D → Correct (splice() mutates)
// B → Correct (sort() does lexicographic by default → [1,10,3])
// B → Correct (aliasing: b.push(4) mutates a)
// D → ❌ Incorrect — Correct: B (["a","b","c"])
// [..."abc"] spreads the string into characters.
// A → ❌ Incorrect — Correct: B (3)
// delete arr[1] removes the element but does not change length.
// B → Correct
// A → Correct
// B → Correct

// Part B
// 11. Your: 5, [1,2,3,undefined,10] → ❌ Incorrect
// Correct: 6 and [1,2,3, <2 empty items>, 10]
// Setting arr[5]=10 makes length 6 (indices 0..5). Missing indices become holes (not undefined properties).
// 3 → Correct (find(x=>x>2) returns 3)
// Your: 2, [1,3] → ❌ Incorrect
// Correct: [2] and [1,3]
// splice(1,1) returns an array of removed elements ([2]) and mutates the original to [1,3].
// don't know → ❌ Incorrect
// Correct: Array printed as [ <10 empty items>, 1 ]
// a[10]=5 creates a sparse array of length 11; map skips holes, so only index 10 mapped to 1.
// ["c","b","a"] → Correct (reverse() mutates & returns the reversed array)
// [1,2] , [1,2] → ❌ Incorrect
// Correct: original a remains [1,2,3], b is [1,2]
// Spreading creates a shallow copy; b.pop() doesn't affect a.
// [20,40] → Correct (filter then map)
// 4 → Correct (holes count toward length)
// false → Correct (includes uses strict equality; "3" !== 3)
// 0,1,2 and 1,2,3 → Correct (for..in yields keys (strings), for..of yields values)



// Quick explanations / tips for the incorrect ones
// Arrays compare by reference: [] === [] is false. Use .every() or JSON.stringify() (or deep-equal) to compare contents.
// Spread a string: [..."hey"] → ["h","e","y"].
// delete vs length: delete arr[i] removes the property but leaves a hole; use splice() to remove and shift elements (and reduce length).
// Sparse arrays & .map(): holes are skipped by map; they are not the same as properties with value undefined.
// Shallow copy with spread: b = [...a] creates a new array; mutating b won't mutate a.
// splice() return value: it returns an array of removed elements (even if one element was removed).