function addTask(){

const input = document.getElementById("taskInput")
const taskText = input.value

if(taskText === ""){
alert("Please enter a task")
return
}

const li = document.createElement("li")

li.innerHTML = `
${taskText}
<button class="delete">Delete</button>
`

document.getElementById("taskList").appendChild(li)

input.value = ""

li.querySelector(".delete").onclick = function(){
li.remove()
}

}