



function createTaskItem(text) {
    // Create a new <li> element
    const newTaskItem = document.createElement("li");

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button"); // Add delete button style

    const textSpan = document.createElement("span");
  textSpan.textContent = text;

  newTaskItem.appendChild(textSpan);
    // Add a click event listener to the delete button
    deleteButton.addEventListener("click", function() {
      // Remove the parent <li> element when the delete button is clicked
      newTaskItem.remove();
    });

    // Set the text content of the <li> element to the input value
    newTaskItem.textContent = text;

    // Append the delete button to the <li> element
    newTaskItem.appendChild(deleteButton);

    // Add a click event listener to the <li> element to toggle the "done" class
    newTaskItem.addEventListener("click", function() {
      newTaskItem.classList.toggle("done");
    });

    return newTaskItem;
  }

  // Select the input element and button
  const inputElement = document.getElementById("todoInput");
  const addButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  // Add a click event listener to the button
  addButton.addEventListener("click", function() {
    // Get the value of the input field
    const inputValue = inputElement.value.trim();

    // Check if the input is not empty
    if (inputValue !== "") {
      // Create a new task item
      const newTaskItem = createTaskItem(inputValue);

      // Append the new task item to the task list
      taskList.appendChild(newTaskItem);

      // Clear the input field
      inputElement.value = "";
    } else {
      // Display an alert if the input field is empty
      alert("Please enter a task before adding.");
    }
  });