// let todo = {
//     id: 1,
//     name: "Học JS",
//     completed: false
// } 
 
 
 
 
 
 
//  let taskInput = document.getElementById("taskInput");
//  let button = document.getAnimations("addBtn");
//  let list = document.getElementById("todo-list");
//  let footer = document.getElementById("footer-count");
//  function renderTodos () {
//     list.innerHTML = "";
//     todos.forEach( todo => {
//         let li = document.createElement("li");
//        let checkbox;
//        if (todo.completed === true) {
//         checkbox = `<input type="checkbox" checked onchange="toggleTodo(' +todo.id + ')"`
//        }
//     })
//  }
function renderTodos() {
    list.innerHTML = "";

    todos.forEach(function(todo) {
        let li = document.createElement("li");

        let checkbox;
        if (todo.completed === true) {
            checkbox = '<input type="checkbox" checked onchange="toggleTodo(' + todo.id + ')">';
        } else {
            checkbox = '<input type="checkbox" onchange="toggleTodo(' + todo.id + ')">';
        }

        let name;
        if (todo.completed === true) {
            name = '<span class="completed">' + todo.name + '</span>';
        } else {
            name = '<span>' + todo.name + '</span>';
        }

        li.innerHTML =
            checkbox +
            name +
            '<button onclick="editTodo(' + todo.id + ')">Sửa</button>' +
            '<button onclick="deleteTodo(' + todo.id + ')">Xóa</button>';

        list.appendChild(li);
    });

    updateFooter();
}

