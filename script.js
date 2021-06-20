
const btnNewTask = document.getElementById('btnNewTask');

const main = document.querySelector('.main');

let taskTittle = "";
let taskHour = "";
let taskPriority = "";
let taskComment = "";

btnNewTask.addEventListener("click", function () {
    let taskcontainer = document.createElement('div');
    taskcontainer.setAttribute("class","center");

    main.appendChild(taskcontainer);
} );

