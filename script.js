// Array of tasks
const arrayOfTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Container for FORM
const containerOfForm = document.getElementsByClassName("input-task")[0];

// Form element
const formElement = document.getElementsByClassName("form-adding-tasks")[0];

// Unordered List Element
const ulElement = document.getElementsByClassName("tasks-ul")[0];

/* Plus Button to show Input field */
const plusButton = document.getElementById("plus-button");
// PlusButton event listener
plusButton.addEventListener("click", function () {
  containerOfForm.style.display = "block";
  this.style.visibility = "hidden";
});

/* ADDING A TASK */
// Input field
const inputField = document.getElementById("taskName");

/* ADD button  */
const addButton = document.getElementById("submit-button");
// add button event listener
addButton.addEventListener("click", function (e) {
  e.preventDefault();
  let idOfTask = assignRandomId();
  let task = {
    text: inputField.value,
    status: false,
    id: idOfTask,
  };
  if (inputField.value != "") {
    arrayOfTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
  }

  formElement.reset(); // reset an input field

  // To hide form container and show plus button
  plusButton.style.visibility = "visible";
  containerOfForm.style.display = "none";

  console.log(JSON.parse(localStorage.getItem("tasks")));

  // Display tasks on the screen ulElement
  displayTasks(arrayOfTasks, ulElement);
});

/* CANCEL button */
const cancelButton = document.getElementById("cancel-button");
// cancel button event listener
cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem("tasks"))); // to check if localStorage is storing tasks
  containerOfForm.style.display = "none";
  plusButton.style.visibility = "visible";
});

// Function to DISPLAY tasks on the screen
function displayTasks(tasks, placeToDisplay) {
  placeToDisplay.innerHTML = tasks
    .map((task) => {
      return `
      <li id="${task.id}" class="li-task">
        <p onclick={taskDone(this)} class="${
          task.status ? "paragraph-linethrough" : ""
        }" >${task.text}</p>
        <div class="li-task__buttons-div">
          <button onclick="editButton(this)">Edit</button>
          <button onclick="deleteButton(this)">Delete</button>
        </div>
       
      </li>
    `;
    })
    .join(" ");
  console.log("display is activated");
}

/* Display tasks on the screen ulElement */
displayTasks(arrayOfTasks, ulElement);

/* Edit button functionality */
function editButton(element) {}

/* Delete button functionality */
function deleteButton(element) {
  const liElement = element.parentElement.parentElement;
  const indexOfCurrentTask = findIndexOfTaskInArray(liElement);
  arrayOfTasks.splice(indexOfCurrentTask, 1);
  displayTasks(arrayOfTasks, ulElement);
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

/* Task done functionality */
function taskDone(element) {
  const liElement = element.parentElement;
  const indexOfCurrentTask = findIndexOfTaskInArray(liElement);
  // Here we have to change the status of the task
  arrayOfTasks[indexOfCurrentTask].status = arrayOfTasks[indexOfCurrentTask]
    .status
    ? false
    : true;
  displayTasks(arrayOfTasks, ulElement);
  localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

/* Add a unique ID to the tasks */
function assignRandomId() {
  return "id" + Date.now();
}

/* Find an index of Task in the array */
function findIndexOfTaskInArray(element) {
  const idOfCurrentTask = element.id;
  let indexOfTaskInArray = arrayOfTasks.findIndex(
    (task) => task.id === idOfCurrentTask
  );
  return indexOfTaskInArray;
}
