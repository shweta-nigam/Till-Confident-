// new thing about object I get to know

const obj = {
  name: "john",
  age: 23,
};


let a = "name"

console.log(obj.a);   // undefined -  not possible  , looks for key "a"     
console.log(obj[a]);    // name  -   possible in this formate,  looks for key "name"
// obj.a looks for a key literally named "a"


let address = "New York";
console.log(obj.address); //  The key does not exist, not because bracket notation doesn’t work.
console.log(obj[address]); // not  possible 

// Note
//  whatever your write after the . like obj. keyname then js will only find that exact name and not its value.
// unlike in square bracket form = obj[].  
// When js see something like this obj[a] and let a = "name"  then it converts [a] to ["name"]  and get its value. 


// very - vey important thing about [] in objects :- 

let person =  {
name : "Sam",
age: 34,
city: "Delhi"
}

for (const key in person) {
//    console.log(key);           // print all key of person object
//    console.log(person.key);   // ❌ wrong format , as js won't be able to access key of peron object
   console.log(person[key]);   //  ✅  now js will be able to access values of person object
}

// So this is the reason of using [] whe accessing values of key in for-in loop.
// Remember :- after dot in object.(dot) (in this example person.) js looks for exact name as key. 




//----------------------------------
// Object.keys 

let p =  {
name : "Sam",
age: 34,
city: "Delhi"
}

console.log(Object.keys(p));   //returns keys in array format ---- [ 'name', 'age', 'city' ]

//---------------------------------------------
// Object.keys   - returns key- value pair each in array formate, array of arrays

let p2 =  {
name : "Sam",
age: 34,
city: "Delhi"
}

console.log(Object.entries(p2));  // [ [ 'name', 'Sam' ], [ 'age', 34 ], [ 'city', 'Delhi' ] ]


//----------------------------------------------
// Object.assign()   -- copy object


// empty object
let b = Object.assign({},p2);        
console.log(b);                      // { name: 'Sam', age: 34, city: 'Delhi' }

// filled object
let c = Object.assign({id:"893"}, p2)
console.log(c);                        // { id: '893', name: 'Sam', age: 34, city: 'Delhi' }


//---------------------------------------
// optional chaining ?
// - accessing keys carefully 
let p3 =  {
name : "Sam",
age: 34,
state: {
    city:"Delhi",
    pin:110089
}
}

console.log(p3.states?.city);
console.log(p3.states.city);  // would expect error -> ReferenceError: Delhi is not defined
console.log(p3.state?.city);


//----------------------------------------------------
// computed properties

let role = "admin"

let p4 =  {
name : "Sam",
age: 34,
state: {
    city:"Delhi",
    pin:110089
},
[role]:"same"
}

console.log(p4);
