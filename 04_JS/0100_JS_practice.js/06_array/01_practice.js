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
console.log(max2nd([10, 55, 16, 100, 2, 98]));

// again handling edge cases
function max2nd(arr) {
  if (arr.length === 0 || arr.length === 1)
    return `array is empty or contain only one element!`;
  if (arr.length === 2 && arr[0] === arr[1])
    return `elements should be different!`;
  let max1 = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    // i = 2 as arr[0] and arr[1] are already handled.
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2 && arr[i] !== max1) {
      max2 = arr[i];
    }
  }
  if (max1 === max2) {
    return `array elements can not be same!`;
  }
  return max2;
}
console.log(max2nd([]));
console.log(max2nd([5]));
console.log(max2nd([5, 5]));
console.log(max2nd([5, 5, 5, 5, 5]));

//5. reverse array (with push method and new array )  -
function reverse(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverse([1, 2, 3, 4, 5]));

//5.1 reverse array (with extra space ) - better than before
function reverse2(arr) {
  let newArr = new Array(arr.length);
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr[j] = arr[i];
    j++;
  }
  return newArr;
}
console.log(reverse2([1, 2, 3, 4, 5]));

//5.2 reverse array (in place-reversal) -even better than before

function reverse3(arr) {
  // - wrong - try again
  let i = 0;
  let j = arr.length - 1;
  let copy = arr[i];
  while (j >= 0) {
    arr[i] = arr[j];
    i++;
    j--;
  }
  arr[arr.length - 1] = copy;
  return arr;
}

// try again
function reverse3_1(arr) {
  let j = 0;

  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
    j++;
  }
  return arr;
}
console.log(reverse3_1([1, 2, 4, 5]));

//6. all 0 on one side(left) and all 1 on other side(right). -> following a 2 pointer theory

// failed attempt -
function organize(arr) {
  let newArr = [];
  let j = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr[j] = arr[i];
    }
    j++;
  }
  return newArr;
}
console.log(organize([1, 1, 0, 1, 0, 1, 1, 0, 0]));
// output:  [ <2 empty items>, 0, <1 empty item>, 0, <2 empty items>, 0, 0 ]
// -- this is because j keep increasing even when i != 0 ,therefor js leave those as empty places.

// attempt 2
function organize2(arr) {
  // not optimized but I at least figure out the solution.😉
  let newArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr[j] = arr[i];
      j++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      newArr[j] = arr[i];
      j++;
    }
  }

  return newArr;
}
console.log(organize2([1, 1, 0, 1, 0, 1, 1, 0, 0]));
// [  0, 0, 0, 0, 1, 1, 1, 1, 1]
// Note:-
// --- Sparse arrays happen when indexes are skipped
// --- Destination index (j) must be controlled independently
// --- Correct logic comes before optimization!

//6.1 all 0 on one side(left) and all 1 on other side(right). -> following a 2 pointer theory

function organize3(arr) {
  // good job!
  let L = 0;
  let R = arr.length - 1;

  while (R > L) {
    if (arr[L] === 0) {
      L++;
    } else if (arr[R] === 1) {
      R--;
    } else if (arr[L] === 1 && arr[R] === 0) {
      let temp = arr[L];
      arr[L] = arr[R];
      arr[R] = temp;
      R--;
      L++;
    }
  }
  return arr;
}
console.log(organize3([1, 1, 0, 1, 0, 1, 1, 0, 0]));

// Note:-
// --- Assignment ≠ swap  ->  and arr[L] = arr[R] is assignment and not swap!

// 💡 Big milestone
// If you can solve this problem correctly, you can now handle:
// partition problems
// Dutch National Flag (0-1-2)
// move negatives to one side
// segregate even/odd
// reverse arrays in-place
