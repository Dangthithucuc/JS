let renderList = ["đi ngủ", "đi về", "đi ăn"];
let taskInput =document.getElementById("taskInput");
let button = document.getElementById("btn");
let ul = document.getElementById("taskList")
let li = document.getElementById("li")
    button.onclick() = function () {
  renderList =renderList.push(taskInput.nodeValue);
   let li =document.createElement("li")
   li.innerHTML = `${taskInput.value}`
   renderList.appendChild(li)
   
        

}