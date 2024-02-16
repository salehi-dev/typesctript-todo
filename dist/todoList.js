"use strict";
const todoValue = document.querySelector(".todo-value");
const addTodo = document.querySelector(".add-todo");
const cleareTodos = document.querySelector(".clear-todos");
const todoList = document.querySelector(".todoList");
const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
        id: crypto.randomUUID(),
        title: todoValue.value,
        isComplete: false,
    };
    addTodoToDom(newTodo);
    todoValue.value = "";
    todoValue.focus();
};
const addTodoToDom = (todo) => {
    todoList.insertAdjacentHTML("afterbegin", `
        <li>
            ${todo.title}<span class="icon"><i class="fas fa-trash"></i></span>
        </li>
    `);
};
addTodo.addEventListener("click", (event) => handleSubmit(event));
