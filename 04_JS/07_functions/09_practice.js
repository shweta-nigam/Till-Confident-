// Q1 Write a BMI calculator
// w - kg , h - m
function bmi (w,h){
    let bmi = (w/(h*h)).toFixed(1)
   if(bmi < 18.5) return `BMI is ${bmi}, Underweight`;
   else if (bmi > 18.5 && bmi < 24.9) return `BMI is ${bmi}, Healthy`
   else return `BMI is ${bmi}, Overweight`
}
console.log(bmi(30,1.51));

//Q2 Create a reusable discount calculator (HOF -> high order function)

function disCal(dis){
    return function (price){
        return `Discounted price ${price - (price * (dis/100))}`
    }
}
// price = 1000 , discount 10%
let a = disCal(10)
console.log(a(1000))

// price = 3000 , discount 20%
let b = disCal(20)
console.log(b(3000));

// Note: It is a closure as inner function uses the variable of outer function ( dis in this solution).
// Where is closure happening ?     return ----- dis     in inner function 
// Each call creates its own private environment:
// a remembers dis = 10
// b remembers dis = 20
// This can only happen because of closures. 

// Q3 counter with closures

function counter(){
    let count = 0
    return function (){
        count++
        return count
    }
}

let one = counter()
console.log(one());   // 1
console.log(one());   // 2
console.log(one());   // 3

console.log(one);        // function (anonymous)

let two = counter()
console.log(two());  // 1

console.log(one());  // 4

// to be good at closures - solve more questions

