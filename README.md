# EVENTS SCHEDULER


## *Daily Planner*

<br>
<br>

[Link Here](https://josiesavill.github.io/events-scheduler/)  


![Desktop Img]("../../styles/images/eventsdesktop.png) 

![Mobile View Img]("../../styles/images/eventsmobile.png) 


### bootstrap js link: <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossorigin="anonymous"></script>


### bootstrap css link: https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css




`````calendar code
<div class="cal-month">
          <button class="btn cal-btn" type="button" aria-label="previous month">
            <svg class="bi" width="16" height="16" aria-hidden="true"><use xlink:href="#arrow-left-short"></use></svg>
          </button>
          <strong class="cal-month-name">June</strong>
          <select class="form-select cal-month-name d-none">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option selected="" value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <button class="btn cal-btn" type="button" aria-label="next month">
            <svg class="bi" width="16" height="16" aria-hidden="true"><use xlink:href="#arrow-right-short"></use></svg>
          </button>
        </div
        `````

        ````
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>




background-image: url('https://th.bing.com/th/id/R.4215c5fc6abbfe6231141eb6a66952f7?rik=JB1IKr2l9IL8Sg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fKBk1YBX.jpg&ehk=ugeBF2VGQJDZ%2f5S6vxl0iMWMSgOLVzyX8cX6Ayl1gO8%3d&risl=&pid=ImgRaw&r=0');
````

old index:

<body>
    
    <div class="banner">
      
      <div class="js-todo-list todo-grid">
       <!-- box goes in here-->
      </div>
      <div class="heading">
        <h1>Events Scheduler</h1>
      </div>
      <div class="todo-input-grid">
      

        <div class="input-row">
          <div class="search-bar-container">
            <input  placeholder="Event name" class="js-name-input name-input search-bar"  type="text">
            <button class="add-todo-button js-add-todo-button">Add</button>
          </div>
        </div>
        <div class="input-row">
          <input type="date" class="js-due-date-input due-date-input">
        </div>
       
        
      </div>
  
    </div>

    


    <script src="script3.js"></script>
  </body>


  old css:

  body {
  font-family: Arial;
}

:root{
  --color1: #ab2f59;
  --color2: #e5a062;
  --color3: rgb(171, 47, 89);
}

body {
  font-family: "Lato";
  margin: 0px;
  padding: 0px;
}

.banner {
  display: flex;
  flex-direction: column;
  background-image: url('https://th.bing.com/th/id/R.4215c5fc6abbfe6231141eb6a66952f7?rik=JB1IKr2l9IL8Sg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fKBk1YBX.jpg&ehk=ugeBF2VGQJDZ%2f5S6vxl0iMWMSgOLVzyX8cX6Ayl1gO8%3d&risl=&pid=ImgRaw&r=0');

  background-attachment: fixed;
  background-size: cover;
  justify-content: center;
  min-height: 100vh;
  min-width: 100%;
  /* z-index: 1; */
  
}

.background-pic {
  width: 100%;
  min-height: 100%;
  position: fixed;
}

https://th.bing.com/th/id/R.4215c5fc6abbfe6231141eb6a66952f7?rik=JB1IKr2l9IL8Sg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fKBk1YBX.jpg&ehk=ugeBF2VGQJDZ%2f5S6vxl0iMWMSgOLVzyX8cX6Ayl1gO8%3d&risl=&pid=ImgRaw&r=0'



old script:

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
        <div class="due-date">${incrementDay(myDate)}  ${year}</div>
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

      // added code below for increment day:
      function incrementDay(date) {
        // Create a new Date object to avoid modifying the original date
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);
        return `${months[nextDay.getMonth()]} ${nextDay.getDate()}`;
      }


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















