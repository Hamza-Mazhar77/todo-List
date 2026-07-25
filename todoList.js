// when loading the page, load from local storage.
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
  // here regular function is prefered
  let todoListHtml = "";

  todoList.forEach((todoObject, index) => {
    // here arrow function is prefered
    const { name, dueDate } = todoObject;

    const html = `
        <div> ${name} </div>
        <div> ${dueDate} </div>
        <button class="delete-button delete-todo-button"
        >Delete</button>
    `;

    todoListHtml += html;
  });

  document.querySelector(".todo").innerHTML = todoListHtml;

  document.querySelectorAll(".delete-todo-button").forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
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

  //whenever we update a todolist save it in local storage
  localStorage.setItem('todoList', JSON.stringify('todoList'));
}
