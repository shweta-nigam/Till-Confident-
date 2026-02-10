// function getTicketPrice(age, isWeekend) {
//   // Your code here

//   let price = 0;
//   if(typeof age !== "number" || age < 0 || Number.isNaN(age)) {
//       return -1;
//     }

//   if (isWeekend) {
//     price += 3;
//   }

//   if (age > 0 && age <= 12) {
//     return `${(price += 8)}`;
//   } else if (age >= 13 && age <= 17) {
//     return ` ${(price += 12)}`;
//   } else if (age >= 18 && age <= 59) {
//     return ` ${(price += 15)}`;
//   } else {
//     return ` ${(price += 10)}`;
//   }
// }
// console.log(getTicketPrice(200, true));

//2
// function getTrafficAction(color) {
//   // Your code here
//   switch (color.toLowerCase()) {
//     case "green":
//       return "Go";
//       break;
//     case "yellow":
//       return "SLOW DOWN";
//       break;
//     case "red":
//       return "STOP";
//       break;
//     case "flashing red":
//       return "STOP AND PROCEED WITH CAUTION";
//       break;
//     default:
//       return "INVALID SIGNAL";
//       break;
//   }
// }
// console.log(getTrafficAction("reDD"));

//3.
// function calculateCoffeePrice(size, type, extras = {}) {
//   // Your code here
//   if (size !== "small" && size !== "medium" && size !== "large") {
//     return -1;
//   }
//   if (
//     type !== "regular" &&
//     type !== "latte" &&
//     type !== "cappuccino" &&
//     type !== "mocha"
//   ) {
//     return -1;
//   }

//   let total = 0;

//   if (size === "small") {
//     total += 3;
//   } else if (size === "medium") {
//     total += 4;
//   } else {
//     total += 5;
//   }

//   if (type === "latte") {
//     total += 1;
//   } else if (type === "cappuccino") {
//     total += 1.5;
//   } else if (type === "mocha") {
//     total += 2;
//   }

//   if (extras.extraShot) {
//     total += 0.75;
//   }
//   if (extras.whippedCream) {
//     total += 0.5;
//   }

//   return +total.toFixed(2);
// }

// console.log(calculateCoffeePrice("small", "latte", { extraShot: true }));

//4.
// function calculateTax(income) {
//   // Your code here

//   if(income <= 0 ){
//     return 0
//   }

//   let tax = 0
//   if(income > 70000){
//     income = income - 70000
//     tax += (30/100)*income
//     income = 70000
//   }
//   if(income > 30000){
//     tax+= (20/100)*(income-30000)
//     income = 30000
//   }
//   if(income > 10000){
//     tax+= (10/100)*(income-10000)
//   }
//   return tax
// }
// console.log(calculateTax(100000));
// console.log(calculateTax(40000));

//5.
// function checkPasswordStrength(password) {
//   // Your code here
//   if (password === " " || password === "") {
//     return "weak";
//   }

//   let strength = 0;

//   if (password.length >= 8) strength++;
//   if (/[A-Z]/.test(password)) strength++;
//   if (/[a-z]/.test(password)) strength++;
//   if (/[0-9]/.test(password)) strength++;
//   if (/[!@#$%^&*()_+-=[]{}|;:,.<>?]/.test(password)) strength++;
//  console.log(strength);
//   switch (strength) {
//     case 0:
//     case 1: return "weak";
//     case 2:
//     case 3:return "medium";
//     case 4:return "strong";
//     case 5:return "very strong";
//   }

// }

// console.log(checkPasswordStrength("red"));
// console.log(checkPasswordStrength("Redblue"));
// console.log(checkPasswordStrength("Redblue9"));
// console.log(checkPasswordStrength("Redblue9$y"));

//7.

// function calculateTip(billAmount, serviceRating) {
//   // Your code here
//   if (
//     billAmount <= 0 ||
//     typeof serviceRating !== "number" ||
//     Number.isNaN(serviceRating)
//   ) {
//     return null;
//   }

//   let tipPercentage = 0;
//   let tipAmount = 0;
//   let totalAmount = 0;

//   if (serviceRating === 1) {
//     tipPercentage = 5;
//   } else if (serviceRating === 2) {
//     tipPercentage = 10;
//   } else if (serviceRating === 3) {
//     tipPercentage = 15;
//   } else if (serviceRating === 4) {
//     tipPercentage = 20;
//   } else if (serviceRating === 5) {
//     tipPercentage = 25;
//   }

//   tipAmount = billAmount * (tipPercentage / 100);
//   totalAmount = billAmount + tipAmount;
//   return {
//     tipPercentage: tipPercentage,
//     tipAmount: +tipAmount.toFixed(2),
//     totalAmount: +totalAmount.toFixed(2),
//   };
// }

// console.log(calculateTip(50, 4));
// console.log(calculateTip(60, 5));

//8.

// function calculateParkingFee(hours, vehicleType) {
//   // Your code here
//   if (hours <= 0 || !Number(hours)) {
//     return -1;
//   }
//   if (
//     typeof vehicleType !== "string" &&
//     (vehicleType !== "car" &&
//       vehicleType !== "motorcycle" &&
//       vehicleType !== "bus")
//   ) {
//     return -1;
//   }

//   hours = Math.ceil(hours)

//   if (vehicleType === "car") {
//     parkingFeeForCar += 5;
//     hours = hours - 1;
//     if (hours > 0) {
//       for (let i = 0; i < hours; i++) {
//         parkingFeeForCar += 3;
//       }
//     }
//      return Math.min(parkingFeeForCar,30)
//   }
  
//   if (vehicleType === "motorcycle") {
//     parkingFeeForMotorcycle += 3;
//     hours = hours - 1;
//     if (hours > 0) {
//       for (let i = 0; i < hours; i++) {
//         parkingFeeForMotorcycle += 2;
//       }
//     }
//      return Math.min(parkingFeeForMotorcycle,18)
//   }
//   if (vehicleType === "bus") {
//     parkingFeeForBus += 10;
//     hours = hours - 1;
//     if (hours > 0) {
//       for (let i = 0; i < hours; i++) {
//         parkingFeeForBus += 7;
//       }
//     }
//     return Math.min(parkingFeeForBus,60)
//   }

// }

//9.



