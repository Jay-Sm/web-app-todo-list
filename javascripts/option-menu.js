const menuButtn = document.querySelector("#threeDot-icon");
const menu = document.querySelector(".js-options-menu");

menuButtn.addEventListener("click", () => {
  if (menu.classList.contains("menu-visible")) {
    console.log(menu)
    menu.classList.remove("menu-visible");
  } else {
    menu.classList.add("menu-visible");
  }
});
