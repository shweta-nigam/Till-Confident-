// Math problem
// calculate area and perimeter of the rectangle
// generate OTP
// area of triangle by heron's formula
// circumference of circle

//Q1 area and perimeter of rectangle
// perimeter -> 2(l + b)
// perimeter -> lb

let l = 5;
let b = 7;
console.log(2 * (l + b)); // 24
console.log(l * b); // 35

// Q2 otp 6 number
console.log(Math.trunc(Math.random() * 1000000) + 1); // not good
console.log(Math.trunc(Math.random() * 900000) + 100000); //  good

// Q3 area of triangle by heron's formula
//  A=sqrt{s(s-a)(s-b)(s-c)}   // s is semi-perimeter
let x = 5,
  y = 10,
  z = 3;
let s = (x + y + z) / 2;
console.log(Math.sqrt(s * ((s - x) * (s - y) * (s - z)))); // NaN
// because the sides (5,10,3) do not form a triangle,
// 5 + 10 > 3 → 15 > 3 ✔
// 5 + 3 > 10 → 8 > 10 ❌
// 10 + 3 > 5 → 13 > 5 ✔
// Because Rule #2 fails, these sides do NOT form a triangle.

let x2 = 5,
  y2 = 10,
  z2 = 7;
let s2 = (x2 + y2 + z2) / 2;
console.log(s2);
console.log(Math.sqrt(s2 * ((s2 - x2) * (s2 - y2) * (s2 - z2)))); // 16.248

// Q circumference of circle
// 2pir*r
let r = 12;
console.log((2 * Math.PI * r ).toFixed(2)); // 75.40
