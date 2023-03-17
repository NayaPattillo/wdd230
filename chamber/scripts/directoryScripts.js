
const displayMembers = (members) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    members.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let img = document.createElement('img');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
  
      
      h2.textContent = `${member.name}`;
      p1.textContent = `Address: ${member.address}`;
      p2.textContent = `Phone Number: ${member.phone}`;
      p3.textContent = `Website: ${member.website}`;
      p4.textContent = `Membership Level: ${member.level}`;
  
      // Build the image portrait by setting all the relevant attribute
      img.setAttribute('src', member.img);
      img.setAttribute('alt', `Logo of ${member.name}`);
      img.setAttribute('loading', 'lazy');
      img.setAttribute('width', '100');
      img.setAttribute('height', '100');
  
      // Append the section(card) with the created elements
      card.appendChild(img);
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
  
      cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression

async function getData() {
    const response = await fetch('json/data.json');
    const data = await response.json();
    
    displayMembers(data.members);
  }
  
getData();



const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();


const lastModified = document.querySelector(".lastUpdate");
lastModified.textContent = new Date(document.lastModified).toLocaleString();


const toggleMenu = () => {
  document.querySelector(".primaryNav").classList.toggle("open");
}
const x = document.querySelector(".hamburgerBtn")
x.onclick = toggleMenu;




const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");


gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cards");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}
