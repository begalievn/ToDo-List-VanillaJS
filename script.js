let addTask = document.getElementById("add-task");
const inputTask = document.getElementsByClassName("input-task")[0];
const submitButton = document.getElementById("submit-button");
const inputValue = document.getElementById("taskName");
const taskContainer = document.getElementsByClassName("tasks-container")[0];
const cancelButton = document.getElementById("cancel-button");

addTask.addEventListener("click", () => {
  console.log("button is clicked");
  inputTask.style.display = "block";
  addTask.style.visibility = "hidden";
});

submitButton.addEventListener("click", () => {
  let contentOfInput = inputValue.value;
  console.log(contentOfInput);
  const newTask = document.createElement("div");
  newTask.setAttribute("draggable", true);
  newTask.className += "task";
  const newPara = document.createElement("p");
  let textnode = document.createTextNode(contentOfInput);
  newPara.appendChild(textnode);
  const leftBorder = document.createElement("div");
  leftBorder.className += "task-left-border";
  const taskMark = document.createElement("div");
  taskMark.className += "task-mark";
  taskMark.addEventListener("click", () => {
    if (taskMark.classList.contains("task-mark-active")) {
      alert("Drag the task to delete it!");
    }
    taskMark.classList += " task-mark-active";

    console.log("mark is clicked");
  });
  newTask.appendChild(leftBorder);
  newTask.appendChild(newPara);
  newTask.appendChild(taskMark);
  if (contentOfInput != "") {
    taskContainer.appendChild(newTask);
  }
  newTask.setAttribute("id", generateRandomId());
  newTask.setAttribute("ondragend", "deleteTask(event, this.id)");

  addTask.style.visibility = "visible";
  inputTask.style.display = "none";
  inputValue.value = "";
});

inputValue.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    console.log("enter is clicked");
    let contentOfInput = inputValue.value;
    console.log(contentOfInput);
    const newTask = document.createElement("div");
    newTask.setAttribute("draggable", true);
    newTask.className += "task";
    const newPara = document.createElement("p");
    let textnode = document.createTextNode(contentOfInput);
    newPara.appendChild(textnode);
    const leftBorder = document.createElement("div");
    leftBorder.className += "task-left-border";
    const taskMark = document.createElement("div");
    taskMark.className += "task-mark";
    taskMark.addEventListener("click", () => {
      if (taskMark.classList.contains("task-mark-active")) {
        alert("Drag the task to delete it!");
      }
      taskMark.classList += " task-mark-active";

      console.log("mark is clicked");
    });

    newTask.appendChild(leftBorder);
    newTask.appendChild(newPara);
    newTask.appendChild(taskMark);
    if (contentOfInput != "") {
      taskContainer.appendChild(newTask);
    }
    newTask.setAttribute("id", generateRandomId());
    newTask.setAttribute("ondragend", "deleteTask(event, this.id)");

    addTask.style.visibility = "visible";
    inputTask.style.display = "none";
    inputValue.value = "";
  }
});

cancelButton.addEventListener("click", () => {
  inputValue.value = "";
  addTask.style.visibility = "visible";
  inputTask.style.display = "none";
});

const deleteTask = function (event, id) {
  event.preventDefault();
  document.getElementById(id).remove();
};

const output = function () {
  console.log("drag is over");
};

const generateRandomId = function () {
  let id = "task-";
  id += Date.now();
  console.log(id);
  return id;
};
