// filter

let arr = [1,2,3,4,5,6]

const newArr = arr.filter(function(val){
    return true
    // return false                // []
})


console.log(newArr);     //  [ 1, 2, 3, 4, 5, 6 ]

// Insert "Red" and "Blue" at index 1 in this array;

let colors = ["Green", "Yellow"]
colors.splice(1,0,"Red","Blue")            // 0 because no element to remove

console.log(colors);
