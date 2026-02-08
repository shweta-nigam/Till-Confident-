// for loop 

// simple for loop 
// 30-300
for(let i = 30; i <301; i++){
    console.log(i);  
}

// 100 - 1
for(let i = 100; i > 0; i--){
    console.log(i)
}

//----------------------------------------
// printing one value extra without changing loop

// print 11
let i = 1
for (; i <= 10; i++) {
 console.log(i)   
}
console.log(i + " fail");    // here i = 11 because of i++ increment after printing i = 10       
// 👉 i++ happens AFTER the loop body finishes each time.


// ------------------------

// a valid code but infinite loop

// for (let i = 0; i <= 10;) {
//  console.log(i)   
// }

// for (let i = 0) {
//  console.log(i)   
// }

// for (;;) {                        // two semi-colon is makes loop valid.
//  console.log("hello")   
// }

