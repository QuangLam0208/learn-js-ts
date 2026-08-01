import { deleteTodo } from "./delete.todo.js";
import { createTodo } from "./save.todo.js";
import { displayTable } from "./table.todo.js";

interface ITodo {
    id: number;
    name: string;
}

createTodo();
displayTable();
deleteTodo();

export { ITodo }