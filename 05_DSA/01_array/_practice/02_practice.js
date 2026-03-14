//1. remove duplicates from unsorted array (using new array and array methods)

function removeDuplicates(arr){   // works but solution does not sort.
let newArr = [];
for(let i = 0 ; i < arr.length; i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i])
    }
}
return newArr
}
console.log(removeDuplicates([1,2,3,1,3,5,6,7,7,7,7]));

//1.1 remove duplicates from sorted array.

function removeDuplicates(arr){
    let j = 0;
   for(let i = 0 ; i < arr.length; i++){
    if(arr[i] !== arr[i+1]){
        arr[j] = arr[i];
        j++
    }
}
return j
}
console.log(removeDuplicates([1,1,2,3,3]));           // 3 - unique elements
console.log(removeDuplicates([1,1,2,3,3,5,6,7,7,7,7]));   // 6



// 2. Merge sorted array

function merge(arr1,arr2){                  // not optimized (but solved it!)
    let arr = [...arr1, ...arr2]
    arr.sort((a,b) => a - b)
    return arr
}
console.log(merge([1,3,9,22,],[4,7,8]));    // [1,3,4,7,8,9,22]

// 2.1 Merge sorted array

function merge(arr1,arr2){                 
    let arr = new Array(arr1.length + arr2.length)
    let j = 0;
    let i = 0;
    
}
console.log(merge([1,3,9,22,],[4,7,8])); 
