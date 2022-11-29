const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

const todos = [];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    const todoElement = document.createElement("li");
    const todoText = document.createTextNode(todo);

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    const linkText = document.createTextNode("Excluir");

    const position = todos.indexOf(todo);
    linkElement.setAttribute("onclick", `deleteTodo(${position})`);

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  const todoText = inputElement.value;

  if (todoText === "") {
    alert("Digite uma tarefa");
    inputElement.focus();
  } else {
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
  }
}

buttonElement.onclick = addTodo;

function deleteTodo(position) {
  todos.splice(position, 1);
  renderTodos();
}
