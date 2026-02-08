// Guess the number

let random = Math.floor(Math.random() * 100) + 1;

// let attempt = 0;
let guess = 0;

while (guess !== random ) {
  guess = Number(prompt("Guess the number"));
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Try again number b/w 1 - 100");
    continue;
  }
//   attempt++;
  if (attempt > 8) {
    console.log("You reached the attempt limit of 8");
  }
  if (guess > random) {
    console.log("Number is too high, try again");
  } else if (guess < random) {
    console.log("Number is too low , try again");
  } else {
    console.log("Congrats 🎉 and number was",random, " and You took ",attempt, "attempt");
    break;
  }
}
if (guess !== random) {
  console.log("Game over! You used all 8 attempts. Number was", random);
}
