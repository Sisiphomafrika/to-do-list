

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let Button = document.querySelector("#button")

displayTasks();

function addTask() {
  const taskInput = document.getElementById('taskInput').value.trim();

  
  if (taskInput !== '') {
    tasks.push(taskInput);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTasks();
    document.getElementById('taskInput').value = '';
  }
}

function displayTasks() {
  const taskListElement = document.getElementById('taskList');
  taskListElement.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.onclick = () => deleteTask(index);

    listItem.appendChild(deleteButton);
    taskListElement.appendChild(listItem);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}


Button.addEventListener("click", addTask)

