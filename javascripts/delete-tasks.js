const deleteButtn = document.querySelector('#delete-button')

deleteButtn.addEventListener('click', () => {
  const tasks = document.querySelectorAll(".js-task");

  tasks.forEach((task) => {
    task.remove()
  })
})