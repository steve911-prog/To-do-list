function addTask() {
  let title = document.querySelector("#taskTitle");
  let tasks = document.querySelector(".tasks");
  console.log(title.value);
  if(title.value === ''){
    return;
  };
  let task = document.createElement("div");
  task.setAttribute("class", `task gray ${tasks.childElementCount + 1}`);
  task.innerHTML = ` <div class="check" ><i class="fa-solid fa-check fa-xl"></i></div>
            <div class="label"><h2 class="label">NEW TASK</h2></div>
            <div class="delete"><i class="fa-solid fa-xmark"></i></i></div>`;
  tasks.appendChild(task);
}

function doneTask(num, event) {
  console.log("Clicked element: ", event);

  let check = document.querySelector(`.${num} .check`);
  console.log(check.textContent);
  let checkI = document.querySelector(`.${num} .check i`);

  if (checkI.style.display === "block") {
    checkI.style.display = "none";
  } else {
    checkI.style.display = "block";
  }
}
