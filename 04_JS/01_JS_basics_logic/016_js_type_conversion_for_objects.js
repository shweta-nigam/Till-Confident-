// JS Type Conversion Rule for Objects → Primitives
// When JavaScript needs to convert an object to a primitive (string, number, boolean), it follows three steps:
// ✅ Rule #1: Call obj[Symbol.toPrimitive] if it exists
// If the object has a custom method for conversion, JS uses it.

// Example:
let obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return 10;
    if (hint === "string") return "hello";
    return 20;
  }
};

console.log(+obj);        // 10  (number hint)
console.log(`${obj}`);    // "hello" (string hint)
console.log(obj + 5);     // 25 (default hint)

// ❗ If no Symbol.toPrimitive, JS goes to Rule #2
// ✅ Rule #2: Try valueOf()
// JS tries to get a primitive using valueOf().
// If valueOf() returns a primitive → use it
// If valueOf() returns an object → ignore it and go to step 3

// Example:
let obj4 = {
  valueOf() {
    return 42;
  }
};

console.log(Number(obj4));  // 42

// ❗ If valueOf() does NOT return primitive, go to Rule #3
// ✅ Rule #3: Call toString()

// JS then tries to convert object → string using toString().

// Example:
let obj3 = {
  toString() {
    return "100";
  }
};

console.log(Number(obj3));  // 100

// 🚨 If valueOf() AND toString() both fail to give a primitive → TypeError

// Example:
let obj2 = {
  valueOf() { return {}; },
  toString() { return {}; }
};

console.log(Number(obj2));  
// ❌ TypeError: Cannot convert object to primitive

// 🧠 Important: JS uses different hints
// When converting, JS gives one of the following hints:

// Operation	Hint
// String(obj)	"string"
// Template literals ${obj}	"string"
// Numeric operations (+, -, *, etc)	"number"
// obj + ""	"default"
// obj == primitive	"default"
// 🔥 Examples of Built-in Conversions
// ✔ Object → Number
console.log(Number({}));  // NaN


// Why?
// valueOf() returns object → ignored
// toString() returns "[object Object]" → number("[object Object]") → NaN
// ✔ Object → String
console.log(String({}));    // "[object Object]"
console.log(String([1,2])); // "1,2"


// Arrays convert to string via join logic.
// ✔ Object → Boolean
// All objects are truthy

Boolean({})   // true
Boolean([])   // true
Boolean(null) // false

// 📝 Complete Final Summary
// When JS converts object → primitive, it follows this order:

// 1️⃣ If Symbol.toPrimitive exists → USE IT
// 2️⃣ Else, try valueOf()
// 3️⃣ Else, try toString()
// 4️⃣ If still not primitive → throw TypeError

// This is called:

// "OrdinaryToPrimitive algorithm" (ECMAScript spec)