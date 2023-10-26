const todoList = [ {
  name: 'wash dishes',
  dueDate: '2022-12-24'
},{
  name: 'make dinner',
  dueDate: '2022-12-22'
}
];




renderTodoList();


function renderTodoList() {

  let todoListHTML = '';
  // added edit todo button in box div
  console.log(todoList);

  todoList.sort((a,b)=>{

    if (a.dueDate < b.dueDate) {
      return -1;
    } else if (a.dueDate > b.dueDate) {
      return 1;
    }
    // a must be equal to b
    return 0;

  })





  todoList.forEach((todoObject, index) => {
      const { name, dueDate } = todoObject;

      let myDate= new Date (dueDate);
      let year = myDate.getFullYear();
      let day = myDate.getDate();
      let monthNum = myDate.getMonth(); //number month
      var months = [ "Jan", "Feb", "Mar", "Apr", "May", "June",
      "July", "Aug", "Sept", "Oct", "Nov", "Dec" ]; //label month




      const html = `
      <div class="box">
      <div>
        <div class="due-date">${months[monthNum]} - ${day} - ${year}</div>
        <div class="event-name">${name}</div> 
        </div>
        <div class="btn-row">
          <button class="edit-todo-button js-edit-todo-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </button>
          <button class= "delete-todo-button js-delete-todo-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
            </svg>
          </button>
        </div>
          </div>`;
      todoListHTML += html;
  });
  

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
            renderTodoList();
      });
    });

    // added below code for edit button
    document.querySelectorAll('.js-edit-todo-button')
    .forEach((editButton, index) => {
      editButton.addEventListener('click', () => {
        editTodo(index);
      });
    });
  
   

}

// added function below for edit button
function editTodo(index) {
  const newName = prompt("Edit the todo name:", todoList[index].name);
  if (newName !== null) {
    todoList[index].name = newName;
    renderTodoList();
  }
}


document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

  
document.querySelector(".name-input")
.addEventListener("keydown", (e)=>{
  if(e.keyCode === 13) {
    addTodo();
  } //enter key
})

document.querySelector('.js-due-date-input')
.addEventListener("change", (e)=>{
  e.target.style.color = "black";
})

function addTodo() {

  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate
  });
  // console.log(todoList);

  inputElement.value = "";

  renderTodoList();


}

function editTodo(index) {
  const newName = prompt("Edit the todo name:", todoList[index].name);
  if (newName !== null) {
    todoList[index].name = newName;
    renderTodoList();
  }
}

