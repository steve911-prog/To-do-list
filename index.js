newTask = document.getElementById("newTask");
newTextInput = document.getElementsByClassName("new");

newTask.addEventListener("click", function () {
  newTextInput.click = () => {
    console.log("listener is added");
    newTextInput.style = "display:flex;";
  };
});

function showInput() {
  console.log("listener is added");
  newTextInput = document.getElementsByClassName("new");
  
  console.log(newTextInput.textContent);
};
