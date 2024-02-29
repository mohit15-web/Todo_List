// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add event listener to input field to add tasks
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && taskInput.value.trim() !== '') {
    addTask(taskInput.value.trim());
    taskInput.value = ''; // Clear input field after adding task
  }
});

// Function to add a new task
function addTask(taskContent) {
  const taskItem = document.createElement('li');
  taskItem.textContent = taskContent;

  taskItem.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = '❌';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent task item from being toggled when delete button is clicked
    taskItem.remove();
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}
