// Array :- Array is linear data-structure which stores multiple values in a continuous manner.
// linear ->  elements are accessed using a single index (0, 1, 2, ...)


let arr = new Array(3);

console.log(arr); // [ <3 empty items> ]

arr[0] = 4;
arr[1] = 5;
arr[2] = 6;
arr[3] = 7;
arr[8] = 30;

console.log(arr); // [ 4, 5, 6, 7, <4 empty items>, 30 ]

// note: there is no such thing as fixed length of array in js even after defining it with new Array(n).

//------------------------------
let a = new Array(3);
a.push(100);
console.log(a); // 100 would be pushed after 3 pre-defined index // [ <3 empty items>, 100 ]

//--------------------------------------

let b = new Array(5);

for (let i = 0; i < b.length; i++) {
  b[i] = Number(prompt("enter a value"));
}
console.log(b);

//------------------------------------------
// traversing - going on each value

let c = [10, 20, 30, 40, 50];

let sum = 0;
for (let i = 0; i < c.length; i++) {
  sum += c[i];
}
console.log(sum);

//---------------------------------------------------
// find  max num in an array

const d = [23, 4, 4, 5, 56, 6];

let max = d[0];
for (let i = 1; i < d.length; i++) {
  if (max < d[i]) {
    max = d[i];
  }
}
console.log(max);

// -----------------------------------------
// find 2nd max num

let e = [10, 20, 30, 45, 67, 95, 98, 98];
let max1 = Math.max(e[0], e[1]);
let max2 = Math.min(e[0], e[1]);
for (let i = 0; i < e.length; i++) {
  if (e[i] > max1) {
    max2 = max1;
    max1 = e[i];
  } else if (e[i] > max2 && max1 !== e[i]) {
    max2 = e[i];
  }
}
console.log(max2);

// find 2nd min value

// ------------------------------------------------
// reverse array (with extra space )
function reverse2(){
let f = [10, 20, 30, 40, 50];
let temp = new Array(f.length);

let j = 0;
for (let i = f.length - 1; i >= 0; i--) {
  temp[j] = f[i];
  j++;
}
console.log(temp);
}
reverse2()

// another way to reverse array (better and more optimized than before)

function reverse() {
  let g = [10, 20, 30, 40, 50];
  let i = 0;
  j = g.length - 1;

  while (i != j) {
    // or i < j
    let temp = g[i];
    g[i] = g[j];
    g[j] = temp;
    i++;
    j--;
  }
  console.log(g);
}
reverse();

//---------------------------------------------------
// all 0 on one side(left) and all 1 on other side(right). -> following a 2 pointer theory

// i will always move ahead
// but j will only move when value is swapped

let array = [1, 1, 0, 1, 0, 1, 1, 0, 0];

let i = 0;
let j = 0;

while(i < array.length){   // not working
    if(array[i] === 0){
        let temp = array[i];
        array[i] = array[i];
        array[j] = temp;
        j++
    }
    i++
}
console.log(array);
