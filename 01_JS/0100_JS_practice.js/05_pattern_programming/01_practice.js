// 1. PRINT A SOLID INVERTED PYRAMID
//    Example (n = 4):
//    *******
//     *****
//      ***
//       *

function invertedPyramid(n) {
  // works
  let result = "";
  for (let i = n; i > 0; i--) {
    let star = "";
    let space = "";
    // space
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
console.log(invertedPyramid(4));

// 2. PRINT A HOLLOW INVERTED PYRAMID
//    Example (n = 4):
//    *******
//     *   *
//      * *
//       *

function invertedHollowPyramid(n) {
  let result = "";
  for (let i = n; i > 0; i--) {
    let row = "";

    for (let s = n - i; s > 0; s--) {
      row += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      if(i===n || j === 2*i - 1 || j === 1){
        row += "*";
      } else {
        row += " "
      }
    }
    result +="\n" + row;
  }
  return result;
}
console.log(invertedHollowPyramid(4));

// 3. PRINT A FULL DIAMOND (SOLID)
//    Example (n = 3):
//      *
//     ***
//    *****
//     ***
//      *

// 4. PRINT A HOLLOW DIAMOND
//    Example (n = 3):
//      *
//     * *
//    *   *
//     * *
//      *

// 5. PRINT A LEFT-ALIGNED HOLLOW TRIANGLE
//    Example (n = 5):
//    *
//    **
//    * *
//    *  *
//    *****

// 6. PRINT A RIGHT-ALIGNED HOLLOW TRIANGLE
//    Example (n = 5):
//        *
//       **
//      * *
//     *  *
//    *****

// 7. PRINT A BUTTERFLY PATTERN
//    Example (n = 4):
//    *      *
//    **    **
//    ***  ***
//    ********
//    ***  ***
//    **    **
//    *      *

// 8. PRINT AN HOURGLASS (SOLID)
//    Example (n = 4):
//    ********
//     ******
//      ****
//       **
//       **
//      ****
//     ******
//    ********

// 9. PRINT A HOLLOW HOURGLASS
//    Example (n = 4):
//    ********
//     *    *
//      *  *
//       **
//       **
//      *  *
//     *    *
//    ********

// 10. PRINT A NUMBER PYRAMID (CENTERED)
//     Example (n = 4):
//        1
//       121
//      12321
// 1234321
