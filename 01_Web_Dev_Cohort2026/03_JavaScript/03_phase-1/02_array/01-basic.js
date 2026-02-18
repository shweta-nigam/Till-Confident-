// array
//Basic methods (worth noting)

//1. push - add element at the end - returns new length and not the new array - change original !
const arr = [1, 2, 3];
console.log(arr.push(4)); // 4 - new length

//2. pop - remove the last element - return removed element - change original
const arr2 = [1, 2, 3];
console.log(arr2.pop()); // 3

//3. shift() - remove first element - return removed element - change original

//4. unshift() - add element at the start - return new length - change original
let arr3 = [2, 3];
let result = arr3.unshift(1); // 3 new length

//5. slice(include, exclude) - return desired part of array - does not modify original

//6. splice(start, deleteCount, replace-with) - returns deleted elements IN ARRAY - by removing/adding - modify original
let a = [1, 2, 3, 4, 5];
console.log(a.splice(2, 3, 400)); // [3,4,5]
console.log(a); // [1,2,400]

// 7. map(callback) - runs callback for each element - return new modified array - does not modify original
let arr4 = [1, 2, 3];
let result4 = arr4.map((num) => num * 2);
console.log(result4);

//8. filter(callback) - runs callback for each element - returns new modified array for true elements  -  does not modify original
let arr5 = [5, 10, 15, 20];
let result5 = arr5.filter((num) => num > 10);
console.log(result5);

//9. reduce(callback,initializer) runs callback for each element, takes a initializer and if not present it default to first element and start from 2nd element - reduces the number to one figure and returns it - does not mutate original array

// acc (accumulator) stores the result of previous iteration
// num (currentValue) is the current element
// initialValue is optional
// Returns a single value

//10. forEach runs callback for each condition but in does not return anything (in other word undefined) - It only modifies it if you write code inside it that changes it. - async - await , break and continue do not work with it unlike with map - it is not chainable as it gives undefined.
// -> Usually used for side effects (like logging, updating variables)

console.log([2, 4, 6].forEach((num, i) => ([2, 4, 6][i] = num * 10))); // return -  undefined

// changeable
let b = [10, 20, 30];
b.forEach((num, index) => {
  b[index] = num * 2; // this modifies
});
console.log(b);

//11. find(callback) - return first value which meats the condition,returns undefined if nothing matches - does not modifies original

// 12. includes(value) -  returns true for matched value otherwise false - does not mutates original

// 13. indexof(value) - return the index of specified (first found) element otherwise -1 - does not mutates original

//14. reverse()    - reverse array in place - modify original
let arr6 = [1, 2, 3];
let result6 = arr6.reverse();
console.log(arr6); // arr6 becomes - [3,2,1]

// 15. sort() - sort the array elements as string (converts element to string then Sorts them lexicographically (dictionary order)) - return sorted array - modify original

// 16. map() - map always return array of same length , so if nothing is returned then undefined is returned.

let arr7 = [1, 2, 3];
let result7 = arr7.map((num) => {
  if (num % 2 === 0) return num;
});
console.log(result7); // [undefined, 2, undefined]


const c = [2, 4, 6];
// const d = c.map(n => return  n*2)        // wrong syntax as without {} it is implicit return
const d = c.map((n) => {
  n * 2;
}); //[ undefined, undefined, undefined ]  - because of {} it is now explicit return, nothing return = same length of array with undefined elements
console.log(d);


