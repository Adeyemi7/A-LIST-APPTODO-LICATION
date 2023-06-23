document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".todo-form");
    const input = document.querySelector(".todo-input");
    const todoList = document.querySelector(".todo-list");
   // const deleteALL = document.querySelector(".clear_btn")

    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const todoText = input.value.trim();
      if (todoText !== "") {
        addTodoItem(todoText);
        input.value = "";
      }
    });
  
    todoList.addEventListener("click", function(event) {
      if (event.target.tagName.toLowerCase() === "button") {
        const li = event.target.parentElement;
        removeTodoItem(li);
      }
    });

    function addTodoItem(text) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerText = text;
      const button = document.createElement("button");
      button.innerText = "Delete";
      li.appendChild(span);
      li.appendChild(button);
      todoList.appendChild(li);
      const correct = document.createElement ("button")
      correct.innerText = "Edit"
      li.appendChild(correct);
      saveTodoItems();
      
    }
    
    function addTodoItem(text) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.innerText = text;
      const button = document.createElement("button");
      button.innerText = "Delete";
      li.appendChild(span);
      li.appendChild(button);
      todoList.appendChild(li);

      /*const correct = document.createElement ("button")
      correct.innerText = "Edit"
      li.appendChild(correct);*/

      saveTodoItems();
      
    }
    function removeTodoItem(li) {
      li.remove();
      saveTodoItems();
    }

  
    function saveTodoItems() {
      const todoItems = Array.from(todoList.getElementsByTagName("li")).map(function(li) {
        return li.firstChild.innerText;
      });
      localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }
  
    function loadTodoItems() {
      const savedItems = localStorage.getItem("todoItems");
      if (savedItems) {
        const todoItems = JSON.parse(savedItems);
        todoItems.forEach(function(text) {
          addTodoItem(text);
        });
      }
    }
  });

  clear_btn.addEventListener("click", function(){
    
  })
