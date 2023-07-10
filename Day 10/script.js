var getInput = document.querySelector('.input');
var getAddBtn = document.querySelector('.add-btn');
var tasks = JSON.parse(localStorage.getItem('tasks')) || []

const method = {
    renderTask: function() {
        var htmls = tasks.map(function(item, index) {
            return `<li class="task ${item.completed ?  "done" : ""}" onclick="method.onDone(this,${index})">
                        <p class > ${item.text}</p>
                        <div class = "actions">
                            <i class="fa-solid fa-pen edit" onclick="method.onEdit(this,${index})"></i>
                            <i class="fa-solid fa-trash delete" onclick = "method.onRemove(this, ${index})"></i>
                        </div>
                    </li>`
            
        })
    
        document.querySelector(".todo-list").innerHTML = htmls.join("")
        method.updateLocalStorage()
        method.detectActive()
    },

    detectActive: function() {
        if (tasks.length > 0) {
            getInput.classList.add("active")
        } else {
            getInput.classList.remove("active")
        }
    },

    onRemove: function(element, index){
        tasks.splice(index, 1)
        element.parentElement.remove()
        method.updateLocalStorage()
        method.renderTask(tasks)
    },

    onEdit: function(element, index){
        const getTaskElement = element.parentElement.parentElement;
        getInput.value = getTaskElement.querySelector("p").innerHTML
        getInput.focus()
        method.onRemove(element, index)
    },

    onDone: function(element,index) {  
        element.classList.toggle("done")
        
        if (tasks.length > 0) {
            tasks[index].completed  = !tasks[index].completed
        }

        method.updateLocalStorage()
    },

    preventDefault: function() {
        document.querySelector(".form-control").addEventListener("submit", (function (e) {
            e.preventDefault()
        }));
    },

    addTask: function () {        
        if (getInput.value != "") {
            tasks.unshift({
                text: getInput.value,
                completed: false
            })
        }

        
        getInput.value =""
        method.renderTask(tasks)
        method.updateLocalStorage()
    },

    updateLocalStorage: function() {
        var todos = []
        var getListElement = document.querySelectorAll("li")


        getListElement.forEach(item => {
            todos.push({
                text: item.querySelector("p").innerHTML,
                completed: item.classList.contains("done")
            })
        });
        
        localStorage.setItem("tasks", JSON.stringify(todos))
    },

    start: function() {
        method.renderTask(tasks)
        method.preventDefault()
    }
}

getAddBtn.addEventListener('click', method.addTask);

method.start()

