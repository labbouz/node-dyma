import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addTodo(value);
});

const todos = [
    {
        text: "je suis une todo",
        done: false,
        editMode: false,
    },
    {
        text: "faire du JavaScript",
        done: true,
        editMode: false,
    },
];

const displayTodo = () => {
    const todosNode = todos.map((todo, index) => {
        if (todo.editMode) {
            return createTodoEditElement(todo, index);
        } else {
            return createTodoElement(todo, index);
        }
    });
    ul.innerHTML = "";
    ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
    const li = document.createElement("li");

    let timer;

    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Supprimer";
    buttonDelete.classList.add("danger");
    buttonDelete.addEventListener("click", (event) => {
        event.stopPropagation();
        deletTodo(index);
    });

    const buttonEdition = document.createElement("button");
    buttonEdition.innerHTML = "Edit";
    buttonEdition.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleEditMode(index);
    });

    li.innerHTML = `
        <span class="todo ${todo.done ? "done" : ""}"></span>
        <p class="todo ${todo.done ? "done" : ""}">${todo.text}</p>
    `;
    li.append(buttonEdition, buttonDelete);

    li.addEventListener("click", (event) => {
        if (event.detail === 1) {
            timer = setTimeout(() => {
                toggleTodo(index);
            }, 200);
        } else if (event.detail > 1) {
            clearTimeout(timer);
            toggleEditMode(index);
        }
    });

    return li;
};

const createTodoEditElement = (todo, index) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "text";
    input.value = todo.text;
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            editTodo(index, input);
        }
    });

    const buttonSave = document.createElement("button");
    buttonSave.innerHTML = "Save";
    buttonSave.addEventListener("click", (event) => {
        event.stopPropagation();
        editTodo(index, input);
    });

    const buttonCancel = document.createElement("button");
    buttonCancel.innerHTML = "Cancel";
    buttonCancel.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleEditMode(index);
    });

    li.append(input, buttonCancel, buttonSave);

    return li;
};

const addTodo = (text) => {
    todos.push({
        text,
        done: false,
        editMode: false,
    });
    displayTodo();
};

const deletTodo = (index) => {
    todos.splice(index, 1);
    displayTodo();
};

const toggleTodo = (index) => {
    todos[index].done = !todos[index].done;
    displayTodo();
};

const toggleEditMode = (index) => {
    todos[index].editMode = !todos[index].editMode;
    displayTodo();
};

const editTodo = (index, input) => {
    const value = input.value;
    todos[index].text = value;
    toggleEditMode(index);
};

displayTodo();
