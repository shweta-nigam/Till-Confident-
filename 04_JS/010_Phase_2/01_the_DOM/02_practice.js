//dynamic DOM manipulation: createELement , appendChild, removeChild, prepend

let h1 = document.createElement("h1");      // this creates blank h1 
h1.textContent = "Hi there!"

console.log(h1);
document.body.append(h1)        // Adds as the last child INSIDE body
document.body.prepend(h1)      // Adds as the first child INSIDE body

//or
document.querySelector("body").append(h1)
document.querySelector("body").prepend(h1)

// note: A DOM node can exist in only one location at a time
// So:
// append / prepend move elements
// They do NOT clone

//---------------------------------------------------------------
let h1 = document.querySelector("h1")
h1.remove()