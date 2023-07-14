const tasklist = document.querySelector(".js-tasklist");
const addButton = document.querySelector(".js-plus-icon");

addButton.addEventListener("click", () => {
  const newTask = document.createElement("div");
  tasklist.appendChild(newTask);

  newTask.classList.add("task");
  newTask.classList.add("js-task");
  newTask.innerHTML = `
    <div class="top">
      <div class="checkbox-container">
        <img class="checkbox" src="assets/icons/list/checkBox-icon.svg" alt="" />
      </div>
      <input class="task-name" type="text" placeholder="Task Name Here" />
    </div>
    <div class="taskState">
      <p>Idle</p>
      <div class="taskStateColor"></div>
    </div>`;

  const checkBttn = newTask.querySelector(".checkbox-container");
  const taskName = newTask.querySelector(".task-name");
  const taskState = newTask.querySelector(".taskState").querySelector("p");
  const taskSateColor = newTask.querySelector(".taskStateColor");

  checkBttn.addEventListener("click", () => {
    const img = checkBttn.querySelector("img");
    if (img.src === "http://127.0.0.1:5500/assets/icons/list/checkBox-icon.svg") {
      taskName.classList.add("active");

      img.src = "assets/icons/list/checkBoxActive-icon.svg";

      taskState.innerHTML = "Complete";
      taskSateColor.classList.add("activeColor");
    } else {
      taskName.classList.remove("active");

      img.src = "assets/icons/list/checkBox-icon.svg";

      taskState.innerHTML = "Idle";
      taskSateColor.classList.remove("activeColor");
    }
  });
});
