const menu = document.querySelector("header img:nth-child(2)");
const closeMenu = document.querySelector(".sidebar img");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

const showMenu = () => {
  sidebar.style.display = "flex";
};

const closeTheMenu = () => {
  sidebar.style.display = "none";
};

menu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", closeTheMenu);
