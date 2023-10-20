document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const deleteAllButton = document.getElementById("deleteAll");

    addTaskButton.addEventListener("click", addTask);
    taskList.addEventListener("click", handleTaskClick);
    deleteAllButton.addEventListener("click", deleteAllTasks);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    function handleTaskClick(e) {
        const target = e.target;
        const listItem = target.parentElement;
        if (target.classList.contains("delete")) {
            listItem.remove();
        } else if (target.classList.contains("edit")) {
            const taskText = listItem.querySelector("span").textContent;
            const newText = prompt("Edit the task:", taskText);
            if (newText !== null) {
                listItem.querySelector("span").textContent = newText;
            }
        }
    }

    function deleteAllTasks() {
        taskList.innerHTML = "";
    }
});

