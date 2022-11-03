const searchBtn = document.querySelector(".search-bar");
const cancelBtn = document.querySelector(".times");
const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector(".fa-search");


searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchIcon.classList.add("active");
 setTimeout(() => {
    cancelBtn.classList.add("active");
 }, 1);
}

cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchIcon.classList.remove("active");
  cancelBtn.classList.remove("active");
}