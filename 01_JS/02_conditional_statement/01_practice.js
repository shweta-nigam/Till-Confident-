// 22 Nov 2025
//note:-
// if block is independent whereas else block is dependent.

//Q1 valid user

const age = Number(prompt("Enter your age"))        // NaN, if it is not a number (non-convertible)
// const age = prompt("Enter your age")            // number and string , both are treated as string
console.log(age);

// if(NaN === age){}             // not good as NaN === NaN is true

if(isNaN(age)){
    console.log("Invalid input");  
}
else if (age >= 18) {
    console.log("You can vote");  
} else {
   console.log("You cannot vote");
}


//Q2 Shop discount
// 0    -  5000     0%
// 5001 -  7000     5%
// 7001 -  9000    10%
// 9001+           20% 

let amount = 10000

// if (amount > 5000) {                          // Good practice is to always start from small amount.
//     console.log("Amount payable", amount - ((amount * 5)/100) )
// } else if(amount > 7000){
//     console.log(`Amount paypal after 10% off ${amount - ((amount * 10)/100)}`)
// } else if(amount > 9000){
//     console.log(`Amount paypal after 20% off ${amount - (amount * 20)/100}`)
// } else {
//     console.log("Amount payable", amount)
// }
// Note:- JavaScript checks conditions from top to bottom, and the first matching condition stops everything else. Therefore start from small range to big.

if (amount < 5000) {
    console.log("Amount payable", amount)
} else if(amount < 7000){
    console.log("Amount payable", amount - ((amount * 5)/100) )
} else if(amount < 9000){
    console.log(`Amount paypal after 10% off ${amount - ((amount * 10)/100)}`)
} else {
    console.log(`Amount paypal after 20% off ${amount - (amount * 20)/100}`)
}

