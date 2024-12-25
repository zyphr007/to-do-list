let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let sec2 = document.getElementById("section2");
let inputBtn = document.querySelector(".section1 button");

function addTask() {
  let newTask = document.createElement("li");
  newTask.textContent = taskInput.value;
  taskList.appendChild(newTask);
  taskInput.value = "";
  sec2.style.display = "block";

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.onclick = function () {
    taskList.removeChild(newTask);
  };
  newTask.appendChild(deleteButton);
}

// ON CLICK BUTTON
function addAfterClick() {
  if (taskInput.value.trim() !== "") {
    addTask();
  }
}

// ON PRESSING ENTER
function addAfterKeypress(event) {
  if (taskInput.value.trim() !== "" && event.key === "Enter") {
    addTask();
  }
}

inputBtn.addEventListener("click", addAfterClick);
taskInput.addEventListener("keydown", addAfterKeypress);
