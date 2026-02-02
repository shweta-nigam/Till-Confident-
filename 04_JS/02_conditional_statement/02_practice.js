// 23 Nov 2025
// Q3 Electricity Bill
// upto 100        ₹4/unit
// 101 - 200       ₹6/unit
// 201 - 400       ₹8/unit
// more than 401   ₹13/unit

// let unit = 700;
// let payable = 0;
// let currentUnit = 0;

// if (unit > 400) {
//   currentUnit = unit - 400; // 300 unit , 400 units left
//   payable += currentUnit * 13;
//   console.log("fourth slab:",payable);
// } else if (unit <= 400 && unit > 200) {
//   currentUnit = unit - 200; // 200 unit, 200 units left
//   payable += currentUnit * 8;
//   console.log("third slab:",payable);
// } else if (unit <= 200 && unit > 100) {
//   currentUnit = unit - 100; // 100 unit, 100 unit left
//   payable += currentUnit * 6;
// console.log("second slab",payable);
// } else {
//   payable += currentUnit * 4;
//   console.log("first slab",payable);
// }
// console.log("Electricity bill payable", payable);

// Above code  won't work perfectly as in if-else block only --single-- block with true value is executed.

// ---------------------
// let unit = 700;
// let payable = 0;
// if (unit <= 400 && unit > 700) {
//   if (unit <= 200 && unit > 400) {
//     if (unit <= 100 && unit > 200) {
//       if (unit >= 100) {
//         payable += currentUnit * 4;
//       }
//       currentUnit = unit - 100;
//       payable += currentUnit * 6;
//     }
//     currentUnit = unit - 200;
//     payable += currentUnit * 8;
//   }
//   payable = (unit-400) * 13;
//   unit = 400
//   console.log("4th slab:", payable);
// }

// another wrong answer

//-------------------------------------------
let unit = 700;
let payable = 0;

// Reason why it is correct way
//  Each true condition needs to be executed,  therefore we use independent if scope here.
// -- because each slab must run independently.

if (unit > 400) {
  payable += (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  payable += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  payable += (unit - 100) * 6;
  unit = 100;
}
if (unit <= 100) {
  payable += unit * 4;
}

// console.log("Electricity bill payable", payable); // 6500

// ------------------------------------------------
//Q4 INR denomination

let money = 5234;

if (money >= 500) {
  console.log(`500 notes: ${Math.floor(money / 500)}`)
  money %= 500
}
if (money < 500 && money >= 200) {
   console.log(`200 notes: ${Math.floor(money / 200)}`)
  money %= 200
}
if (money < 200 && money >= 100) {
  console.log(`100 notes: ${Math.floor(money / 100)}`)
  money %= 100
}
if (money < 100 && money >= 50) {
 console.log(`50 notes: ${Math.floor(money / 50)}`)
  money %= 50
}
if (money < 50 && money >= 20) {
console.log(`20 notes: ${Math.floor(money / 20)}`)
  money %= 20
}
if (money < 20 && money >= 10) {
 console.log(`10 notes: ${Math.floor(money / 10)}`)
  money %= 10
}
if (money < 10 && money >= 5) {
 console.log(`5 coins: ${Math.floor(money / 5)}`)
  money %= 5
}
if (money < 5 && money >= 2) {
 console.log(`2 coins: ${Math.floor(money / 2)}`)
  money %= 2
}
if(money === 1){
    console.log(`1 coins: ${(money / 1)}`)
    // console.log(money%1); 
}

