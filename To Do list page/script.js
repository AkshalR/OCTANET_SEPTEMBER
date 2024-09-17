document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(input.value);
        input.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${task}</span>
            <button class="edit-button">Edit</button>
            <button>Delete</button>
        `;
        taskList.appendChild(li);

        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            const span = li.querySelector('span');
            span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        });

        const deleteButton = li.querySelector('button:not(.edit-button)');
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        const editButton = li.querySelector('.edit-button');
        editButton.addEventListener('click', () => {
            const span = li.querySelector('span');
            const newTask = prompt('Edit your task:', span.textContent);
            if (newTask !== null && newTask.trim() !== '') {
                span.textContent = newTask;
            }
        });
    }
});
