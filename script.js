



function createTaskItem(text) {
 
    const newTaskItem = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");

    const textSpan = document.createElement("span");
  textSpan.textContent = text;

  newTaskItem.appendChild(textSpan);
   
    deleteButton.addEventListener("click", function() {
 
      newTaskItem.remove();
    });

    newTaskItem.textContent = text;

    newTaskItem.appendChild(deleteButton);

    newTaskItem.addEventListener("click", function() {
      newTaskItem.classList.toggle("done");
    });

    return newTaskItem;
  }

  
  const inputElement = document.getElementById("todoInput");
  const addButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");


  addButton.addEventListener("click", function() {

    const inputValue = inputElement.value.trim();


    if (inputValue !== "") {
    
      const newTaskItem = createTaskItem(inputValue);

   
      taskList.appendChild(newTaskItem);

      inputElement.value = "";
    } else {
 
      alert("Please enter a task before adding.");
    }
  });