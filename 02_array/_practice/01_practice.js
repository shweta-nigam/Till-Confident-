// 1. left rotation by 1 element 
function leftRotation(arr){
let first = arr[0]
for(let i = 0 ; i < arr.length -1  ; i++){
    arr[i] = arr[i+1]
}
arr[arr.length -1] = first
return arr
}
console.log(leftRotation([1,2,3,4,5]));

// 2. left rotation by k element
function leftRotationByKNum(arr,k){
    let count = 0
    k = k % arr.length
    for(let i = 1; i <= k ; i++){
        let first = arr[0]
        for(let j = 0; j < arr.length-1; j++ ){
            arr[j] = arr[j + 1]
        }
        arr[arr.length -1] = first
        count++
    }
    
    console.log( "count", count++);   // 4 times
    return arr
}
console.log(leftRotationByKNum([1,2,3,4,5],9));


// 3. left rotation by k element without another loop but with new array
function leftRotationByKNum(arr,k){
 k = k % arr.length
 let first = arr[0]
 let temp = new Array(arr.length)
 for(let i = 0; i < arr.length; i++){
    temp[i] = arr[i+1]
 }
 arr[arr.length -1] = first
 return arr
}

console.log(leftRotationByKNum([1,2,3,4,5], 3));
// note:- Rotation is index math, not movement.