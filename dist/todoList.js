"use strict";
const todoValue = document.querySelector(".todo-value");
const addTodo = document.querySelector(".add-todo");
const cleareTodos = document.querySelector(".clear-todos");
const todoList = document.querySelector(".todoList");
const allTodo = JSON.parse(localStorage.getItem("todos") || "[]");
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
    allTodo.push(newTodo);
    saveTodos();
};
const addTodoToDom = (todo) => {
    todoList.insertAdjacentHTML("afterbegin", `
        <li>
            ${todo.title}<span class="icon"><i class="fas fa-trash"></i></span>
        </li>
    `);
};
window.addEventListener("DOMContentLoaded", () => {
    allTodo.forEach((todo) => addTodoToDom(todo));
});
addTodo.addEventListener("click", (event) => handleSubmit(event));
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(allTodo));
    return true;
};
