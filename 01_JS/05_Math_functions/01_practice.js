// Important math functions and method

//Math.round
// edge case:
console.log(Math.round(3.5));    // 4
console.log(Math.round(-3.5));   // -3


// Math.ceil 
console.log(Math.ceil(5.3));  // 6
// edge case: 
console.log(Math.ceil(-5.2));  // -5    
console.log(Math.ceil(-5.5));  // -5    
console.log(Math.ceil(-5.9));  // -5    


// Math.floor
console.log(Math.floor(5.8));  // 5
// edge case: 
console.log(Math.floor(-5.5));  // -6
console.log(Math.floor(-5.1));  // -6


//4. Math.random()
// Interviewers LOVE asking:
// ✔ Generate a random integer between X and Y
let randomInt = Math.floor(Math.random()*100) + 1
console.log(randomInt);

// ✔ Create OTP / random ID
// let OTP =  Math.floor(Math.random()*1000000) + 1 // why this sometimes print 5 digit - fixed digits not confirmed  
// let OTP =  Math.floor(Math.random()*999999) + 1      // fixed digits not confirmed  
// let OTP =  Math.floor(100000 + Math.random()*99999) 
// // ✔ It DOES always give 6 digits
// But ❌ the range is incorrect — it only covers numbers starting with 1.
// So your OTP will ALWAYS start with 1:

// 100234
// 145678
// 199932
// This is not random enough for real OTP logic.


// let OTP =  Math.floor(900000 + Math.random()*10000n0)   // not good
let OTP = Math.floor(100000 + Math.random() * 900000);
console.log(OTP);

// ✔ Shuffle an array