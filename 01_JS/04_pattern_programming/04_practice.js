//1 print right angle triangle of characters
// A
// A B
// A B C
// A B C D

function chRightTri(n) {
  for (let i = 1; i <= n; i++) {
    let ascii = 65;
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(ascii) + " ");
      ascii++;
    }

    console.log();
  }
}
chRightTri(4);

//
for (let i = 1; i <= 5; i++) {
  let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ascii) + " ");
    ascii++;
  }

  console.log();
}
