
//q1 ternary operator
let score = 78
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >=60 ? "C" : "Fail"
console.log(grade);

//q2
let loggedIn = true
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Denny"
console.log(access);

// q3
let x = 3
let y = x++
console.log(x,y);    // 4, 3
let p = 2
p++
console.log(p);       // 3

// q4
let n = 5
let result = n++ + ++n
console.log(result);         // 5 + 7 = 12

// q5
let likes = 100;
function likePost(){
    return ++likes
}
console.log(likes)       // 100
console.log(likePost());  // 101   --- calling a function is important
console.log(likes);       //101

//q6
let count = 5
if(count-- === 5){
    console.log("Matched");         //  matched
}else{
    console.log("Not matched");
}

