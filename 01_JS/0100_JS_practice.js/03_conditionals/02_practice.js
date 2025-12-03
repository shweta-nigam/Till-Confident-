//q1 INR denomination

function inrDenomination(amount) {
  if (amount >= 500) {
    console.log(`500 notes: ${Math.floor(amount / 500)}`);
    amount = amount % 500;
  }
  if (amount >= 200 && amount < 500) {
    console.log(`200 notes: ${Math.floor(amount / 200)}`);
    amount %= 200;
  }
  if (amount >= 100 && amount < 200) {
    console.log(`100 notes: ${Math.floor(amount / 100)}`);
    amount %= 100;
  }
  if (amount >= 50 && amount < 100) {
    console.log(`50 notes: ${Math.floor(amount / 50)}`);
    amount %= 50;
  }
  if (amount >= 20 && amount < 50) {
    console.log(`20 notes: ${Math.floor(amount / 20)}`);
    amount %= 20;
  }
  if (amount >= 10 && amount < 20) {
    console.log(`10 notes: ${Math.floor(amount / 10)}`);
    amount %= 10;
  }
  if (amount >= 5 && amount < 10) {
    console.log(`5 coins: ${Math.floor(amount / 5)}`);
    amount %= 5;
  }
  if (amount >= 2 && amount < 5) {
    console.log(`2 coins: ${Math.floor(amount / 2)}`);
    amount %= 2;
  }
  if (amount === 1) {
    console.log(`1 coins: ${amount}`);
  }
}

inrDenomination(4895);

// How do I use return keyword and still able to calculate amount%=500(ex) later ?
// How to make it more efficient ?

//------------------------------------------------
// efficient  and clear solution using loop

function inrDenomination2(amount) {
  const denoms = [500, 200, 100, 50, 20, 10, 5, 2, 1];
  const result = {};

  for (const d of denoms) {
    if (amount >= d) {
      result[d] = Math.floor(amount / d);
      amount %= d;
    }
  }

  return result
}

console.log(inrDenomination2(4895))


// ------------
// understanding basics

let d = 500
let result = {}
result[d] = 9   // this creates { "500": 9 }
console.log(result);   // ✅


// let outcome = result[d] = 9  //  ❌
// console.log(outcome);  // 9
// console.log(result[d]=9);  // 9

