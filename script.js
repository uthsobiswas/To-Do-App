const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

loadTasks()

function addTask(){

const taskText = taskInput.value.trim()

if(taskText === "") return

createTask(taskText)

saveTask(taskText)

taskInput.value = ""

}

function createTask(text, completed=false){

const li = document.createElement("li")

if(completed) li.classList.add("completed")

li.innerHTML = `
<span>${text}</span>
<button class="delete">X</button>
`

li.querySelector("span").onclick = () =>{
li.classList.toggle("completed")
updateStorage()
}

li.querySelector(".delete").onclick = () =>{
li.remove()
updateStorage()
}

taskList.appendChild(li)

}

function saveTask(task){
let tasks = JSON.parse(localStorage.getItem("tasks")) || []
tasks.push({text:task,completed:false})
localStorage.setItem("tasks",JSON.stringify(tasks))
}

function loadTasks(){
let tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks.forEach(task =>{
createTask(task.text,task.completed)
})
}

function updateStorage(){

let tasks = []

document.querySelectorAll("#taskList li").forEach(li =>{

tasks.push({
text:li.innerText.replace("X","").trim(),
completed:li.classList.contains("completed")
})

})

localStorage.setItem("tasks",JSON.stringify(tasks))

}