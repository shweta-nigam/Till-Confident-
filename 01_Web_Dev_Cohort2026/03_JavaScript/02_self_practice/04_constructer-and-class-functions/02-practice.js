// Question 1 — EASY (Class + Constructor Basics)

// 👉 Create a User class:

// Requirements:
// constructor takes name and age

// method introduce() → prints:

// Hi, I am name and I am 22 years old
// Task:
// Create 2 users
// Call introduce()
// 🧠 Twist (important thinking):
// 👉 Convert SAME thing into constructor function version
// ✍️ Expected thinking:
// How constructor assigns values
// How methods are shared (prototype vs class)




class User {
  constructor(name, age) {
    this.name = name;
    this.a = age;
  }

  introduce() {
    console.log(`${this.name} said hello, and age is ${this.a}`);
  }
}

const user1 = new User("Techna", 19);
user1.introduce();
const user2 = new User("Emmy", 35);
user2.introduce();



//same with constructor function


// wrong way -------------------
function User(name, age) {
  this.name = name;
  this.a = age;

  this.introduce = function () {
    console.log(`${this.name} said hello, and age is ${this.a}`);
  };
}

const user3 = new User("Techna", 19);
user3.introduce();
const user4 = new User("Emmy", 35);
user4.introduce();


// attempt 2  -----------------------
function User(name, age) {
  this.name = name;
  this.a = age;
}

User.prototype.introduce = function(){
     console.log(`${this.name} said hello, and age is ${this.a}`);
}

const user5 = new User("Techna", 19);
user5.introduce();
const user6 = new User("Emmy", 35);
user6.introduce();


// think of attempt 1 and correct 2nd one :
// this.introduce → “each student gets their own teacher” ❌
// prototype.introduce → “one teacher teaches all students” ✅