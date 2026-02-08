// Advance question on array
//1. Left rotation by 1 element.
let arr = [1, 2, 3, 4, 5];
let copy = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = copy;
console.log(arr); // [ 2, 3, 4, 5, 1 ]

//2. right rotation by 1 element
function rightRotation(arr) {
  let copy = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = copy;
  return arr;
}
console.log(rightRotation([1, 2, 3, 4, 5])); // [ 5, 1, 2, 3, 4 ]

//3. left and right rotation by k element.
function rotationByKNum(arr, n) {
  let k = Number(n);
  k = k % arr.length
  for (let j = 0; j < k; j++) {
      let copy = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = copy;
  }
  return arr;
}
console.log(rotationByKNum([1, 2, 3, 4, 5], 3));

// more optimized solution:-
function leftRotByKNum(arr,n){
let temp = new Array(arr.length);
let k = Number(n)
k = k % arr.length

for(let i = 0; i < arr.length; i++){
    temp[i] = arr[(i+k) % arr.length];
}
}

// even more optimized solution:- Block swap reverse algorithm or block reverse swap
let arr2 = [1,2,3,4,5]
let k = 2
k = k% arr2.length;
reverse(0,k-1)
reverse(k,arr2.length -1)
reverse(0,arr2.length -1)
console.log(arr2);

function reverse(i,j){
    while(i<j){
        let temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
        j++;
        j--;
    }
}


