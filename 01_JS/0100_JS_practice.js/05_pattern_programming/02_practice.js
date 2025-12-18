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
        // if(){}
      row += "*";
    }

    result += "\n" + space + row;
  }
  return result;
}
console.log(hollowPyramid(4));
