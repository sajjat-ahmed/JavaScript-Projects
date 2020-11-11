const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo() {
    const todoText = input.value;

    if(todoText) {
        const todoE1 = document.createElement("li");
        todoE1.innerText = todoText;
        todos.appendChild(todoE1);

        todoE1.addEventListener('click', () => {
            todoE1.classList.toggle('complited');
        });

        todoE1.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoE1.remove();
        })

        input.value = "";
    }
}