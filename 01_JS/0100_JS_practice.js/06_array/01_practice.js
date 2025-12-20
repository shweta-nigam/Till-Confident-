// 19th dec 2025
//1. make array using prompt and new Array();

let arr = [];
for (let i = 0; i < 5; i++) {
  let n = Number(prompt("Enter a number"));
  arr[i] = n;
}
console.log(arr);

//2. sum the numbers of array
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sum([20, 30, 40, 60])); // 150

//3. find the max number in an array

function maxNum(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxNum([45, 67, 89, 98, 23, 14])); // 98

// 4. find 2nd max num in an array

function max2nd(arr) {
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] !== max1) {
      max2 = arr[i];
    }
  }
  return max2;
}
console.log(max2nd([10,55, 16, 100, 2,98]));



// again handling edge cases 
function max2nd(arr) {
if(arr.length === 0 || arr.length === 1) return `array is empty or contain only one element!`;
if(arr.length === 2 && arr[0] === arr[1]) return `elements should be different!`
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {  // i = 2 as arr[0] and arr[1] are already handled.
    if (arr[i] > max1 ) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] !== max1) {
      max2 = arr[i];
    }
  }
  if(max1 === max2) {
        return `array elements can not be same!`
    }
  return max2;
}
console.log(max2nd([]));
console.log(max2nd([5]));
console.log(max2nd([5,5]));
console.log(max2nd([5,5,5,5,5]));

//5. reverse array (with push method and new array )  - 
function reverse(arr){
let newArr = [];
for(let i = arr.length-1; i >= 0; i--){
    newArr.push(arr[i])
}
return newArr
}
console.log(reverse([1,2,3,4,5]));

//5.1 reverse array (with extra space ) - better than before
function reverse2(arr){
    let newArr = new Array(arr.length);
    let j = 0;
    for(let i = arr.length -1; i >=0; i--){
        newArr[j] = arr[i] ;
        j++
    }
    return newArr
}
console.log(reverse2([1,2,3,4,5]));

//5.2 reverse array (in place-reversal) -even better than before

function reverse3(arr){  // - wrong - try again
    let i = 0;
    let j = arr.length - 1
    let copy = arr[i]
    while(j>=0){
        arr[i] = arr[j];
        i++;
        j--;
    }
    arr[arr.length-1] = copy;
    return arr
}

console.log(reverse3([1,2,4,5]));


//6. all 0 on one side(left) and all 1 on other side(right). -> following a 2 pointer theory

function organize(arr){
let newArr = []
    for(i = 0; i < arr.length; i++){
        if(arr[i] === 0){

        }
    }
}
console.log(organize([1, 1, 0, 1, 0, 1, 1, 0, 0]));
