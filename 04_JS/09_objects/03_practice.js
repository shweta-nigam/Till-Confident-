// Q1 Given a dynamic key let key = "age" , how will you access user[key]?

// ans
let key = "age";
const user = {
    name:"sam",
      age: 22
}
console.log(user[key]);    // 22

// Q2 Destructure the key "first-name" as a variable called firstName.

const person = {
    "first-name": "Krabby"
}

//  let {first-name} = person             // not allowed
//  let {"first-name"} = person           // not allowed
//  let {["first-name"]} = person         // not allowed

let {"first-name": firstName} = person


//Q3 Use Object.entries() to print all key-value paris as:
// title : Javascript
// duration : 4 week

const course = {
    title :"Javascript",
    duration: "4 weeks"
}

console.log(Object.entries(course));
//  [ [ 'title', 'Javascript' ], [ 'duration', '4 weeks' ] ]

Object.entries(course).forEach((val) => console.log(val[0] + ": " + val[1]))


// note: nested objects do not deep copy they just passed as reference in spread operator.