const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && taskInput.value.trim() !== '') {
    addTask(taskInput.value.trim());
    taskInput.value = ''; 
  }
});

function addTask(taskContent) {
  const taskItem = document.createElement('li');
  taskItem.innerText = taskContent;

  taskItem.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = '❌';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function(event) {
    event.stopPropagation(); 
    taskItem.remove();
  });

  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}
