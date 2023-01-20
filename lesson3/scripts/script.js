let year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

let lastUpdate = document.querySelector("#lastUpdate");
lastUpdate.innerHTML = new Date(document.lastModified);
