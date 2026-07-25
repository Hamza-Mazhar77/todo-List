// when loading the page, load from local storage.
//const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

let todoList = JSON.parse(localStorage.getItem('todoList'));

if (!Array.isArray(todoList)) {
  todoList = [];
}

renderTodoList();

function renderTodoList() {
  // here regular function is prefered
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `
        <div> ${name} </div>
        <div> ${dueDate} </div>
        <button class="delete-button delete-todo-button"
        >Delete</button>
    `;

    todoListHtml += html;
  }

  document.querySelector(".todo").innerHTML = todoListHtml;

  document.querySelectorAll(".delete-todo-button").forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
        localStorage.setItem('todoList', JSON.stringify(todoList));
      });
    });
}

document.querySelector(".add-todo-button").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".name-input"); //to get text in the textbox
  const name = inputElement.value; //to get the text out

  const dateInputElement = document.querySelector(".dueDate-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //to add text to array
    name, // name: name,
    dueDate, // dueDate: dueDate
  });

  inputElement.value = ""; //to reset textbox after adding

  renderTodoList();

  localStorage.setItem('todoList', JSON.stringify(todoList));
}
