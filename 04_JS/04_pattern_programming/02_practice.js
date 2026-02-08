// q1 print triangle

let n = 6;
for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = i; j > 0; j--) {
    star += "*";
  }
  console.log(star);
}

//--------------
function printNumTriangle(n) {
  let row = ""; // use `string` trick to get "1" -> "12" and not 1+2 = 3
  for (let i = 1; i <= n; i++) {
    row += i;
    console.log(row);
  }
}
printNumTriangle(3);

// 1
// 1 2
// 1 2 3

// ------------ experiment
function printNumTriangle2(n) {
  let row = "";
  for (let i = 1; i <= n; i++) {
    row += i;
  }
  return row; // return will exist with 123 (not what we want!)
}
console.log(printNumTriangle2(3));

// -------------------------- good way to print triangle with return keyword

function printNumTriangle3(n) {
  let row = "";
  let result = "";
  for (let i = 1; i <= n; i++) {
    row += i;
    result += row + "\n";
  }
  return result; // return will triangle here
}
console.log(printNumTriangle3(10));

// -------------------------------------  print equilateral triangle

function equilateralTriangle(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {

    let star = "";
    let space = "";

    for (let s = 1; s <= n - i; s++) {
      space += " ";
    }

    for (let j = i; j > 0; j--) {
      star += "*";
    }

    result += "\n" + space + star;
  }
  return result;
}
console.log(equilateralTriangle(5));
