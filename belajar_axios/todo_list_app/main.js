document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = document.getElementById("textTodo").value;
  console.log(todo);
});
