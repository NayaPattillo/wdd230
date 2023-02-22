
const userVisits = document.querySelector('#userVisits');
/*let daysBetween = new Date().getDay - new Date(document.lastModified);*/
function daysBetween() {
    let day = new Date().getDay();
    localStorage.setItem('dayVisited', day)
    let localDay = localStorage.getItem('dayVisited');

    let lastVisit = new Date(document.lastModified).getDay();
    localStorage.setItem('lastVisited', lastVisit)
    let localVisit = localStorage.getItem('lastVisited');

    let daysBetween = localDay - localVisit;
    let rounded = Math.round(daysBetween);
    return rounded
}

userVisits.textContent = daysBetween();
