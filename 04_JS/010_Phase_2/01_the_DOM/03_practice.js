// css with js 

// let h1 = document.querySelector("h1").style.color = "purple"  
// let h1 = document.querySelector("h1").style.fontFamily =  "sans-serif"

//-----------------------------------------------------
// note:
// whenever you want to apply a style or other thing then instead of memorizing the properties name, better search 
//   for it in console.dir() or google it. 


//-----------------------------------------------------

// apply and remove class name ----------------------

const h1 = document.querySelector("h1")
console.dir(h1);                          //search for class name - className ans classList
h1.classList.add("bg")    // add class
h1.classList.add("col")   // remove class
h1.classList.toggle("bg")       // if present then remove class , if not-present then add it.

//----------------------------------------------

