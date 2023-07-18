const numbersToWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

function addTask() {
  let title = document.querySelector("#taskTitle");
  let tasks = document.querySelector(".tasks");
  console.log(title.value);
  if (title.value === "") {
    return;
  }
  let task = document.createElement("div");
  task.setAttribute("class", `task gray `);
  task.setAttribute("id", `${numbersToWords[tasks.childElementCount + 1]}`);
  task.innerHTML = ` <div class="check" onclick = 'doneTask("${
    numbersToWords[tasks.childElementCount + 1]
  }")'><i class="fa-solid fa-check fa-xl"></i></div>
            <div class="label"><h2 class="label">${title.value}</h2></div>
            <div class="delete" onclick="deleteTask('${
              numbersToWords[tasks.childElementCount + 1]
            }')"><i class="fa-solid fa-xmark"></i></i></div>`;

  console.log(tasks.childElementCount);
  tasks.appendChild(task);
  console.log(tasks.childElementCount);

  title.value = "";
}

function doneTask(num) {
  // console.log("Clicked element: ");
  let tasks = document.querySelector(".tasks");
  let task = document.querySelector(`#${num}`);
  let check = document.querySelector(`#${num} .check`);
  // console.log(check.textContent);
  let checkI = document.querySelector(`#${num} .check i`);

  if (checkI.style.display === "flex") {
    checkI.style.display = "none";
    task.classList.remove("Done"); //ITS VERY IMPORTANT! /ITS VERY IMPORTANT! /ITS VERY IMPORTANT! /ITS VERY IMPORTANT! /ITS VERY IMPORTANT! /ITS VERY IMPORTANT! /ITS VERY IMPORTANT! /ITS VERY IMPORTANT!
    console.log(task.className);
  } else {
    checkI.style.display = "flex";
    task.classList.add("Done");
    console.log(task.className);
  }

  // for(let i = 0; i < tasks.childNodes; i++){
  //     console.log(tasks.childNodes[i]);
  //     let elem = document.querySelector(`${tasks.childNodes[i]} .check i`);

  //     console.log(elem.innerHTML);
  //     let doneTasks = 0;
  //     if(elem.style.display === "block"){
  //       doneTasks++;
  //       if(tasks.childElementCount == doneTasks){
  //           console.log("Congratulations! You have done everything!");
  //       }
  //     }
  // };
}

function deleteTask(num) {
  console.log("Function is working :)", num);
  let tasks = document.querySelector(".tasks");
  let child = document.querySelector(`#${num}`);

  tasks.removeChild(child);
  console.log(tasks.childElementCount);
}

function filter(howFilter) {
  let tasks = document.querySelector(".tasks");

  for (i = 0; i < tasks.children.length; i++) {
    let className = tasks.children[i].className;
    console.log(tasks.children[i]);
    let task = document.querySelector(`${tasks.children[i]}`);
     //Not Finished //Not Finished //Not Finished //Not Finished //Not Finished //Not Finished //Not Finished //Not Finished //Not Finished //Not Finished //Not Finished //Not Finished

    //if the task is completed
    if (className.includes("Done")) {
      console.log("done :()");
    } else {
      console.log("not Done");
    }
  }
}
