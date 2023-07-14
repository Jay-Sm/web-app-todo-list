const checkTasksBttn = document.querySelector(".js-checkTasks");

checkTasksBttn.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".js-task");

  tasks.forEach((task) => {
    const checkBttn = task.querySelector(".checkbox-container");
    const taskName = task.querySelector(".task-name");
    const taskState = task.querySelector(".taskState").querySelector("p");
    const taskSateColor = task.querySelector(".taskStateColor");

    taskName.classList.add("active");

    const img = checkBttn.querySelector("img");
    img.src = "assets/icons/list/checkBoxActive-icon.svg";

    taskState.innerHTML = "Complete";
    taskSateColor.classList.add("activeColor");
  });
});
