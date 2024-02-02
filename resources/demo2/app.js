document.addEventListener('DOMContentLoaded', () => {
  const addTaskButton = document.getElementById('add-task');
  const newTaskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      const removeButton = document.createElement('span');
      removeButton.textContent = '❌';
      removeButton.classList.add('remove-task');
      removeButton.onclick = function() {
        listItem.remove();
      };

      listItem.appendChild(removeButton);
      listItem.onclick = function() {
        listItem.classList.toggle('completed');
      };

      taskList.appendChild(listItem);
      newTaskInput.value = '';
    }
  });

  newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTaskButton.click();
    }
  });
});
