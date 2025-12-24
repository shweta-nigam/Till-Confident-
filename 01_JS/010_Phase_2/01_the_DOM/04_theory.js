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
let buyNow = document.querySelectorAll(".buy-now")
console.log(buyNow);

//8. Task1 chang the the heading using id.

let heading = document.querySelector("#heading");
console.dir(heading);
heading.innerText = "Do it now!"

//9. Task2 Select all <li> elements ans print their text using a loop.

let lis = document.querySelectorAll("li")
lis.forEach(function (value){
    console.log(value.textContent)
})