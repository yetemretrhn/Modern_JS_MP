//Add butonuna tıklanıp tıklanmadığını dinle
//tıklandığında inputtan içeriği al
//git ve yeni bir tane todo item elementi oluştur <li>
//git ve bunu DOM 'un içerisine al

{
  /* <li class="todoItem">
<button class="completeButton">Complete</button>
<button class="deleteButton">Delete</button>
<p class="todoText">Test Something</p>
</li> */
}

//querySelector ile elementleri çekiyoruz.
const addTaskButton = document.querySelector(".addTask");
const todoInput = document.querySelector(".todoInput");
const todosContainer = document.querySelector(".todos");
console.log(todoInput, addTaskButton);

//compelted class'ını parenta li ye ekleme
const toggleComplete = (event) => {
  const { parentElement } = event.currentTarget;
  const isCompleted = [...parentElement.classList].some(
    (className) => className === "completed"
  );

  if (!isCompleted) {
    event.currentTarget.innerText = "Todo";
  } else {
    event.currentTarget.innerText = "Completed";
  }

  event.currentTarget.parentElement.classList.toggle("completed");
};

const removeItem = (event) => {
  todosContainer.removeChild(event.currentTarget.parentElement);
};
const renderTodoItem = (inputText) => {
  const todoItemElement = document.createElement("li");
  todoItemElement.classList.add("todoItem");

  //ekleme butonu oluşturma
  const completeButton = document.createElement("button");
  completeButton.classList.add("completeButton");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click", toggleComplete);
  todoItemElement.appendChild(completeButton);
  //delete butonu oluşturma
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", removeItem);
  todoItemElement.appendChild(deleteButton);
  //p oluşturma
  const textElement = document.createElement("p");
  textElement.classList.add("todoText");
  textElement.innerText = inputText;
  todoItemElement.appendChild(textElement);

  todoInput.value = "";
  todoInput.focus();
  todosContainer.appendChild(todoItemElement);
};

const addTask = () => {
  if (todoInput.value === "") {
    alert("Input Boş Geçilemez!");
  } else {
    renderTodoItem(todoInput.value);
  }
};

addTaskButton.addEventListener("click", addTask);
