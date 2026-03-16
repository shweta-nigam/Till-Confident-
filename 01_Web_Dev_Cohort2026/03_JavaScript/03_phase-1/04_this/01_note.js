// --- this keyword in JS

//1. ultimate rule - **********************************************************************************
// when you see this keyword do two things:
// step 1: what type of function is this - arrow fun or normal fun
// step 2a: if it is normal function then see -> who called it.
// step 2b: if it is arrow function then -> Look at where the function was defined (scope).
// *****************************************************************************************************



// Normal function → check who called it
// Arrow function → check where it was created




//2. misconception of "this"
// People think arrow functions look for: object
// But they actually look for: nearest function scope
// Then they copy that function’s this.


//3. important take:-
// Arrow functions take this from their surrounding scope.
// Objects do not create scope in JavaScript. 
// therefore nested normal and arrow function behave different in object! 


//4. 
// Whenever you see an arrow function inside an object, ask:
// "Is there a normal function above it?"
// If no, then:
// this = global


//5.

// summary
// by - some else->
// 1) this kaha run ho raha hai, browser me run hoga to to window obj dega and agr kisi environment me run hoga to obj.
// 2)type of this  is obj , if use "use strict" then undefined will be.
// 3)normal function ke under agr this use krege hai to vo variable ka reference leta hai.
// 4)normal function me under agr nested regural hn hai tb this ke pass variable ka access nhi hoga.
// 5)But if there is an arrow fn inside normalfn then, this variable ka reference lega.
// 6)detached method me bhi this variable ka refernce nhi leta.
