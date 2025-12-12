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

function leftAliRevTri(n) {
  let result = "";

  for (let i = n; i > 0; i--) {
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
console.log(leftAliRevTri(4));

// ⭐ LEVEL 3 — Core Pattern-Thinking Begins
// 6️⃣ Print a centered equilateral (pyramid)
//    *
//   ***
//  *****
// *******

// Given n = 4.
// This teaches spaces + odd stars: (2*i - 1).

function pyramid(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    let star = "";
    let space = "";

    //space
    for (let s = n - i; s > 0; s--) {
      space += " ";
    }

    // star
    for (let j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    result += "\n" + space + star;
  }
  return result;
}
console.log(pyramid(4));

// 7️⃣ Print an inverted centered pyramid
// *******
//  *****
//   ***
//    *

// Given n = 4.
// Helps with reverse loops.

function reversePyramid(n) {
  let result = "";

  for (let i = n; i > 0; i--) {
    let star = "";
    let space = "";

    for (let s = n - i; s > 0; s--) {
      space += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    result += "\n" + space + star;
  }
  return result;
}

console.log(reversePyramid(4));

// ⭐ LEVEL 4 — Mixed Logic (Spacing + Stars)
// 8️⃣ Print a hollow square
// ****
// *  *
// *  *
// ****

// Given n = 4.
// Teaches conditional pattern logic.

// function hollowSquare(n) {
//   let result = "";
//   for (let i = 1; i <= n; i++) {
//     let star = "";
//     let space = "";

//     // space
//     for (let s = 1; s < n; s++) {
//       space += " ";
//     }

//     // if i & j !==1 and i & j !== n print space
//     for (let j = 1; j <= n; j++) {
//       if (i !== 1 && i !== n && j !== 1 && j !== n) {
//         space += " ";
//       }
//       // otherwise space
//         star += "*";
//     }
//     result += "\n" + star + space;
//   }

//   return result;
// }

function hollowSquare(n) {
  // good now
  let result = "";

  for (let i = 1; i <= n; i++) {
    // let star = "";
    // let space = "";
    let row = "";

    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        // star += "*";
        row += "*";
      } else {
        // space += " ";
        row += " ";
      }
    }
    result += "\n" + row;
  }
  return result;
}

console.log(hollowSquare(4));

// if even on condition out of i === 1 , i === n , j === 1 and j === n is true that becomes border, and each border has star whereas if it is not then it is a space.

// 9️⃣ Print a hollow pyramid
//     *
//    * *
//   *   *
//  *     *
// *********

// Given n = 5.
// Excellent for two-space gaps inside the shape.

function hollowPyramid(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    let row = "";
    let space = "";

    for (let s = n - i; s > 0; s--) {
      space += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      if (i === n  || j === 1 || j === 2*i -1) {
        row += "*";
      } else {
        row += " ";
      }
    }

    result += "\n" + space + row;
  }
  return result;
}
console.log(hollowPyramid(5));
//Note: For a hollow pyramid:
// - top and bottom border stars are decided by i. i ===n print star.
// - left and right borders are decided by j and not i. j === 1 or j === 2*i -1.
// still confusion with why j === 2*i -1

// 🔟 Print a diamond
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

// Given n = 4.

function diamond(n){
  let result = ""

  // upper part
  for(let i = 1; i <= n ; i++){
    let star = ""
    let space = " "

    for(let s = n-i; s >0 ; s--){
      space += " "
    }

    for(let j = 1; j <= 2*i - 1; j++){
      star += "*"
    }
    result += "\n" + space + star
  }

  // bottom part
  for(let i = n; i > 0 ; i--){
    let star = ""
    let space = " "

    for(let s = n-i; s > 0 ; s--){
      space += " "
    }

    for(let j = 1; j <= 2*i - 1; j++){
      star += "*"
    }
    result += "\n" + space + star
  }
  return result
} 

console.log(diamond(8));

// This is the grand challenge because it combines:
// forward pyramid
// inverted pyramid
// alignment
// spacing thinking
