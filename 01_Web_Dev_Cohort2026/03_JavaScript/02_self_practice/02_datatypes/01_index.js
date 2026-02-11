// //1.
// function maskAadhaar(aadhaarNumber) {
//   // Your code here
//   if(typeof aadhaarNumber !== "string" || aadhaarNumber.length !== 12 || !/^[0-9]{12}$/.test(aadhaarNumber)){
//     return "INVALID";
//   }
// let lastDigits = aadhaarNumber.slice(8,12)   // slice(-4)
// console.log(lastDigits);

// let x = "XXXX-XXXX-"
// return x+lastDigits

// }

//2
function formatChaiMenu(items) {
  // Your code here

  if (!Array.isArray(items) || items.length === 0) {
    return "";
  }
  const result = items.filter(
    (item) =>
      typeof item.name === "string" &&
      item.name.trim() !== "" &&
      typeof item.price === "number" &&
      item.price > 0
      
  ).map(
    (item)=>  `${item.name.toUpperCase()} - RS.${item.price}`
    )

    return result.join(" | ")
}



console.log(
  formatChaiMenu([
    { name: "masala chai", price: 15 },
    { name: "samosa", price: 12 },
    { name: "pakoda", price: 10 },
  ]),
);
// =>  // => "MASALA CHAI - Rs.15 | SAMOSA - Rs.12"
