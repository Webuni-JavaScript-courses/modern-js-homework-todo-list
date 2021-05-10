import { calculateProgess } from "./calculator.js";

const todo1 = {
    name: 'Clean bathroom',
    isCompleted: false
};

const todo2 = {
    name: 'Laundry',
    isCompleted: false
};

const todo3 = {
    name: 'Dishes',
    isCompleted: false
};

const todos = [
    todo1,
    todo2,
    todo3
];

export const initTodos = () => {
    displayTodos();

    updateProgress();
};

const updateProgress = () => {
    document.querySelector('#progess').textContent = `${Math.round(calculateProgess(todos) * 100)}%`;
};

const displayTodos = () => {
    const container = document.querySelector('#todos');
    container.innerHTML = '';
    todos.forEach(todo => {
        container.innerHTML = container.innerHTML + `
            <div class="${todo.isCompleted ? 'complete' : 'incomplete'}">
                <input ${todo.isCompleted ? 'checked' : ''} type="checkbox">
                ${todo.name}
            </div>
        `;
    });
    addEventListeners();
};

const addEventListeners = () => {
    document.querySelectorAll('input[type=checkbox]').forEach((checbox, index) => {
        checbox.addEventListener('change', () => {
            todos[index].isCompleted = checbox.checked;
            updateProgress();
            displayTodos();
        });
    });
};