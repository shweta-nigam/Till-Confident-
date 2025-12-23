// 1. left rotation by k (better than before)
function a() {
  let arr = [1, 2, 3, 4, 5];
  let temp = new Array(arr.length);
  let k = 7;
  k = k % arr.length;

  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length];
  }
  console.log(temp);
}
a();
// do right rotation on ur own

//even more efficient way to do the above problem:- (block swap algorithm)
// ------- did not understand this problem ( check and dry run)
function b() {
  let arr = [1, 2, 3, 4, 5];
  let k = 7;
  k = k % arr.length;
  reverse(0, k - 1);
  reverse(k, arr.length - 1);
  reverse(0, arr.length - 1);
  console.log(arr);

  function reverse(i, j) {
    while (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
}

// do right rotation

//2. remove duplicates from sorted array - on leetcode

let removeDuplicates = function (nums) {
  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
    return j;
  }
};
console.log(removeDuplicates([11, 2, 3, 4, 5, 3, 3, 2, 11]));

//3. merge sorted array 

function c() {
  let arr1 = [2, 5, 7];
  let arr2 = [1, 3, 4, 8];
  let merge = new Array(arr1.length + arr2.length);
  let i = (j = k = 0);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merge[k] = arr1[i];
      i++;
      k++;
      //merger[k++] = arr1[i++]           // this line is same as above 3 lines ( post increment)
    } else {
      merge[k++] = arr2[j++];
    }
  }
  while (j < arr2.length) {
    merge[k++] = arr2[j++];
  }
  while (i < arr1.length) {
    merge[k++] = arr1[i++];
  }
  console.log(merge);
}
c();

// h.w.    do merge sorted array on leetcode 

// 4. Best time to buy and sell stocks - leetcode

let maxProfit = function(prices) {
    let maxProfit = 0;
    let min = prices[0]
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min ) min = prices[i]
        let profit = prices[i] - min;
        maxProfit = Math.max(maxProfit, profit)
    }
    return maxProfit
}
console.log(maxProfit([1,2,3,3,8]));

//5. sort the color - leetcode