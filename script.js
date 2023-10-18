const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskTracker = document.getElementById("task-tracker");


// let tasksLeft = 0;
// let tasksCompleted = 0;



function addTask(){
    if (inputBox.value === ''){
        alert("You didn't write anything");
    }
    else{
        let li = document.createElement("li");
        li.classList.add("todo-item");

        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        listContainer.appendChild(li);
        // tasksLeft++;
        updateTaskAmount();
        saveData();
    }
    inputBox.value = "";
}

function updateTaskAmount(){
    let listContainerChildren = listContainer.children;
    let tasksCompleted = 0;
    let tasksLeft = 0;

    for (let i = 0; i < listContainer.childElementCount; i++){
        if (listContainerChildren[i].classList.contains("checked")){
            tasksCompleted++;
        }
        else{
            tasksLeft++
        }
    }

    taskTracker.innerHTML = "Tasks Left: " + tasksLeft + ", Tasks Completed: " + tasksCompleted;
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        // if (e.target.parentElement.classList.contains("checked")){
        //     tasksCompleted--;
        // }
        // else{
        //     tasksLeft--;
        // }
        e.target.parentElement.remove();
        updateTaskAmount();
        saveData();
    }
    else if (e.target.tagName === "LI") {
        // if (e.target.classList.contains("checked")){
        //     tasksCompleted--;
        //     tasksLeft++;
        // }
        // else{
        //     tasksCompleted++;
        //     tasksLeft--;
        // }
        e.target.classList.toggle("checked");
        updateTaskAmount();
        saveData();
    }
    
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    // localStorage.setItem("tasksLeft", tasksLeft.toString());
    // localStorage.setItem("tasksCompleted", tasksCompleted.toString());
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    // tasksLeft = localStorage.getItem("tasksLeft");
    // tasksCompleted = localStorage.getItem("tasksCompleted");
}

inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
  });


showTask();
updateTaskAmount();

