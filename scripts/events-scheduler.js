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
        <div class="due-date">${months[monthNum - 1]} - ${day} - ${year}</div>
        <div class="event-name">${name}</div> 
        </div>
        <div class="btn-row">
          <button class="edit-todo-button js-edit-todo-button">Edit</button>
          <button class= "delete-todo-button js-delete-todo-button">Remove</button>
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

