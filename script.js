const btnNewTask = document.getElementById('newTask');
const btnList = document.getElementById('list');
const btnSave = document.getElementById('save');;
const informationContainer = document.querySelector('.information-task-container');
const taskListContainer = document.querySelector('.task-list');
const errorMessage = document.querySelector(".error-message");

const txtTittle = document.getElementById("tittle");
const txtHour = document.getElementById("hour");
const txtPriority = document.querySelectorAll(".radio");
const txtComment = document.getElementById("comment");

let task = null;
let priority_ = document.querySelectorAll('.priority-text');
const selectOrder = document.getElementById('select-order');

btnNewTask.addEventListener("click", () => {
  taskListContainer.classList.remove("show");
  informationContainer.classList.remove("hide");
});

btnList.addEventListener("click", () => {
  informationContainer.classList.add("hide");
  taskListContainer.classList.add("show");
  task = document.querySelectorAll('.task-container');
  priority_ = document.querySelectorAll('.priority-text');
  console.log(task);
  console.log(priority_);
  orderElements(selectOrder.value);
});

btnSave.addEventListener("click", () => {
  if (isDataCorrect()){
    buildTask();
    emptyTxt();
  } 
  
});

function setPriority(headerContainer) {
  let str = "";
  txtPriority.forEach((element) => {
    if (element.checked) {
      str = element.value;
    }
  });
  if (str === "HIGH") headerContainer.classList.add("red");
  else if (str === "MEDIUM") headerContainer.classList.add("yellow");
  else headerContainer.classList.add("green");
  return str;
}

function isDataCorrect() {
  console.log(txtComment.value);
  if (txtTittle.value.trim() != "") {
    if (txtHour.value != "") {
      if (txtComment.value.trim() != "") {
        return true;
      }
    }
  }
  errorMessage.classList.add("show");
  return false;
}

function emptyTxt() {
  txtTittle.value = "";
  txtComment.value = "";
  txtHour.value = "";
  errorMessage.classList.remove("show");
}

////////////////////////////////////
function buildTask() {

  let taskContainer = document.createElement("div");
  let headerTaskContainer = document.createElement("div");
  let mainTaskContainer = document.createElement("div");
  let hour = document.createElement("p");
  let priority = document.createElement("p");
  let tittle = document.createElement("p");
  let line = document.createElement("hr");
  let comment = document.createElement("p");

  taskContainer.classList.add("task-container");
  headerTaskContainer.classList.add("header-task-container");
  hour.classList.add("hour-text", "task-text-list");
  priority.classList.add("priority-text", "task-text-list");
  tittle.classList.add("task-text-list", "tittle-text");
  comment.classList.add("task-text-list");
  mainTaskContainer.classList.add("main-task-container");

  hour.innerText = txtHour.value;
  priority.innerText = setPriority(headerTaskContainer);
  tittle.innerText = txtTittle.value;
  comment.innerText = txtComment.value;

  taskListContainer.appendChild(taskContainer);
  taskContainer.appendChild(headerTaskContainer);
  taskContainer.appendChild(mainTaskContainer);

  let headerElement = [hour, priority];
  let mainElement = [tittle, line, comment];

  headerElement.forEach((element) => {
    headerTaskContainer.appendChild(element);
  });

  mainElement.forEach((element) => {
    mainTaskContainer.appendChild(element);
  });

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

selectOrder.addEventListener("change", () => {
  orderElements(selectOrder.value);
});

function orderElements(str) {
  let cont = 0;
  priority_.forEach(element => {
    task[cont].classList.remove("hide");
    task[cont].classList.remove("third");
    task[cont].classList.remove("second");
    task[cont].classList.remove("first");

    if (str === "From HIGH to LOW") {
      if (element.innerText === "HIGH") task[cont].classList.add("first");
      if (element.innerText === "MEDIUM") task[cont].classList.add("second");
      if (element.innerText === "LOW") task[cont].classList.add("third");
    }

    if (str === "From LOW to HIGH") {
      if (element.innerText === "HIGH") task[cont].classList.add("third");
      if (element.innerText === "MEDIUM") task[cont].classList.add("second");
      if (element.innerText === "LOW") task[cont].classList.add("first");
    }

    if (str === "HIGH") {
      if (element.innerText != "HIGH") task[cont].classList.add("hide");
    }

    if (str === "MEDIUM") {
      if (element.innerText != "MEDIUM") task[cont].classList.add("hide");
    }

    if (str === "LOW") {
      if (element.innerText != "LOW") task[cont].classList.add("hide");
    }

    cont++;
  });
}

