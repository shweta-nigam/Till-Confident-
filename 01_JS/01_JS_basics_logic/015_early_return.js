// early return pattern
//q1
function grade(score) {
  if (score >= 90 && score > 89) return "A";
  else if (score >= 80 && score > 79) return "B";
  else if (score >= 70 && score > 59) return "C";
  else if (score >= 60 && score > 49) return "D";
  else if (score >= 50 && score > 33) return "E";
  return "Fail";
}
console.log(grade(6));

//q2
function rockPaperScissor(user, computer) {
  if (user === computer) return "Draw";
  else if (user === "rock" && computer === "scissor") return "User won";
  else if (user === "scissor" && computer === "paper") return "User won";
  else if (user === "paper" && computer === "rock") return "User won";
  return "Computer won";
}

console.log(rockPaperScissor("paper", "scissor"));
