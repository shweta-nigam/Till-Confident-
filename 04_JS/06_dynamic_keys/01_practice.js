// dynamic keys   --- 3/12/2025

let key = "username"
let obj = {}
obj[key] = "John doe"
console.log(obj);          // { username: 'John doe' }



let arr = ["one","two", "three"]
let value = [10, 20, 30]
const object = {}
for(let i = 0; i <= arr.length -1 ; i++ ){
    object[arr[i]] = value[i]
}
console.log(object);                // { one: 10, two: 20, three: 30 }



// with for_of loop
let i = 0                                   // manual index
for (const e of arr) {
    object[e] = value[i]
    i++
}
console.log(object);                 // { one: 10, two: 20, three: 30 }
