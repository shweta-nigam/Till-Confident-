const abcd = document.getElementById("abcd");
console.log(abcd); // log does not show draggable tag sometimes
console.dir(abcd); // so use console.dir()

// note: getELementById and getELementsByCLassName is legacy code now.

// querySelectorAll give :- collection of node - an array like structure.


//---------------- 
// ## querySelector() and querySelectorAll
// querySelector("h1")  // to select tag ( here a h1 tag)
// querySelector(".id")  // to select an id 
// querySelector("#class")  // to select a class 

// querySelectorAll("#class")      //  selects all classes and returns array like structure (node collection)


//-----------------------------
let h1 = document.querySelector("h1")
console.dir(h1) 
// check in dev console :- find value of h1 that is "Hello" 
// found :- innerHTML: " Hello ", innerText: "Hello" , outerText: "Hello", textContent: " Hello "

h1.innerText = "Hii"                  // manipulation of h1 tag's text



//--------------------------------------
let a = document.querySelector("a")
// note : when href attribute of a tag does not have anything then it contains current page url.

// a.href = "https://google.com"               // manipulating value of href attribute 

// another way to set attributes:
// setAttribute and getAttribute , removeAttribute

a.setAttribute("href", "https://google.com")
console.log(a.getAttribute("href"));           // https://google.com

// a.removeAttribute("href")              // remove the said attribute
