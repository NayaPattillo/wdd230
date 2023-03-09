
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const condition = document.querySelector('#condition');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bozeman,us&units=imperial&appid=408959da960ba69cf5ce9558b4e2d4dd';

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

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    condition.textContent = desc;
}