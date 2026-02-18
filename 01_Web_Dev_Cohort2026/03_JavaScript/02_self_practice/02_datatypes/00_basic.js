function getChaiOrderLength(order) {
  // Your code here
  if(typeof order !== "string"){
    return -1
  }
 return order.trim().length
}

console.log(getChaiOrderLength("   chai"));

export function shoutChaiOrder(order) {
  // Your code here
  if(typeof order !== "string" || order.trim() === ""){
    return ""
  }
 return order.trim().toUpperCase()
}
console.log(shoutChaiOrder("chai   "));


// 3
export function makeRangoliBorder(char, length) {
  // Your code here
    if(typeof char !== "string" || typeof length !== "number" || length <= 0){
    return ""
  }
  const border = char.repeat(length)
 return border.slice(0,length)
}
console.log(makeRangoliBorder("#",5));
//4
function formatBill(items) {
  // Your code here
    if(!Array.isArray(items) || items.length === 0){
    return ""
  }
  
 return items.map((i) =>
     `${i.name} X ${i.qty}= ${i.qty * i.price}`
  )
  .join("\n")
}

console.log(formatBill([{name:"Atta",price:40,qty:2}]))
//  => "Atta x 2 = Rs.80"

// must pratice again -----> 
/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search if(karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  // Your code here
}

export function getThaliStats(thalis) {
  // Your code here
}

export function searchThaliMenu(thalis, query) {
  // Your code here
}

export function generateThaliReceipt(customerName, thalis) {
  // Your code here
  
}
