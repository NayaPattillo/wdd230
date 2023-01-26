
const date = document.querySelector("#date");
date.textContent = new Date().toLocaleDateString("en-UK", {
  weekday: "long",
  day: "numeric",
  year: "numeric",
  month: "long"
});


const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();


const lastModified = document.querySelector("#lastUpdate");
lastModified.textContent = new Date(document.lastModified).toLocaleString();


const toggleMenu = () => {
  document.querySelector("#primaryNav").classList.toggle("open");
}
const x = document.querySelector("#hamburgerBtn")
x.onclick = toggleMenu;