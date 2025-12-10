// 9th dec 2025
// ⭐ LEVEL 1 — Build Loop Brain (Very Easy)
// These help you understand how rows and columns work.

// 1️⃣ Print a square of stars

// attempt 1         ---- failed
function square(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    star += "*";
    for (let j = i; j > 0; j--) {
      star += "*";
    }
    console.log(star);
  }
  console.log(star);
}
square(3);

// attempt 2       --- passed
function square2(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    star += "*";
  }
  while (n > 0) {
    console.log(star);
    n--;
  }
}
square2(4);

// ------------------------------------------------------------
// 2️⃣ Print a right-angle triangle

function rightAngleTriangle(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let star = "";
    // for(let j = i; j > 0; j--){            // correct
    for (let j = 1; j <= i; j++) {
      // also correct and matches common cose style
      star += "*";
    }
    result += "\n" + star;
  }
  return result;
}

console.log(rightAngleTriangle(5));

// js string repeat -- let star = "*".repeat(i);
// ---- another way to print the triangle without using 2nd loop
function rightAngleTriangle2(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let star = "*".repeat(i);

    result += "\n" + star;
  }
  return result;
}

console.log(rightAngleTriangle2(5));

// ----------------------------------------

// 3️⃣ Print a reverse right-angle triangle

function reverseRightAngleTriangle(n) {
  let result = "";
  for (let i = n; i > 0; i--) {
    let star = "";
    for (let j = i; j > 0; j--) {
      star += "*";
    }
    result += "\n" + star;
  }
  return result;
}
console.log(reverseRightAngleTriangle(5));

// another way

function reverseTri(n) {
  let result = "";
  for (let i = n; i > 0; i--) {
    let star = "*".repeat(i);
    result += "\n" + star;
  }
  return result;
}

console.log(reverseTri(6));

// -------------------------------
// ⭐ LEVEL 2 — Learn spacing & alignment
// 4️⃣ Print a right-aligned triangle
//    *
//   **
//  ***
// ****

function rightAliTri(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    let star = "";
    let space = "";

    // space
    for (let s = n - i; s > 0; s--) {
      space += " ";
    }

    // star
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    result += "\n" + space + star;
  }
  return result;
}

console.log(rightAliTri(3));

// Given n = 4.
// This builds your spacing logic.

// 5️⃣ Print a left-aligned reverse triangle
// ****
//  ***
//   **
//    *

// Given n = 4.

// ⭐ LEVEL 3 — Core Pattern-Thinking Begins
// 6️⃣ Print a centered equilateral (pyramid)
//    *
//   ***
//  *****
// *******

// Given n = 4.
// This teaches spaces + odd stars: (2*i - 1).

// 7️⃣ Print an inverted centered pyramid
// *******
//  *****
//   ***
//    *

// Given n = 4.
// Helps with reverse loops.

// ⭐ LEVEL 4 — Mixed Logic (Spacing + Stars)
// 8️⃣ Print a hollow square
// *****
// *   *
// *   *
// *****

// Given n = 4.
// Teaches conditional pattern logic.

// 9️⃣ Print a hollow pyramid
//     *
//    * *
//   *   *
//  *     *
// *********

// Given n = 5.
// Excellent for two-space gaps inside the shape.

// 🔟 Print a diamond
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// Given n = 4.

// This is the grand challenge because it combines:
// forward pyramid
// inverted pyramid
// alignment
// spacing thinking
