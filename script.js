// Array of tasks
const arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));

// Container for FORM
const containerOfForm = document.getElementsByClassName("input-task")[0];

// Form element
const formElement = document.getElementsByClassName("form-adding-tasks")[0];

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
  let task = {
    text: inputField.value,
    status: false,
  };
  if (inputField.value != "") {
    arrayOfTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
  }

  formElement.reset(); // reset an input field

  plusButton.style.visibility = "visible";
  containerOfForm.style.display = "none";

  console.log(JSON.parse(localStorage.getItem("tasks")));
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
