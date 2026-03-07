//               Basic array methods 


//1 push()
const arr = [1,2,3,4,5]
console.log(arr.push(6))// 6 - length
console.log(arr)   // [1,2,3,4,5,6]

//2 pop()
const arr2 = [1,2,3,4,5]
console.log(arr2.pop())   // 5 -> remove last element and return it
console.log(arr2)           // [1,2,3,4] -> change original


//3 shift()  ---> shift (shifting the big companies from start (top level) )
const arr3 = [1,2,3,4,5]
console.log(arr3.shift())   // 1 -> remove first element and return it
console.log(arr3) // [2,3,4,5] -> change original

//4 unshift() ---> u - undo the shift

const arr4 = [1,2,3,4,5]
console.log(arr4.unshift(0))   // 6 -> return new length
console.log(arr4) // [0,1,2,3,4,5] -> change original

// map()
const arr5 = [1,2,3,4]
const result = arr5.map((i)=> i*2)
console.log(result);   // [2,4,6,8]

// reduce()
const arr6 = [1,2,3,4]
const result2 = arr6.reduce((pv,cv)=> pv + cv,0)
console.log(result2);   // 10

// filter()
const arr7 = [10,20,30,40,50]
const result3 = arr7.filter((e)=> e > 20);
console.log(result3) // [30,40,50]


//forEach()
const arr8 = [1, 2, 3];

// This will NOT mutate the array (primitives passed by value)
arr8.forEach(function(element) {
  element = element * 2; // Changes local copy only
});
console.log(arr8); // Output: [1, 2, 3]

// This WILL mutate the array (explicit assignment using index)
arr8.forEach(function(element, index, theArray) {
  theArray[index] = element * 2; // Modifies the original array
});
console.log(arr8); // Output: [2, 4, 6]
