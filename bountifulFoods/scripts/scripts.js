//slides

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}




//weather

const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const condition = document.querySelector('#condition');
const humidityDesc = document.querySelector('#humidity');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,us&units=imperial&appid=408959da960ba69cf5ce9558b4e2d4dd';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok){
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      }else{
          throw Error(await response.text());
      }
    } 
    catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(2)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const humid = weatherData.humidity;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    condition.textContent = desc;
    humidityDesc.textContent = humid;
}


//footer
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();


const lastModified = document.querySelector(".lastUpdate");
lastModified.textContent = new Date(document.lastModified).toLocaleString();



//fresh
const inputValues = document.querySelector(".top");
const form = document.querySelector("#form");
const log = document.querySelector("#log");
function logSubmit(event) {
  log.textContent = `Order: ${inputValues} | Time of Order: ${event.lastModified}`;
  event.preventDefault();
}
form.addEventListener("submit", logSubmit);

let count = 0;
const btn = document.querySelector(".submitBtn");
const disp = document.querySelector("orders");
          
btn.onclick = function () {
  count++;
  disp.innerHTML = count;
}
