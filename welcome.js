document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      redirectToTodoList();
    });
  
    function redirectToTodoList() {
      window.location.href = "To_do.html";
    }
  });