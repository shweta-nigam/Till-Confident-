// reverse of number
let n = 2341;
if (n > 0) {
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  console.log(rev);
} else {
  console.log("n should be +ve and more than 0");
}

//------------------------------------
// strong number
// A strong number is a positive integer where the sum of the factorials of its individual digits equals the number itself. For example, 145 is a strong number because 1!+4!+5! = 1+24+120 = 145.

let num = 145;
if (num > 0) {
  let sum = 0;
  let copy = num;
  while (num > 0) {
    let rem = num % 10;
    let fact = 1;
    for (let i = 1; i <= rem; i++) {
      fact *= i;
    }
    sum += fact;
    num = Math.floor(num / 10);
  }
  if (copy === sum) {
    console.log("strong");
  } else {
    console.log("not strong");
  }
} else {
  console.log("num should be +ve and more than 0");
}
console.log(num);
