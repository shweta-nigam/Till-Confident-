//q1 sum of each digits using while loop

let sumOfEachDigit = function (n) {
  let sum = 0;

  while (n > 0) {
    let rem = n % 10;
    sum += rem;
    n = Math.floor(n/10)
  }
  return sum;
};

console.log(sumOfEachDigit(2345));

//-------------------------
//
