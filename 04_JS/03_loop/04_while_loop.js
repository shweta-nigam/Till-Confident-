// while loop

// while loop runs as long as condition is not met.
// for loop runs with specified number whereas while loop runs until condition is not satisfied.

// syntaxes:-
// for(start; end; change;)

// while loop:-
// start
//while(end){
//  code
// change
// }

//----------------------------------
//  let ans = prompt("Anything (exist for close)")

//  while(ans !== "exist"){
//     // ans = prompt = ("Anything (exist for close)")
//     console.log(ans);

//  }

// ------------------------------------------------
// sum of digit using while loop

let i = 0;
let sum = 0;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);
// output : 15


// --------------------------------------
// sum of digit using while loop 

// const n = Number(prompt("Enter a number"))
let n = 3456 
if(n>0){
    let sum = 0 
    while(n>0){
        let rem =  n%10;
        sum = sum + rem;
        n = Math.floor(n/10)
    }
    console.log(sum)   // 18
} else {
    console.log("number should be +ve and more than 0");
    
}