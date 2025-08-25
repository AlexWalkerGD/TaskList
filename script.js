
 let tasks = [];

function addtask(){

    let inputTask = document.getElementById("task");
    let task = inputTask.value.trim();

    if(task == ""){

        let errorMessage = "Enter a task to add it to the list";
        document.getElementById("message").textContent = errorMessage;
    }
    else{

        let message = "Task successfully added";
        document.getElementById("message").textContent = message;
        
        tasks.push(task);  
        refreshTasks();  
    }

    inputTask.value = "";
}

function refreshTasks(){

        const taskList = document.getElementById("list");
        taskList.innerHTML = ""

        for(let i = 0; i < tasks.length; i++){

            let newTask = document.createElement("li");
            newTask.textContent = tasks[i];

            let buttonRemove = document.createElement("button");
            buttonRemove.className = "remove";
            buttonRemove.textContent = "Remove";
            buttonRemove.onclick = () => removeTask(i);

            let buttonEdit = document.createElement("button");
            buttonEdit.className = "edit";
            buttonEdit.textContent = "Edit";
            buttonEdit.onclick = () => editTask(i);

            newTask.appendChild(buttonRemove);
            newTask.appendChild(buttonEdit);
            taskList.appendChild(newTask);
        }
        
}

function removeTask(i){
    tasks.splice(i,1);
    refreshTasks();
}

function editTask(i){
    let editingTask = prompt("Edit your Task");
    
    if(editingTask.trim() !== ""){
        tasks[i] = editingTask;
        refreshTasks();
    }
}

function clearList(){
    if(tasks.length !== 0){
        tasks.length = 0;
        refreshTasks();
        let message = document.getElementById("message");
        message.textContent = "Task list successfully cleaned";
    }
    else{
        let errorMessage = "Enter a task to clear the list";
        document.getElementById("message").textContent = errorMessage;
    }
    
}