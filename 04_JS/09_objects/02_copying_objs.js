// 
let p =  {
name : "Sam",
age: 34,
address:{
    state:{
        city: "Delhi",
        pin: 110072
    },
}
}

let obj = {...p}
console.log(obj);

p.address.state.city = "Mumbai"
console.log(p);   //  address: { state: { city: 'Mumbai', pin: 110072 } }
console.log(obj); // address: { state: { city: 'Mumbai', pin: 110072 } }  



p.age = 44
console.log(p);    //  age: 44,
console.log(obj); //   age: 34,

// so spread operator is not good to copy deep nested objects as they are saves by reference.

// ---------------------------------------------------------------------
// deep copy

let p2 =  {
name : "Sam",
age: 34,
address:{
    state:{
        city: "Delhi",
        pin: 110072
    },
}
}

let a = JSON.stringify(p2)
console.log(a);            // {"name":"Sam","age":34,"address":{"state":{"city":"Delhi","pin":110072}}}

let c = JSON.parse(a)   // coverts to real form from string
console.log(c);         // 

// Now even when any nested value is changed it will not change the real object. As reference address link is
// totally broken and new reference address is made for copied object.

c.address.state.city = "Mumbai"

console.log(c);   //  address: { state: { city: 'Mumbai', pin: 110072 } }
console.log(p2);  //  address: { state: { city: 'Delhi', pin: 110072 } }
 



