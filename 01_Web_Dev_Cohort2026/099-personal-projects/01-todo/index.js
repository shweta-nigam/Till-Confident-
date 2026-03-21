const addBtn = document.getElementById("add-task");
const tasks = document.getElementById("tasks");
const input = document.querySelector("#inputValue");

let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];

taskArr.forEach((task) => {  // foreach - for side effect- because no need of new array, and we don't care about the return value
  addTask(task);
});


input.addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    e.preventDefault()
    addBtn.click()
  }
})

addBtn.addEventListener("click", function () {
  const inputValue = input.value;
  if (inputValue.trim() === "") return;

  addTask(inputValue);

  taskArr.push(inputValue);
  localStorage.setItem("tasks", JSON.stringify(taskArr));

  input.value = "";
});

function addTask(task) {
  const div = document.createElement("div");
  tasks.appendChild(div);

  const li = document.createElement("li");
  li.textContent = task;
  div.appendChild(li);

  const deleBtn = document.createElement("button");
  deleBtn.textContent = "X";
  div.appendChild(deleBtn);


  deleBtn.addEventListener("click", function () {
    div.remove();

taskArr =  taskArr.filter((t)=> t !== task)
    localStorage.setItem("tasks",JSON.stringify(taskArr))
  });
}

// --- good job doing it on your own
// note: - always remember to store input and it's value in separate variables otherwise you will face problem.
// learn to use local storage -> revise and redo it 
