// Range Questions ----------------------------------------------------
//Q1 Shop discount
// 0    -  5000     0%
// 5001 -  7000     5%
// 7001 -  9000    10%
// 9001+           20%

function shopDiscount(amount) {
  let dis = 0;
  if (amount > 0 && amount <= 5000) dis = 0;
  else if (amount > 5001 && amount <= 7000) dis = 5;
  else if (amount > 7001 && amount <= 9000) dis = 10;
  else if (amount > 9000) dis = 20;
  return `Discount ${dis}%, amount payable ${amount - (amount / 100) * dis}`;
}

console.log(shopDiscount(6000));

// Q2 Electricity Bill
// upto 100        ₹4/unit
// 101 - 200       ₹6/unit
// 201 - 400       ₹8/unit
// more than 401   ₹13/unit

// function calEleBill(unit) {             // stupid way to calculate it
//   let amount = 0;
//   if (unit >= 0 ) {
//       amount += unit * 4;
//       unit = unit - 100;
//   }
//   if (unit > 101 && unit <= 200) {
//     amount += unit * 6;
//     unit = unit - 300;
//   }
//   if (unit > 201 && unit <= 400) {
//     amount += unit * 8;
//     unit = unit - 400;
//   }
//   if (unit > 201 && unit <= 400) {
//     amount += unit * 13;
//   }
//   return `Electricity amount due ₹${amount}`;
// }

// function calEleBill(unit) {     // failed attempt 2
//   let amount = 0;
//   if (unit >= 401) {
//     unit = unit - 400;
//     amount += unit * 13;
//   }
//   if (unit >= 200 && unit < 400) {
//     amount += unit * 8;
//     unit = unit - 200;
//   }

//   if (unit > 101 && unit <= 200) {
//     amount += unit * 6;
//     unit = unit - 100;
//   }

//   if (unit > 0) {
//     amount += unit * 4;
//   }
// }

function calEleBill(unit) {
  // done without any help (though it took time 👍)
  let amount = 0;
  if (unit > 401) {
    unit = unit - 400;
    amount += unit * 13;
    unit = 400;
    // console.log("amount", amount);
  }
  if (unit >= 201 && unit <= 400) {
    unit = unit - 200;
    amount += unit * 8;
    unit = 200;
    // console.log("2 amount", amount);
  }
  if (unit >= 101 && unit <= 200) {
    unit = unit - 100;
    amount += unit * 6;
    unit = 100;
    // console.log("3 amount", amount);
  }
  if (unit >= 0) {
    amount += unit * 4;
    // console.log("4 amount", amount);
  }
  return amount;
}

console.log(calEleBill(600)); // 5200
console.log(calEleBill(80)); // 5200
