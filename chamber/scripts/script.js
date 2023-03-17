
const date = document.querySelector("#date");
date.textContent = new Date().toLocaleDateString("en-UK", {
  weekday: "long",
  day: "numeric",
  year: "numeric",
  month: "long"
});


const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();


const lastModified = document.querySelector(".lastUpdate");
lastModified.textContent = new Date(document.lastModified).toLocaleString();


const toggleMenu = () => {
  document.querySelector(".primaryNav").classList.toggle("open");
}
const x = document.querySelector(".hamburgerBtn")
x.onclick = toggleMenu;



const newDate = new Date();
let weekDay = newDate.getDay();
let message;
if (weekDay = 'Monday'){
    message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}else if (weekDay = 'Tuesday'){
    message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}
else{
  message = '';
}
document.querySelector('#message').textContent = message;

const displayMembers = (members) => {
  const spotlights = document.querySelector('div.spotlights');

  members.forEach((member) => {

    let spotlight = document.createElement('div');
    let name = document.createElement('h3');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    name.textContent = `${member.name}`;
    p1.textContent = `Address: ${member.address}`;
    p2.textContent = `Phone Number: ${member.phone}`;
    p3.textContent = `Website: ${member.website}`;

    img.setAttribute('src', member.img);
    img.setAttribute('alt', `Logo of ${member.name}`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '100');
    img.setAttribute('height', '100');

    spotlight.appendChild(img);
    spotlight.appendChild(name);
    spotlight.appendChild(p1);
    spotlight.appendChild(p2);
    spotlight.appendChild(p3);

    if (member.level == "Gold"){
      spotlights.appendChild(spotlight);
    }
    
  }) 
} 

async function getData() {
    const response = await fetch('json/data.json');
    const data = await response.json();
    
    displayMembers(data.members);
}
  
getData();

