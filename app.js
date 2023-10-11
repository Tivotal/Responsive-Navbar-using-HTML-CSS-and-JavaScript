/* Created by Tivotal */

let toggleBtn = document.querySelector(".toggle-btn");
let dropdownMenu = document.querySelector(".dropdown");
let toggleIcon = document.querySelector(".toggle-btn i");

toggleBtn.onclick = () => {
  dropdownMenu.classList.toggle("show");
  let isOpen = dropdownMenu.classList.contains("show");

  toggleIcon.classList = isOpen ? "fas fa-times" : "fas fa-bars";
};
