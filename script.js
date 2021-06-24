
const btnNewTask = document.getElementById('btnNewTask');

const btnList = document.getElementById('btnList');

const btnSave = document.getElementById('btnSave');

const taskInformationContainer = document.getElementById('taskInformationContainer');

const listContainer = document.getElementById('listContainer');

const main = document.querySelector('.main');

const selectOrder = document.getElementById('selectOrder');

const txtTittle = document.getElementById('tittle');

const txtHour = document.getElementById('hour');

const txtPriority = document.getElementById('priority-select');

const txtComments = document.getElementById('comments');

btnNewTask.addEventListener("click", function () {
    taskInformationContainer.classList.remove("hide");
    listContainer.classList.remove("show");
});

btnList.addEventListener("click",function () {

    taskInformationContainer.classList.add("hide");
    listContainer.classList.add("show");

});

selectOrder.addEventListener("change",function () {
    console.log(selectOrder.value);
});

btnSave.addEventListener("click", function () {

     listContainer.innerHTML += `
     <div class="center">
     <div class="task-header">
         <div class="left-side"><p class="hour-position">${txtHour.value}</p></div>
         <div class="right-side"><p class="priority-position">${txtPriority.value}</p></div>
     </div>
     <div class="task-content">
         <div class="up-side"><p class="text-tittle-task-content">${txtTittle.value}</p></div>
         <hr class="line">
         <div class="down-side"><p class="text-comment-task-content">${txtComments.value}</p></div>
     </div>
  `;
  //convertTo12hourFormat(txtHour.value);
  //let priorities = document.querySelectorAll('.priority-position');
  
} );




// function convertTo12hourFormat (time) {

//     let str = time.substring(0,2);

//     let minutes = time.substring(3,5);

//     if(str.charAt(0) != '0'){
        
//     }

// }




