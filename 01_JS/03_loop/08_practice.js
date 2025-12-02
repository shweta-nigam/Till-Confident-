//q1 print event number 1-20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// q2 print odd number
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// q3 print table of 5
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

//q4
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//q5 print numbers from 1-50 that are divisible by 3
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) console.log(i);
}

//----------------------------------------