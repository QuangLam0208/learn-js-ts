const btnSave = document.getElementById("btnSave");
const inputTodo = document.getElementById("name");

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

if (btnSave) {
    btnSave.addEventListener("click", () => {
        const todo = {
            id: getRandomInt(1, 1000000),
            name: inputTodo.value
        };

        const currentTodoListStr = localStorage.getItem("todo");
        if (currentTodoListStr) {
            const currentTodoList = JSON.parse(currentTodoListStr);
            currentTodoList.push(todo);
            localStorage.setItem("todo", JSON.stringify(currentTodoList));
        } else {
            localStorage.setItem("todo", JSON.stringify([todo]));
        }

        window.location.href = "vid70.html";
    })
}

const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("todo");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);
        const tbody = document.querySelector("#todoList tbody");
        if (todoList && todoList.length) {
            todoList.forEach((todo, index) => {
                tbody.innerHTML += `
                <tr>
                    <td>${todo.id}</td>
                    <td>${todo.name}</td>
                    <td><button class="btn-delete" data-id="${todo.id}">Delete</button></td>
                </tr>`
            });
        }
    }
}

generateTodoTable();

const deleteBtns = document.querySelectorAll(".btn-delete");
if (deleteBtns) {
    deleteBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            handleDeleteTodo(id);
        })
    })
}

const handleDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem("todo");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);
        const newTodoList = todoList.filter((todo, index) => todo.id + "" !== id);
        localStorage.setItem("todo", JSON.stringify(newTodoList));
        window.location.reload();
    }
}