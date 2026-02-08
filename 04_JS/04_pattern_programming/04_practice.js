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

// 2. right angle triangle
let n = 5
for(let i = 1; i <= n; i++){
    for(let j = 1; j<= n-i; j++){
        process.stdout.write(" ")
    }
    for(let j = 1; j <=i; j++){
        process.stdout.write("*")
    }
    console.log();
    
}

// 3. x pattern
let n2 = 5

for(let i = 1 ; i<=n2; i++){
    for(let j = 1; j <= n2 ; j++){
        if(i === j || i + j === n2+1){
            process.stdout.write("*")
        }
        else process.stdout.write(" ")
    }
    console.log();
}
// x pattern is only possible when n = odd numbers

// *   *
//  * * 
//   *  
//  * * 
// *   *


// 4. v pattern
let a = 5

for(let i = 1 ; i<= a; i++){
    for(let j = 1; j <= 2*a -1 ; j++){
        if(i === j || i + j === 2*a){
            process.stdout.write("*")
        }
        else process.stdout.write(" ")
    }
    console.log();
}