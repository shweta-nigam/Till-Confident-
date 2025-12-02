// Math problem
//1 calculate area and perimeter of the rectangle
//2 generate OTP
//3 area of triangle by heron's formula
//4 circumference of circle

//1. calculate area and perimeter of the rectangle
// ans  perimeter =  2(l+b) , area = lb
let l = 10; let b2 = 20;
const perimeterOfRectangle = (2*(l+b2))
console.log(perimeterOfRectangle);   // 60 per
console.log(l*b2);   // 200 

//2 generate OTP
let OTP = Math.floor(100000 + Math.random()*900000)   // perfect
console.log(OTP);
// note: add 100000 to make otp fixed six digit and to generate unbiased otp. ensures values 100000 → 999999 are equally likely
let OTP2 = Math.floor(99999 + Math.random()*100000)   // generate biased numbers , with 1 being first always.
console.log(OTP2);
let OTP3 = Math.floor(100000 + Math.random()*100000) // biased numbers
console.log(OTP3);
let OTP4 = Math.floor(100000 + Math.random()*99999) // biased numbers
console.log(OTP4);



//3 area of triangle by heron's formula
let a = 5 ; let b = 8; let c = 10;
// first check if it is a triangle
// a+b > c =>  5 + 8 > 10
// c+b > a =>  8 + 10 > 5
// a+c > b =>  5 + 10 > 8

let s = (a+b+c)/2
let areaOfTriangle = Math.sqrt(s*(s-a)*(s-b)*(s-c))
console.log(Number(areaOfTriangle.toFixed(2)));    // 19.81


//4 circumference of circle
// 2*pi*r
let r = 5
console.log(N(2*Math.PI*r).toFixed(3)));   // 31.416
