// 1. left rotation by 1 element

function leftRotation(arr){
    let first = arr[0]
for(let i = 1; i < arr.length; i++){
    arr[i-1] = arr[i]
    console.log(arr);
    
}
arr[arr.length -1] = first
return arr
}
console.log(leftRotation([1,2,3,4,5]));

//note:- swap is different from rotation! 
// output :-
// [ 2, 2, 3, 4, 5 ]
// [ 2, 3, 3, 4, 5 ]
// [ 2, 3, 4, 4, 5 ]
// [ 2, 3, 4, 5, 5 ]
// ------------ so final arr is -> [ 2, 3, 4, 5, 1 ]

// for future :- These insights apply to:
// right rotation
// rotation by k
// sliding window problems
// in-place array manipulation


// 2. right rotation by 1
function rightRotation(arr){
    let last = arr[arr.length -1]
    for(let i = arr.length -1; i > 0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = last;
    return arr
}
console.log(rightRotation([1,2,3,4,5]));


// 