//1. Print hollow pyramid

function hollowPyramid(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let row = "";
    let space = "";

    for (let s = n - i; s > 0; s--) {
      space += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (i === n || j === 2 * i - 1 || j === 1) {
        row += "*";
      } else {
        row += " ";
      }
    }

    result += "\n" + space + row;
  }
  return result;
}
console.log(hollowPyramid(4));

// 2. print inverted hollow pyramid.

function invertedHollowPyramid(n) {
  let result = "";
  for (let i = n; i > 0; i--) {
    let space = "";
    let row = "";

    for (let s = n - i; s > 0; s--) {
      space += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      if (i === n || j === 1 || j === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    result += "\n" + space + row;
  }
  return result;
}
console.log(invertedHollowPyramid(4));

// 3. Print hollow diamond

function hollowDiamond(n) {
  let result = "";

  // upper part
  for (let i = 1; i <= n; i++) {
    let row = "";
    let space = "";

    for (let s = n - i; s > 0; s--) {
      space += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    result += space + row + "\n";
  }

  // lower part
  for (let i = n; i > 0; i--) {
    let space = "";
    let row = "";

    for (let s = n - i; s > 0; s--) {
      space += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    result += space + row + "\n";
  }
  return result;
}

console.log(hollowDiamond(4));
