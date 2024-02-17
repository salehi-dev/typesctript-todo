const todoValue = document.querySelector(".todo-value") as HTMLInputElement;
const addTodo = document.querySelector(".add-todo") as HTMLButtonElement;
const cleareTodos = document.querySelector(".clear-todos") as HTMLButtonElement;
const todoList = document.querySelector(".todoList") as HTMLUListElement;

interface Todo {
  id: string;
  title: string;
  isComplete: boolean;
}

const allTodo: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

const handleSubmit = (event: Event) => {
  event.preventDefault();
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    title: todoValue.value,
    isComplete: false,
  };
  addTodoToDom(newTodo);
  todoValue.value = "";
  todoValue.focus();
  allTodo.push(newTodo);
  saveTodos();
};

const addTodoToDom = (todo: Todo) => {
  todoList.insertAdjacentHTML(
    "afterbegin",
    `
        <li>
            ${todo.title}<span class="icon"><i class="fas fa-trash"></i></span>
        </li>
    `
  );
};

window.addEventListener("DOMContentLoaded", () => {
  allTodo.forEach((todo) => addTodoToDom(todo));
});

addTodo.addEventListener("click", (event) => handleSubmit(event));

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(allTodo));
  return true;
};
