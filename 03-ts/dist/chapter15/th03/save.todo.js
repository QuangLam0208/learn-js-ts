import { removeTodoFromLocalStorage } from "./delete.todo.js";
import { getRandomInt } from "./helper.js";
const handleSaveTodoToLocalStorage = (todo) => {
    // check su ton tai cua list todo trong localStorage
    const todosStr = localStorage.getItem("todoList");
    if (todosStr) {
        const todoArr = JSON.parse(todosStr);
        todoArr.push(todo);
        localStorage.setItem("todoList", JSON.stringify(todoArr));
    }
    else {
        localStorage.setItem("todoList", JSON.stringify([todo]));
    }
};
const handleAddNewWithJs = (todo) => {
    const todoListStr = localStorage.getItem("todoList");
    let index = 0;
    if (todoListStr) {
        index = JSON.parse(todoListStr).length - 1;
    }
    const tableBody = document.querySelector("#tableTodo tbody");
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${todo.id}</td>
                    <td>${todo.name}</td>
                    <td>
                        <button class="btn btn-danger delete-todo" data-id=${todo.id}>Delete</button>
                    </td>
                </tr>
    `;
    tableBody?.appendChild(newRow);
    const btnElement = document.querySelector(`[data-id="${todo.id}"]`);
    btnElement.addEventListener("click", () => {
        const id = btnElement.getAttribute("data-id");
        // remove todo from localStorage
        if (id) {
            removeTodoFromLocalStorage(+id);
            const row = btnElement.closest("tr");
            if (row)
                row.remove();
        }
    });
};
const createTodo = () => {
    const btnElement = document.getElementById("btnCreateTodo");
    btnElement?.addEventListener("click", () => {
        const inputElement = document.getElementById("todoName");
        if (inputElement) {
            const name = inputElement.value;
            // save todo to localstorage
            const newTodo = {
                id: getRandomInt(1, 1000000),
                name
            };
            handleSaveTodoToLocalStorage(newTodo);
            handleAddNewWithJs(newTodo);
            // close modal
            //@ts-ignore
            const createTodoModal = bootstrap.Modal.getOrCreateInstance('#createTodo', {
                keyboard: false
            });
            createTodoModal.hide();
            // clear todo
            inputElement.value = "";
            // show toast
            //@ts-ignore
            const toast = new bootstrap.Toast("#liveToast");
            toast.show();
        }
    });
};
export { createTodo };
