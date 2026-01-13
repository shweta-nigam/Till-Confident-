//1. What is the DOM? How does it represent the HTML structure?

//ans : A tree like structure.All elements of html structure is node. So each element is node in DOM.
//It represent HTML structure as a tree.

//2. Name the types of nodes in the DOM tree.

//ans. node, element node, text node, comment node

//3. What's the difference between an element node and a text node ?

//ans. with example -  <p> this is content </p>
// 1. Here p tag is the element node and the text inside it is the (children node) text node.
// 2. element node is the actual html tag and text node is the content inside it.
// 3. element node can has children (ex:- <p> hii </b> </p>) , but text node can not have children.

//4. Inspect the following HTML in the browser and identify each node:
//<div>
//      Hello <span>World</span>
//    </div>

//5. What is the difference between getElementById and querySelector?

//ans. getElementById takes only the name of id whereas querySelector is used for multipurpose like id class element and attributes as well.

//6. What does getElementsByCLassName return? Is it an array ?

//ans. It always returns an HTML collection which look quite similar to array.

//7. Use querySelectorAll to select all button with class ".buy-now".

//ans.
let buyNow = document.querySelectorAll(".buy-now");
console.log(buyNow);

//8. Task1 chang the the heading using id.

let heading = document.querySelector("#heading");
console.dir(heading);
heading.innerText = "Do it now!";

//9. Task2 -> Select all <li> elements and print their text using a loop.

let lis = document.querySelectorAll("li");
lis.forEach(function (value) {
  console.log(value.textContent);
});

// or

for (let i = 0; i < lis.length; i++) {
  console.log(lis[i].textContent);
}

//10. What's difference between the innerText, textContent. and innerHtml ?

//ans.
//- innerText and textContent are very similar. prints <li> hi </li> exactly
//- different from other 2 and convert <li> hi </li> in list

//innerHTML → HTML
// textContent → All text    // fastest and latest than innerText
// innerText → Visible text

//11. Which is better to use between innerText and textContent?
// ans.  textContent

//12. Task3 -> Select a paragraph and replace its content with:
// <b>Update </b> by Javascript

let replace = document.querySelector("#replace");
replace.innerHTML = "<b>Update </b> by Javascript";

//13. How do you get the scr of the image using javascript ?

let img = document.querySelector("img");
console.log(img.getAttribute("src"));

//14. What does setAttribute do ?
// - sets the attribute to the element.
img.setAttribute("alt", "image");
console.log(img);

//15. Select a link and update its href to point to https://www.google.com

let link = document.querySelector("a");
link.setAttribute("href", "https://www.google.com"); // not good way as href is already set in html file
// or
link.href = "https://www.google.com"; //  (better way) as href is already set

//16. Add a title attribute to a div dynamically

let div = document.getElementsByTagName("div")[0];
// div.title = "info"        // not possible this way as title is not already set
console.log(div);
div.setAttribute("title", "some info");

//17. Remove the disabled attribute form a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

//18. What does createElement() do? What's returned?

// - createElement() -  creates a html element
// - it return node element/ html element

let h1 = document.createElement("h1");
console.log(h1);

//19. What's the difference between appendChild() and prepend()

// appendChild() - becomes the last child
// prepend() - becomes the first child

//20. Can you remove an element using removeChild() ?

let a = document.querySelector("#remove-child");
// let removedNode = a.removeChild("h2")    // ❌ -> removeChild() expects a Node, not text
let h2 = document.querySelector("h2");
let removedNode = a.removeChild(h2);
console.log(removedNode);
console.log(a);

//21. Task 4 -> Create a new list item <li> New Task </li> and add it to the end of a <ul>.
let ul = document.querySelector(".list");
let newLi = document.createElement("li");
console.log(newLi);
newLi.textContent = " New Task ";
ul.appendChild(newLi);

//22. differences between JavaScript's append() and appendChild() ? (re-learn)

//23. Task 5 -> Create a new image element with a placeholder source and add it at the top of a div.

let img2 = document.createElement("img");
img2.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/Doubs_Source_du_Lison_03.jpg"
);
img2.setAttribute("placeholder", "image");
a.prepend(img2);
console.log(img2);

//24. Task 6 -> Select the first item in a list and delete it form the DOM.

let b = ul.firstElementChild;
console.log(b, "first element of ul");
ul.removeChild(b);

//25. How do you change the background color of an element ?

// element.style.backgroundColor = 'red'

//26. What's the difference between .classList.add()  and .classList.toggle() ?

//27. Task 7 -> Add a highlight to every even item in a list.
let lis2 = document.querySelectorAll("li");
lis2.forEach((li, index) => {
    // if (li % 2 === 0)   //❌ li here is an element and not a number // HTMLElement % 2   // ❌ meaningless
  if (index % 2 === 0) {
    li.classList.add("highlight");
  }
});
console.log("lis2 --", lis2);

// or
for (let i = 0; i < lis2.length; i++) {
  if (i % 2 === 0) {
    lis2[i].classList.add("highlight");
  }
}

//or 

let li = document.querySelectorAll("ul li:nth-child(2n)");   //  selecting only each 2nd element // 2 * n
console.log(li);
li.forEach((li) => li.classList.add("red"))

//28. Toggle a class active on a button when clicked (Hint: use classList.toggle()).